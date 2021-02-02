import { useRef, useState } from 'react';
import {
  AsyncActionRunner,
  Status,
} from '@operator/shared/utils/mediator/AsyncActionRunner';
import { StatusHelper } from './useAsyncStatus';
import { useAsyncValueEffect } from '@operator/shared/utils/mediator/hooks/useAsyncValueEffect';

/**
 * An effect that invokes a callback when the status changes.
 * @param callback Invoked when the status of an AsyncActionRunner changes.
 * @param runner The AsyncActionRunner to watch.
 *
 * ```tsx
 * function MyComponent(){
 *  const mediator = useMediator();
 *
 *  // This callback is called when the runners status changes.
 *  useAsyncStatusEffect(() => {
 *    // Perhaps update state and perhaps not.
 *  }, mediator.someAsyncActionRunner);
 * }
 * ```
 */
export function useAsyncStatusEffect(
  callback: (value: StatusHelper) => void,
  runner: AsyncActionRunner<any, any, any>
) {
  const callbackRef = useRef(callback);

  // We use the same object to reduce memory churn.
  const [statusObject] = useState<StatusHelper>(() => {
    return {
      name: Status.INITIAL,
      isInitial: status === Status.INITIAL,
      isPending: status === Status.PENDING,
      isSuccess: status === Status.SUCCESS,
      isError: status === Status.ERROR,
      isDisabled: status === Status.DISABLED,
    };
  });

  return useAsyncValueEffect(status => {
    statusObject.name = status;
    statusObject.isInitial = status === Status.INITIAL;
    statusObject.isPending = status === Status.PENDING;
    statusObject.isSuccess = status === Status.SUCCESS;
    statusObject.isError = status === Status.ERROR;
    statusObject.isDisabled = status === Status.DISABLED;

    callbackRef.current(statusObject);
  }, runner.status);
}
