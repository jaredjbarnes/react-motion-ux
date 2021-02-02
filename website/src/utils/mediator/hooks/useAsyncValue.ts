import { useMemo, useEffect, useState } from 'react';
import ObservableValue from '@operator/shared/utils/mediator/ObservableValue';

/**
 * This hook allows you subscribe to an ObservableValue and AsyncActionRunner.
 * @param observableValue The value to watch.
 *
 * ```ts
 * function MyComponent(){
 *  const mediator = useMediator();
 *  // This forces a rerender whenever the observable value changes.
 *  const value = useAsyncValue(mediator.someObservableValue);
 *
 *  return <div>{value}</div>
 * }
 * ```
 */
export function useAsyncValue<TValue, TInitial = TValue>(
  observableValue: ObservableValue<TValue, TInitial>
) {
  const [value, setValue] = useState<TValue | TInitial>(() => observableValue.getValue());

  const subscription = useMemo(() => {
    return observableValue.onChange(setValue);
  }, [observableValue]);

  useEffect(() => () => subscription.unsubscribe(), [subscription]);

  return value;
}
