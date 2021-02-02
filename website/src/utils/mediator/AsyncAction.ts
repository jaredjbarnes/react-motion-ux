import { Subject } from 'rxjs';

type Reject = (reason?: any) => void;

export type OnCancelCallback = (reason: CancelledError | TimeoutError) => void;
export type Action<T> = () => Promise<T>;
export type PromiseResult<T> = T extends () => Promise<infer U> ? U : never;

/**
 * Describes the custom recovery strategy function that can be passed to retry.
 */
export type RecoverStrategy<E = Error | string> = (
  error: E | TimeoutError | CancelledError,
  retryCount: number
) => boolean | Promise<boolean>;

export class CancelledError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CancelledError';
  }
}

export class TimeoutError extends CancelledError {
  constructor(message: string) {
    super(message);
    this.name = 'TimeoutError';
  }
}

/**
 * For narrowing type in the retry method.
 * @param it number | RecoverStrategy
 */
function isNumber<E>(it: number | RecoverStrategy<E>): it is number {
  return typeof it === 'number';
}

/**
 * A function that does absolutely nothing. :)
 */
function noop() {}

/**
 * The new and improved PromiseBuilder. Tighter, cleaner, sleeker, faster.
 * @param action Action<T> - Method that returns a promise which resolves to T.
 */
export class AsyncAction<TResult, TError = Error | string> {
  private action: Action<TResult>;
  private executingPromise: Promise<TResult> | null = null;
  private rejectExecutingPromise: Reject = noop;
  private retryLimit = 0;
  private useExponentialBackoff = true;
  private timeout: number | null = null;
  private timeoutTimer: number | null = null;
  private cancelSubject = new Subject<null>();
  private _recoverCount = 0;

  constructor(action: Action<TResult>) {
    this.action = action;
  }

  getExecutingPromise() {
    return this.executingPromise;
  }

  retry() {
    if (this.executingPromise == null) {
      this.cancelSubject = new Subject<null>();
      this._recoverCount = 0;
    }

    return this.execute();
  }

  /**
   * Just a simple getter for the private retryCount value.
   */
  get retryCount() {
    return this._recoverCount;
  }

  /**
   * Execute the stored action and return the promise.
   */
  public execute() {
    if (this.executingPromise == null) {
      // Setup the wrapper promise. This is mainly so we can facilitate retries.
      // We dont resolve this until the action is resolved or retry limit is reached.

      this.executingPromise = new Promise((resolve, reject) => {
        // Start the timer if needed.
        this.startTimer();

        // We need to store this on the class so we can cancel the promise.
        this.rejectExecutingPromise = reject;

        this.action()
          .catch((error: TError) => {
            // Will attempt to recover if it should. If it exhausts recover attempts it will
            // reject the executingAction. if it succeeds then it will resolve the executingAction
            return this.retryWithRecovery(error);
          })
          .then(value => {
            this.reset();
            resolve(value);
          })
          .catch(error => {
            // This catch block will be reached if all recovery attempts failed.
            // So reset the action and throw.
            this.reset();
            this.rejectExecutingPromise(error);
          });
      });
    }

    return this.executingPromise;
  }

  /**
   * Starts a time if necessary.
   */
  private startTimer() {
    if (this.timeout != null) {
      const time = this.timeout;
      this.timeoutTimer = window.setTimeout(() => {
        this.cancelExecution(new TimeoutError(`Promise timed out after ${time}`));
      }, time);
    }
  }

  /**
   * Stops timer if necessary.
   */
  private endTimer() {
    if (this.timeoutTimer != null) {
      window.clearTimeout(Number(this.timeoutTimer));
      this.timeoutTimer = null;
    }
  }

  /**
   * Resets the state of the action.
   */
  private reset() {
    this.executingPromise = null;
    this.endTimer();
  }

  /**
   * Handles retry attempts. If it enounters a CancelledError or TimeoutError it will stop.
   * If it fails the shouldRecover check, it will stop.
   * @param error Error | CancelledError | TimeoutError
   */
  private async retryWithRecovery(error: TError) {
    let shouldRecover =
      // Only if AsyncAction hasn't been cancelled.
      // `value` is a private variable... which is stupid, and I do what I want.
      this.cancelSubject.thrownError === null &&
      // User definable recovery strategy
      (await this.shouldRecover(error, this._recoverCount, this.retryLimit));

    if (!shouldRecover) throw error;

    // It is now officially retrying.
    this._recoverCount++;

    await this.maybeDelay();

    try {
      return await this.action();
    } catch (err) {
      return this.retryWithRecovery(err as TError);
    }
  }

  /**
   * The default recovery strategy.
   */
  private async shouldRecover(_error: TError, retryCount: number, retryLimit?: number) {
    return retryLimit != null ? retryCount < retryLimit : false;
  }

  /**
   * Handles exponential backoff if its set, otherwise resolves immediately (no delay);
   */
  private maybeDelay() {
    if (this.useExponentialBackoff) {
      return new Promise<void>(resolve => {
        const time = ((Math.pow(2, this._recoverCount) - 1) / 2) * 100;
        window.setTimeout(resolve, time);
      });
    }

    return Promise.resolve();
  }

  /**
   * Cancel the current executing action if there is one.
   * This method is also used internally by timeout to cancel with a TimeoutError.
   */
  public cancelExecution<E extends CancelledError>(reason: string | E = 'Cancelled') {
    if (this.executingPromise == null) return;
    const error = typeof reason === 'string' ? new CancelledError(reason) : reason;
    this.rejectExecutingPromise(error);
    this.cancelSubject.error(error);
  }

  /**
   * Subscribe to cancellation event and execute your own logic when cancellation happens.
   * @param callback onCancel handler. This method will be invoked when cancel is called.
   * @returns Subscription
   */
  public onCancel(callback: OnCancelCallback) {
    return this.cancelSubject.subscribe({ error: callback });
  }

  /**
   * Attach a timeout in milliseconds. This timeout is inclusive of retries. This means
   * that an action execution can timeout even though it may be in the middle of retrying.
   */
  public timeoutIn(time: number) {
    this.timeout = time;
    return this;
  }

  /**
   * Enable retries. Disabled by default. You can pass either a simple number to define number
   * of retry attempts, or you can use your own custom recovery strategy to fit any scenario.
   * Enable exponential backoff to gradually increase the time between retry attempts.
   */
  public setRecoverStrategy(
    amountOrRecoveryStrategy: number | RecoverStrategy<TError>,
    useExponentialBackoff = true
  ) {
    this.useExponentialBackoff = useExponentialBackoff;

    if (isNumber<TError>(amountOrRecoveryStrategy)) {
      this.retryLimit = amountOrRecoveryStrategy;
    } else {
      this.shouldRecover = async (...args: Parameters<RecoverStrategy<TError>>) =>
        await amountOrRecoveryStrategy(...args);
    }

    return this;
  }

  /**
   * Works almost just like `Promise.resolve()`.
   * AsyncAction.resolve(VALUE).execute()
   * @param value Resolved value
   */
  static resolve<T>(value: T) {
    return new AsyncAction<T>(() => {
      return Promise.resolve<T>(value);
    });
  }

  /**
   * Works almost just like `Promise.reject()`
   * AsyncAction.reject(ERROR).execute()
   * @param error The rejection reason.
   */
  static reject<TResult, E>(error: E) {
    return new AsyncAction<TResult, E>(() => {
      return Promise.reject<TResult>(error);
    });
  }
}
