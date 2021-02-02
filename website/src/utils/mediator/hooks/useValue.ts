import { useAsyncValue } from './useAsyncValue';
import ObservableValue from '@operator/shared/utils/mediator/ObservableValue';

/**
 * @deprecated Use "useAsyncValue" instead.
 * @param observableValue
 */
export function useValue<TValue, TInitial>(
  observableValue: ObservableValue<TValue, TInitial>
) {
  return useAsyncValue<TValue, TInitial>(observableValue);
}
