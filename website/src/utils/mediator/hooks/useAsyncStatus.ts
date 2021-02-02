import { useState } from 'react';
import { useAsyncValue } from './useAsyncValue';
import {
  AsyncActionRunner,
  Status,
} from '@operator/shared/utils/mediator/AsyncActionRunner';

export interface StatusHelper {
  name: Status;
  isInitial: boolean;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  isDisabled: boolean;
}

/**
 * This will return the status of the runner. The values will be one of the following:
 * * "initial"
 * * "pending"
 * * "error"
 * * "success"
 * * "disabled"
 *
 * This is useful feedback when using async runners.
 *
 * @param runner The AsyncActionRunner to watch.
 * ## Example
 *
 * ```tsx
 * function MyComponent(){
 *  const mediator = useMediator();
 *  const status = useAsyncStatus(mediator.someObservableValue);
 *
 *  return <div>{status.name}<div>;
 * }
 * ```
 */
export function useAsyncStatus(runner: AsyncActionRunner<any, any>) {
  const status = useAsyncValue(runner.status);

  // We use the same object to reduce memory churn.
  const [statusObject] = useState<StatusHelper>(() => {
    return {
      name: status,
      isInitial: status === Status.INITIAL,
      isPending: status === Status.PENDING,
      isSuccess: status === Status.SUCCESS,
      isError: status === Status.ERROR,
      isDisabled: status === Status.DISABLED,
    };
  });

  statusObject.name = status;
  statusObject.isInitial = status === Status.INITIAL;
  statusObject.isPending = status === Status.PENDING;
  statusObject.isSuccess = status === Status.SUCCESS;
  statusObject.isError = status === Status.ERROR;
  statusObject.isDisabled = status === Status.DISABLED;

  return statusObject;
}
