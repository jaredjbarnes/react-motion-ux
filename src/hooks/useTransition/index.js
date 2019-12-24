import React, { useEffect, useRef, useCallback, useState } from "react";
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
  applyValues = defaultApplyValues,
  ref,
  animate = true
) => {
  const objectRef = useRef(null);
  const timeline = useRef(null);
  const lastAnimatedProperties = useRef(null);
  const [values, setValues] = useState(null);

  const callbackRef = useCallback(
    node => {
      if (node != null) {
        if (typeof ref === "function") {
          ref(node);
        } else if (
          typeof ref === "object" &&
          ref != null &&
          ref.hasOwnProperty("current")
        ) {
          ref.current = node;
        }
        objectRef.current = node;

        applyValues(objectRef.current, values);
      }
    },
    [ref, applyValues, values]
  );

  useEffect(() => {
    return () => {
      if (timeline.current != null) {
        timeline.current.dispose();
      }
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

  if (lastAnimatedProperties.current == null || !animate) {
    if (timeline.current != null) {
      timeline.current.dispose();
      timeline.current = null;
    }

    const values = Object.keys(animatedProperties).reduce((properties, key) => {
      properties[key] = animatedProperties[key].value;
      return properties;
    }, {});

    if (objectRef.current != null) {
      applyValues(objectRef.current, values);
    } else {
      setValues(values);
    }

    lastAnimatedProperties.current = animatedProperties;
    return objectRef;
  } else if (isDifferent && lastAnimatedProperties.current != null) {
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

    timeline.current.observe("RENDER", ({ animations }) => {
      if (objectRef.current != null) {
        applyValues(objectRef.current, animations.useTransition);
      }
    });

    timeline.current.observeTime(1, () => {
      timeline.current = null;
    });

    timeline.current.play();

    lastAnimatedProperties.current = animatedProperties;
    return objectRef;
  }

  return callbackRef;
};

export default useTransition;
