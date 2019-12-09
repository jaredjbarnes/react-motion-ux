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

const defaultApplyValues = (ref, values) => {
  if (ref.current != null) {
    const element = ref.current;

    Object.keys(values).forEach(key => {
      element[key] = values[key];
    });
  }
};

const assertAnimatingTheSameProperties = (optionsA, optionsB) => {
  const keysA = Object.keys(optionsA);
  const keysB = Object.keys(optionsB);

  keysA.sort();
  keysB.sort();

  const areTheSame = keysA.join("|") === keysB.join("|");

  if (!areTheSame) {
    throw new Error(
      `Invalid Arguments: useMotion cannot transition between css properties that don't match between states: ${JSON.stringify(
        optionsA
      )}, ${JSON.stringify(optionsB)}`
    );
  }
};

const useMotion = (options, duration, applyValues = defaultApplyValues) => {
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
      options
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
