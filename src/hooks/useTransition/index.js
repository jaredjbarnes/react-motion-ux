import { useEffect, useRef, useCallback, useState } from "react";
import { Timeline } from "motion-ux";
import createAnimations from "./createAnimations";
import createAdjustedAnimations from "./createAdjustedAnimations";
import isEqual from "../isEqual";
import transformAnimatedProperties from "./transformAnimatedProperties";
import objectApplyValues from "./objectApplyValues";
import assertAnimatingTheSameProperties from "./assertAnimatingTheSameProperties";

const useTransition = (
  animatedProperties,
  duration,
  applyValues = objectApplyValues,
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
    return callbackRef;
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
    return callbackRef;
  }

  return callbackRef;
};

export default useTransition;
