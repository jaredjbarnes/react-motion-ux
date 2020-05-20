import React, { CSSProperties } from "react";

declare module "react-motion-ux" {
  export type KeyValue = {
    [key: string]: string | number;
  };

  export type StatesGenerator<TProps> = (props:TProps) => States;

  export type States = {
    [key: string]: CSSProperties | ComplexCSSProperties;
  };

  export type ComplexCSSProperties = {
    [key: string]:
      | {
          startAt: number;
          endAt: number;
          value: any;
        }
      | string
      | number;
  };

  export type TransitionOptions<TElement, TAnimatedProperties> = {
    duration: number;
    applyValues?: (obj: any, values: KeyValue) => void;
    ref?: React.Ref<TElement>;
    animate?: boolean;
    onComplete?: () => void;
    initialProperties?: TAnimatedProperties;
  };

  export type StyledTranstionOptions<TElement, TAnimatedProperties> = {
    duration?: number;
    props?: any;
    ref?: React.Ref<TElement>;
    animate?: boolean;
    onComplete?: () => void;
    initialProperties?: TAnimatedProperties;
  };

  export function useTransition<T = any, TAnimatedProperties = KeyValue>(
    animatedProperties: TAnimatedProperties,
    options: TransitionOptions<T, TAnimatedProperties>
  ): React.Ref<T> | React.RefObject<T>;

  export function makeStyledTransition<TElement, TProps = any>(
    states: States | StatesGenerator<TProps>,
    duration: number
  ): (
    stateName: string,
    options?: StyledTranstionOptions<
      TElement,
      CSSProperties | ComplexCSSProperties
    >
  ) => React.Ref<TElement>;
}
