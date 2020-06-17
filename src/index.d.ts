import React, { CSSProperties } from "react";

declare module "react-motion-ux" {
  export var easings: {
    easeInQuad(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutQuad(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutQuad(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInCubic(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutCubic(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutCubic(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInQuart(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutQuart(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutQuart(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInQuint(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutQuint(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutQuint(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInSine(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutSine(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutSine(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInExpo(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutExpo(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutExpo(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInCirc(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutCirc(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutCirc(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInElastic(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutElastic(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutElastic(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInBack(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutBack(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutBack(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInBounce(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeOutBounce(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    easeInOutBounce(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
    linear(
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ): number;
  };

  export enum RepeatDirections {
    DEFAULT = 0,
    ALTERNATE = 1,
  }

  export enum TimelineStates {
    FORWARD = 1,
    REVERSE = -1,
    STOPPED = 0,
  }

  export interface TimelineClock {
    register(callback: () => void);
    unregister(callback: () => void);
    now(): number;
  }

  export type Animation = {
    name: string;
    property: string;
    to: number | string;
    from: number | string;
    startAt: number;
    endAt: number;
    easing?: (
      currentTime: number,
      startAt: number,
      delta: number,
      duration: number
    ) => number;
    controls?: string[] | number[];
  };

  export type TimelineOptions = {
    animations: Animation[];
    duration: number;
    clock?: TimelineClock;
  };

  export class Observer {
    notify(event: {
      type: string;
      animations?: AnimatedValues;
      progress?: number;
      lastProgress?: number;
    });
    stop();
    start();
    dispose();
  }

  export class TimeObserver extends Observer {}

  export class Timeline {
    constructor(options: TimelineOptions);
    static repeatDirections: RepeatDirections;
    duration: number;
    timeScale: number;
    repeat: number;
    repeatDirection: RepeatDirections;
    progress: number;
    play();
    reverse();
    stop();
    seek(to: number);
    render(): AnimatedValues;
    getCurrentValues(): AnimatedValues;
    getValuesAt(progress): AnimatedValues;
    dispose();
    observeTime(
      time: number,
      callback: (event: { type: string }) => void
    ): TimeObserver;
    observe(
      type: string,
      callback: (event: { type: string }) => void
    ): Observer;
  }

  export type KeyValue = {
    [key: string]: string | number;
  };

  export type AnimatedValues = {
    [key: string]: KeyValue;
  };

  export type StatesGenerator<TProps> = (props: TProps) => States;

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
