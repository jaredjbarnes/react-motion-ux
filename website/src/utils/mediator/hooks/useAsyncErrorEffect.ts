import { useEffect, useRef } from 'react';
import { ObservableValue } from '@operator/shared/utils/mediator/ObservableValue';

/**
 * Use this when need to be notified of an error change and not necessarily want too
 * rerender the component. This is helpful when syncing state between mediators, one
 * above and one below.
 * @param callback Callback to be invoked on an error change.
 * @param observableValue The ObservableValue or AsyncActionRunner to observer for errors.
 *
 * ## Example
 * ```tsx
 * function MyComponent(){
 *  const mediatorAbove = useMediator();
 *  const mediatorBelowRef = useRef<MediatorBelow | null>(null);
 *
 *  useAsyncErrorEffect((error)=>{
 *    if (error != null && mediatorBelowRef.current != null){
 *        mediatorBelowRef.current.refresh();
 *    }
 *  }, mediatorAbove.observableValue);
 *
 *  return <SomeComponent mediatorRef={mediatorBelowRef} />
 * }
 * ```
 */
export function useAsyncErrorEffect<TError>(
  callback: (error: TError | null) => void,
  observableValue: ObservableValue<any, any, TError>
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const subscription = observableValue.onError(error => {
      callbackRef.current(error);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [observableValue]);

  useEffect(() => {
    callbackRef.current(observableValue.getError());
  }, [observableValue]);
}
