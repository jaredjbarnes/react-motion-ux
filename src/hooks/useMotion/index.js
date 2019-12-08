import { useEffect, useRef } from "react";
import { Timeline } from "motion-ux";
import createAnimations from "./createAnimations";
import createAdjustedAnimations from "./createAdjustedAnimations";
import getValues from "../getValues";
import isEqual from "../isEqual";

const transformOptions = options => {
  Object.keys(options).forEach(key => {
    options[key] = transformOption(options[key]);
  });
};

const transformOption = value => {
  if (typeof value === "string") {
    return {
      value: value
    };
  } else {
    return value;
  }
};

const applyValues = (elementRef, values) => {
  if (elementRef.current != null && elementRef.current.style != null) {
    const element = elementRef.current;

    Object.keys(values).forEach(key => {
      element.style[key] = values[key];
    });
  }
};

const useMotion = (options, duration) => {
  const elementRef = useRef(null);
  const timeline = useRef(null);
  const lastOptions = useRef(null);

  transformOptions(options);
  const isDifferent = !isEqual(options, lastOptions.current);

  if (timeline.current == null) {
    timeline.current = new Timeline({
      animations: createAnimations(options),
      duration: duration
    });

    timeline.current.observe("RENDER", () => {
      applyValues(elementRef, getValues(timeline.current));
    });

    timeline.current.play();
  }

  if (isDifferent && lastOptions.current != null) {
    const animations = createAdjustedAnimations(
      timeline.current,
      lastOptions.current,
      options,
    );

    timeline.current.dispose();

    timeline.current = new Timeline({
      animations: animations,
      duration: duration
    });

    timeline.current.observe("RENDER", () => {
      applyValues(elementRef, getValues(timeline.current));
    });

    timeline.current.play();
  }

  useEffect(() => {
    return () => {
      timeline.current.dispose();
    };
  }, []);

  lastOptions.current = options;

  return elementRef;
};

export default useMotion;
