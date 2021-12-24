import { useCallback, useEffect, useRef, useState } from "react";
import { KeyframeTransition } from "motion-ux";
import { useForkRef } from "./useForkRef";

export interface Transition {
  value: number | string;
  duration: number;
  controlsIn?: (number | string)[];
  easeIn?: string;
  delay?: number;
}

export type Transitions = { [key: string]: Transition };

export interface TransitionOptions<T> {
  transitions: Transitions;
  ref?: React.Ref<T>;
}

export function useTransition<T extends HTMLElement>({
  ref: suppliedRef,
  transitions,
}: TransitionOptions<T>) {
  const elementRef = useRef<T>();
  const ref = useForkRef(suppliedRef, elementRef);

  const render = useCallback(() => {
    return function (animation) {
      const element = elementRef.current;

      if (element == null) {
        return;
      }

      const values = animation.currentValues;
      Object.keys(values).forEach((key) => {
        element.style[key] = values[key].join("");
      });
    };
  }, []);

  const [keyframeTransition] = useState(() => {
    const keyframeTransition = new KeyframeTransition();
    keyframeTransition.player.render = render;
    return keyframeTransition;
  });

  useEffect(() => {
    if (JSON.stringify){}
  }, [transitions, keyframeTransition]);

  return ref;
}
