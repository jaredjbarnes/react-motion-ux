import React, { CSSProperties } from "react";

declare module "react-motion-ux";

type KeyValue = {
  [key: string]: string | number;
};

type States = {
  [key: string]: CSSProperties;
};

type TransitionOptions<TElement, TAnimatedProperties> = {
  duration: number;
  applyValues?: (obj: any, values: KeyValue) => void;
  ref?: React.Ref<TElement>;
  animate?: boolean;
  onComplete?: () => void;
  initialProperties?: TAnimatedProperties;
};

type StyledTranstionOptions<TElement, TAnimatedProperties> = {
  duration?: number;
  props?: any;
  ref?: React.Ref<TElement>;
  animate?: boolean;
  onComplete?: () => void;
  initialProperties?: TAnimatedProperties;
};

export declare function useTransition<T = any, TAnimatedProperties = KeyValue>(
  animatedProperties: TAnimatedProperties,
  options: TransitionOptions<T, TAnimatedProperties>
): React.Ref<T> | React.RefObject<T>;

export declare function makeStyledTransition<TElement>(
  states: States,
  duration: number
): (
  stateName: string,
  options?: StyledTranstionOptions<TElement, CSSProperties>
) => React.Ref<TElement>;
