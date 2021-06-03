import { IComplexKeyframeValue } from "motion-ux";
import ParsedValue from "motion-ux/dist/ParsedValue";
import React from "react";

export interface IComplexCSSProperties {
  [key: string]: IComplexKeyframeValue | number | string;
}

export type TransitionState = {
  [key: string]: React.CSSProperties | IComplexCSSProperties;
};

export interface IUseTransitionOptions<TElement> {
  duration: number;
  applyValues?: (obj: TElement, values: { [key: string]: ParsedValue }) => void;
  ref?: React.Ref<TElement>;
  onComplete?: () => void;
}

function useTransition<T = any>(
  state: TransitionState,
  options: IUseTransitionOptions<T>
) {}
