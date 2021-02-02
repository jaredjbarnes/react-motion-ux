import { useEffect, useRef } from 'react';
import { ObservableValue } from '@operator/shared/utils/mediator/ObservableValue';

/**
 *
 * @param callback Invoked when the value of an ObservableValue or
 * an AsyncActionRunner changes its value.
 * @param observableValue The ObservableValue or AsyncActionRunner to watch.
 * ```ts
 * function MyComponent(){
 *  const mediator = useMediator();
 *
 *  // This callback is called when the observable value changes.
 *  useAsyncValueEffect(() => {
 *    // Perhaps update state and perhaps not.
 *  }, mediator.someObservableValue);
 * }
 * ```
 */
export function useAsyncValueEffect<TValue, TInitial = TValue>(
  callback: (value: TValue | TInitial) => void,
  observableValue: ObservableValue<TValue, TInitial>
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const subscription = observableValue.onChange(value => {
      callbackRef.current(value);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [observableValue]);

  useEffect(() => {
    callbackRef.current(observableValue.getValue());
  }, [observableValue]);
}
