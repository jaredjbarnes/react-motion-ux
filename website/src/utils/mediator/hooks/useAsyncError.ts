import { useMemo, useEffect, useState } from 'react';
import { ObservableValue } from '@operator/shared/utils/mediator/ObservableValue';

/**
 * The error of the observable value or null to signify it doesn't have an error.
 * This can be used on both ObservableValues and AsyncActionRunners.
 * @param observableValue The ObservableValue or AsyncActionRunner to be observing for errors.
 *
 * ## Example
 *
 * ```tsx
 * function MyComponent(){
 *  const mediator = useMediator();
 *  const error = useAsyncError(mediator.someObservableValue);
 *
 *  if (error == null){
 *    return null;
 *  }
 *
 *  return <div>{error.message}</div>
 * }
 * ```
 */
export function useAsyncError<TError>(
  observableValue: ObservableValue<any, any, TError>
) {
  const [state, setState] = useState(observableValue.getError());

  const subscription = useMemo(() => {
    return observableValue.onError(setState);
  }, [observableValue]);

  useEffect(() => () => subscription.unsubscribe(), [subscription]);

  return state;
}
