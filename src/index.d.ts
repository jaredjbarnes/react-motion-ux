import React, { CSSProperties } from "react";

declare module "react-motion-ux" {
  export type easings = {
    easeInQuad(currentTime, startAt, delta, duration): number;
    easeOutQuad(currentTime, startAt, delta, duration): number;
    easeInOutQuad(currentTime, startAt, delta, duration): number;
    easeInCubic(currentTime, startAt, delta, duration): number;
    easeOutCubic(currentTime, startAt, delta, duration): number;
    easeInOutCubic(currentTime, startAt, delta, duration): number;
    easeInQuart(currentTime, startAt, delta, duration): number;
    easeOutQuart(currentTime, startAt, delta, duration): number;
    easeInOutQuart(currentTime, startAt, delta, duration): number;
    easeInQuint(currentTime, startAt, delta, duration): number;
    easeOutQuint(currentTime, startAt, delta, duration): number;
    easeInOutQuint(currentTime, startAt, delta, duration): number;
    easeInSine(currentTime, startAt, delta, duration): number;
    easeOutSine(currentTime, startAt, delta, duration): number;
    easeInOutSine(currentTime, startAt, delta, duration): number;
    easeInExpo(currentTime, startAt, delta, duration): number;
    easeOutExpo(currentTime, startAt, delta, duration): number;
    easeInOutExpo(currentTime, startAt, delta, duration): number;
    easeInCirc(currentTime, startAt, delta, duration): number;
    easeOutCirc(currentTime, startAt, delta, duration): number;
    easeInOutCirc(currentTime, startAt, delta, duration): number;
    easeInElastic(currentTime, startAt, delta, duration): number;
    easeOutElastic(currentTime, startAt, delta, duration): number;
    easeInOutElastic(currentTime, startAt, delta, duration): number;
    easeInBack(currentTime, startAt, delta, duration): number;
    easeOutBack(currentTime, startAt, delta, duration): number;
    easeInOutBack(currentTime, startAt, delta, duration): number;
    easeInBounce(currentTime, startAt, delta, duration): number;
    easeOutBounce(currentTime, startAt, delta, duration): number;
    easeInOutBounce(currentTime, startAt, delta, duration): number;
    linear(currentTime, startAt, delta, duration): number;
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
    easing: () => number;
    controls: string[] | number[];
  };

  export type TimelineOptions = {
    animations: Animation[];
    duration: number;
    clock?: TimelineClock;
  };

  export interface Observer {
    notify(
      event:
        | { type: string }
        | {
            type: "RENDER";
            animations: AnimatedValues;
            progress: number;
            lastProgress: number;
          }
    );
    stop();
    start();
    dispose();
  }

  export interface TimeObserver extends Observer {}

  export declare class Timeline {
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
