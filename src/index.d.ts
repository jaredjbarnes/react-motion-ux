import React, { CSSProperties } from "react";

declare module "react-motion-ux" {
  export var easings: {
    easeInQuad: Easing;
    easeOutQuad:IEasing;
    easeInOutQuad:IEasing;
    easeInCubic:IEasing;
    easeOutCubic:IEasing;
    easeInOutCubic:IEasing;
    easeInQuart:IEasing;
    easeOutQuart:IEasing;
    easeInOutQuart:IEasing;
    easeInQuint:IEasing;
    easeOutQuint:IEasing;
    easeInOutQuint:IEasing;
    easeInSine:IEasing;
    easeOutSine:IEasing;
    easeInOutSine:IEasing;
    easeInExpo:IEasing;
    easeOutExpo:IEasing;
    easeInOutExpo:IEasing;
    easeInCirc:IEasing;
    easeOutCirc:IEasing;
    easeInOutCirc:IEasing;
    easeInElastic:IEasing;
    easeOutElastic:IEasing;
    easeInOutElastic:IEasing;
    easeInBack:IEasing;
    easeOutBack:IEasing;
    easeInOutBack:IEasing;
    easeInBounce:IEasing;
    easeOutBounce:IEasing;
    easeInOutBounce:IEasing;
    linear:IEasing;
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

  export interface IEasing {
    valueAt(percentage: number): number;
    clone(): Easing;
  }

  export class BezierCurve {
    constructor(points: number[]);
    valueAt(percentage: number): number;
    clone(): BezierCurve;
  }

  export class Easing extends BezierCurve implements IEasing {
    clone(): Easing;
  }

  export class BlendedEasing extends Easing implements IEasing {
    clone(): BlendedEasing;
  }

  export type Animation = {
    name: string;
    property: string;
    to: number | string;
    from: number | string;
    startAt: number;
    endAt: number;
    easing?: IEasing;
    controls?: string[] | number[];
  };

  export type TimelineOptions = {
    animations: Animation[];
    duration: number;
    clock?: TimelineClock;
  };

  export type ObserverEvent = {
    type: string;
    animations?: AnimatedValues;
    progress?: number;
    lastProgress?: number;
  };

  export class Observer {
    notify(event: ObserverEvent);
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
      callback: (event: ObserverEvent) => void
    ): TimeObserver;
    observe(type: string, callback: (event: ObserverEvent) => void): Observer;
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
          controls?: any[];
          easing?:
            | "quad"
            | "cubic"
            | "quart"
            | "quint"
            | "sine"
            | "expo"
            | "circ"
            | "elastic"
            | "overshoot"
            | "bounce"
            | "linear" | IEasing;
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
    onArrival?: (state: string) => void;
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

export class TransitionMediator {
  setShouldAnimate(shouldAnimate: boolean): void;
  setAnimatedProperties(animatedProperties: ComplexCSSProperties): void;
  setInitialProperties(initialProperties: ComplexCSSProperties): void;
  setOnCompleteCallback(onComplete: () => void): void;
  setConfigureCallback(configure: (timeline: Timeline) => void): void;
  setNode(node: HTMLElement): void;
  setRenderCallback(
    render: (node: HTMLElement, values: KeyValue) => void
  ): void;
  setDuration(duration: number): void;
  updateAnimationProperties(initialProperties: ComplexCSSProperties): void;
  dispose(): void;
}
