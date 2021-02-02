import { AsyncActionRunner } from '@operator/shared/utils/mediator/AsyncActionRunner';
import { useAsyncValue } from './useAsyncValue';
import { useAsyncError } from './useAsyncError';
import { useAsyncStatus } from './useAsyncStatus';

/**
 * Subscribes to the value, error, and status of an AsyncActionRunner. Only use this
 * if you are interseted in all the values of a runner. Because when any of the values
 * change it will rerender your component.
 * @param asyncActionRunner AsyncActionRunner
 *
 * ## Example
 * ```tsx
 * function MyComponent (){
 *  const mediator = useMediator();
 *  const runnerState = useAsyncState(mediator.someRunner);
 *
 *  return <div>
 *    {runnerState.isPending && <Loader />}
 *    {(runnerState.isSuccess || runnerState.isInitial) && <div>{runnerState.value}</div>}
 *    {runnerState.isError && <div>{runnerState.error.message}</div>}
 *  </div>
 * }
 * ```
 */
export function useAsyncState<TValue, TError, TInitial = TValue>(
  asyncActionRunner: AsyncActionRunner<TValue, TInitial, TError>
) {
  const value = useAsyncValue<TValue, TInitial>(asyncActionRunner);
  const error = useAsyncError<TError>(asyncActionRunner);
  const status = useAsyncStatus(asyncActionRunner);

  return {
    value,
    error,
    ...status,
  };
}
