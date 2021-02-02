import { AsyncAction, CancelledError } from '@operator/shared/utils/mediator/AsyncAction';

const success = 'Success';
const failure = 'Failed';
describe('AsyncAction', () => {
  test('Resolve.', async () => {
    const asyncAction = new AsyncAction(() => Promise.resolve('Success'));
    await expect(asyncAction.execute()).resolves.toBe('Success');
  });

  test('Retrying 3 times will increment retries to 3', async () => {
    const asyncAction = new AsyncAction(
      () =>
        new Promise((resolve, reject) => {
          if (asyncAction.retryCount <= 2) {
            reject(failure);
          }
          resolve(success);
        })
    );

    await asyncAction.setRecoverStrategy(3, false).execute();
    expect(asyncAction.retryCount).toBe(3);
  });

  test('Fail and retry thrice then resolve on 3rd retry', async () => {
    const asyncAction = new AsyncAction(async () => {
      if (asyncAction.retryCount < 3) {
        throw new Error(failure);
      }
      return success;
    });

    await expect(asyncAction.setRecoverStrategy(3, false).execute()).resolves.toBe(
      success
    );
  });

  test('Fail and retry thrice then resolve on 3rd retry with exponentialBackoff', async () => {
    const asyncAction = new AsyncAction(async () => {
      if (asyncAction.retryCount < 3) {
        throw new Error(failure);
      }
      return success;
    });

    await expect(asyncAction.setRecoverStrategy(3, true).execute()).resolves.toBe(
      success
    );
  });

  test('Fail and retry thrice then reject on 3rd retry', async () => {
    const asyncAction = new AsyncAction(async () => {
      if (asyncAction.retryCount < 4) {
        throw new Error('Failed');
      }
    });

    await expect(asyncAction.setRecoverStrategy(3, false).execute()).rejects.toThrow(
      'Failed'
    );
  });

  test('Cancel an execution and test onCancel defaults', async () => {
    const asyncAction = new AsyncAction(
      () => new Promise<void>(resolve => window.setTimeout(resolve, 5000))
    );

    const onCancel = jest.fn();
    const sub = asyncAction.onCancel(onCancel);

    const execution = asyncAction.execute();
    asyncAction.cancelExecution();

    await expect(execution).rejects.toThrow('Cancelled');

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onCancel.mock.calls[0][0]).toBeInstanceOf(CancelledError);
    expect(onCancel.mock.calls[0][0].message).toBe('Cancelled');

    sub.unsubscribe();
  });

  test('Cancel an execution and test onCancel custom message', async () => {
    const asyncAction = new AsyncAction(
      () => new Promise(resolve => window.setTimeout(resolve, 5000))
    );

    const onCancel = jest.fn();
    const sub = asyncAction.onCancel(onCancel);

    const execution = asyncAction.execute();
    const customCancelMsg = 'NOOOOO';
    asyncAction.cancelExecution(customCancelMsg);

    await expect(execution).rejects.toThrow(customCancelMsg);

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onCancel.mock.calls[0][0]).toBeInstanceOf(CancelledError);
    expect(onCancel.mock.calls[0][0].message).toBe(customCancelMsg);

    sub.unsubscribe();
  });

  test('Cant cancel a resolved/rejected execution', async () => {
    const resolveAsyncAction = new AsyncAction(() => Promise.resolve(success));
    const rejectAsyncAction = new AsyncAction(() => Promise.reject(failure));
    const onCancel = jest.fn();
    const resolveSub = resolveAsyncAction.onCancel(onCancel);
    const rejectSub = rejectAsyncAction.onCancel(onCancel);

    await resolveAsyncAction.execute();
    resolveAsyncAction.cancelExecution();
    expect(onCancel).toHaveBeenCalledTimes(0);

    // Have to catch the error or it will fail our test.
    try {
      await rejectAsyncAction.execute();
    } catch (e) {}
    rejectAsyncAction.cancelExecution();
    expect(onCancel).toHaveBeenCalledTimes(0);

    resolveSub.unsubscribe();
    rejectSub.unsubscribe();
  });

  test('Reject 1000 times and timeout in 0ms.', async () => {
    const action = async () => {
      return Promise.reject(new Error('Timed Out'));
    };

    const asyncAction = new AsyncAction(action);

    await expect(
      asyncAction.setRecoverStrategy(1000, false).timeoutIn(0).execute()
    ).rejects.toThrow('Timed Out');
  });

  test('Override retry strategy.', async () => {
    let count = 0;

    const action = async () => {
      count++;
      if (count < 4) {
        return Promise.reject(new Error('Failed'));
      } else {
        return Promise.resolve('Success');
      }
    };

    const asyncAction = new AsyncAction(action);

    await expect(
      asyncAction
        .setRecoverStrategy((error: Error) => {
          return error.message === 'Failed';
        }, false)
        .execute()
    ).resolves.toBe('Success');
    expect(count).toBe(4);
  });

  test('Call execute and ensure it is the same promise.', () => {
    const action = async () => 'Success';
    const asyncAction = new AsyncAction(action);

    const promise1 = asyncAction.execute();
    const promise2 = asyncAction.execute();

    expect(promise1).toEqual(promise2);
  });

  test('Retry action after successfully completed.', () => {
    const action = async () => 'Success';
    const asyncAction = new AsyncAction(action);

    return asyncAction.execute().then(value => {
      expect(value).toBe('Success');

      return asyncAction.retry().then(value => {
        expect(value).toBe('Success');
      });
    });
  });

  test('Retry action after a failure.', () => {
    let count = 0;

    const action = async () => {
      if (count === 0) {
        count++;
        throw new Error('Failed');
      } else {
        return 'Success';
      }
    };

    const asyncAction = new AsyncAction(action);

    return asyncAction
      .execute()
      .catch(error => {
        expect(error.message).toBe('Failed');
      })
      .finally(() => {
        return asyncAction.retry().then(value => {
          expect(value).toBe('Success');
        });
      });
  });

  test('Retry action immediately after executing.', () => {
    const action = async () => 'Success';
    const asyncAction = new AsyncAction(action);

    const result = asyncAction.execute();
    const result2 = asyncAction.retry();

    expect(result).toBe(result2);
  });

  test('Get executing promise', () => {
    const action = async () => 'Success';
    const asyncAction = new AsyncAction(action);

    const promise = asyncAction.execute();

    expect(asyncAction.getExecutingPromise()).toBe(promise);
  });

  test('Timeout Error', () => {
    return new Promise(resolve => {
      const action = new AsyncAction(() => {
        return new Promise(resolve => {
          window.setTimeout(() => {
            resolve();
          }, 1);
        });
      });

      action.timeoutIn(0);
      action.onCancel(error => {
        expect(error?.message).toBe(`Promise timed out after 0`);
        resolve();
      });
      action.execute();
    });
  });

  test('Chain off executing promise', () => {
    const action = async () => 'Success';
    const asyncAction = new AsyncAction(action);

    const promise = asyncAction.execute();
    const chainedPromise = promise
      .then(value => {
        return `${value}fully Finished`;
      })
      .then(value => {
        expect(value).toBe('Successfully Finished');
      });

    expect(asyncAction.getExecutingPromise()).toBe(promise);

    return chainedPromise;
  });

  test('Static Resolve', () => {
    const action = AsyncAction.resolve(0);

    return action.execute().then(value => {
      expect(value).toBe(0);
    });
  });

  test('Static Reject', () => {
    const action = AsyncAction.reject('Because I said so.');

    return action.execute().catch(error => {
      expect(error).toBe('Because I said so.');
    });
  });
});
