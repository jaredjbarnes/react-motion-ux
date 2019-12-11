import { useEffect, useRef } from "react";
import { Timeline } from "motion-ux";
import createAnimations from "./createAnimations";
import createAdjustedAnimations from "./createAdjustedAnimations";
import getValues from "../getValues";
import isEqual from "../isEqual";

const transformAnimatedProperties = animatedProperties => {
  Object.keys(animatedProperties).forEach(key => {
    animatedProperties[key] = transformStyle(animatedProperties[key]);
  });
};

const transformStyle = value => {
  if (typeof value === "object" && value != null) {
    return value;
  } else {
    return {
      value: value.toString()
    };
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

const assertAnimatingTheSameProperties = (
  animatedPropertiesA,
  animatedPropertiesB
) => {
  const keysA = Object.keys(animatedPropertiesA);
  const keysB = Object.keys(animatedPropertiesB);

  keysA.sort();
  keysB.sort();

  const areTheSame = keysA.join("|") === keysB.join("|");

  if (!areTheSame) {
    throw new Error(
      `Invalid Arguments: useMotion cannot transition between animatedProperties that don't match between states: ${JSON.stringify(
        animatedPropertiesA
      )}, ${JSON.stringify(animatedPropertiesB)}`
    );
  }
};

const useMotion = (
  animatedProperties,
  duration,
  applyValues = defaultApplyValues
) => {
  const elementRef = useRef(null);
  const timeline = useRef(null);
  const lastAnimatedProperties = useRef(null);

  transformAnimatedProperties(animatedProperties);
  const isDifferent = !isEqual(
    animatedProperties,
    lastAnimatedProperties.current
  );

  if (timeline.current == null) {
    timeline.current = new Timeline({
      animations: createAnimations(animatedProperties),
      duration: duration
    });

    timeline.current.observe("RENDER", () => {
      applyValues(elementRef, getValues(timeline.current));
    });

    timeline.current.seek(1);
    timeline.current.play();
  }

  if (isDifferent && lastAnimatedProperties.current != null) {
    assertAnimatingTheSameProperties(
      animatedProperties,
      lastAnimatedProperties.current
    );

    const animations = createAdjustedAnimations(
      timeline.current,
      lastAnimatedProperties.current,
      animatedProperties
    );

    timeline.current.dispose();

    timeline.current = new Timeline({
      animations: animations,
      duration: duration
    });

    timeline.current.observe("RENDER", () => {
      const values = getValues(timeline.current);
      applyValues(elementRef, values);
    });

    timeline.current.play();
  }

  useEffect(() => {
    return () => {
      timeline.current.dispose();
    };
  }, []);

  lastAnimatedProperties.current = animatedProperties;

  return elementRef;
};

export default useMotion;
