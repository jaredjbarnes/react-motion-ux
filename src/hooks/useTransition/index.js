import { useEffect, useRef } from "react";
import { Timeline } from "motion-ux";
import createAnimations from "./createAnimations";
import createAdjustedAnimations from "./createAdjustedAnimations";
import isEqual from "../isEqual";

const transformAnimatedProperties = animatedProperties => {
  Object.keys(animatedProperties).forEach(key => {
    animatedProperties[key] = transformStyle(animatedProperties[key]);
  });
};

const transformStyle = value => {
  let objectValue = value;

  if (typeof value === "object" && value != null) {
    objectValue = value;
  } else {
    objectValue = {
      value: value
    };
  }

  objectValue.value = objectValue.value.toString();
  return objectValue;
};

const defaultApplyValues = (obj, values) => {
  if (obj != null) {
    Object.keys(values).forEach(key => {
      obj[key] = values[key];
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
      `Invalid Arguments: useTransition cannot transition between animatedProperties that don't match between states: ${JSON.stringify(
        animatedPropertiesA
      )}, ${JSON.stringify(animatedPropertiesB)}`
    );
  }
};

const useTransition = (
  animatedProperties,
  duration,
  applyValues = defaultApplyValues
) => {
  const objectRef = useRef(null);
  const timeline = useRef(null);
  const lastAnimatedProperties = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    return () => {
      if (timeline.current != null) {
        timeline.current.dispose();
      }
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  // This will reset useTransition.
  if (animatedProperties == null) {

    // Stop the current animation, if there is one.
    if (timeline.current != null) {
      timeline.current.dispose();
    }

    // Reset
    lastAnimatedProperties.current = null;
    return objectRef;
  }

  transformAnimatedProperties(animatedProperties);

  const isDifferent = !isEqual(
    animatedProperties,
    lastAnimatedProperties.current
  );

  /* 
    Since we didn't come from anything just set the values. This will prevent unneeded 
    chern on the CPU on initialization. This is a little tricky because these refs are 
    associated with other components, so the ref may not be here when this component mounts.
    So we try to render every animation frame until this is unmounted or it actually renders 
    it's initial value.
  */
  if (lastAnimatedProperties.current == null) {
    const values = Object.keys(animatedProperties).reduce((properties, key) => {
      properties[key] = animatedProperties[key].value;
      return properties;
    }, {});

    const updateObject = values => {
      if (objectRef.current == null) {
        animationFrame.current = requestAnimationFrame(() => {
          updateObject(values);
        });
      } else {
        applyValues(objectRef.current, values);
      }
    };

    updateObject(values);

    lastAnimatedProperties.current = animatedProperties;
    return objectRef;
  }

  if (isDifferent && lastAnimatedProperties.current != null) {
    assertAnimatingTheSameProperties(
      animatedProperties,
      lastAnimatedProperties.current
    );

    if (timeline.current == null) {
      const animations = createAnimations(
        lastAnimatedProperties.current,
        animatedProperties
      );

      timeline.current = new Timeline({
        animations: animations,
        duration: duration
      });
    } else {
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
    }

    timeline.current.observe("RENDER", ({animations}) => {
      applyValues(objectRef.current, animations.useTransition);
    });

    timeline.current.observeTime(1, () => {
      timeline.current = null;
    });

    timeline.current.play();

    lastAnimatedProperties.current = animatedProperties;
    return objectRef;
  }

  return objectRef;
};

export default useTransition;
