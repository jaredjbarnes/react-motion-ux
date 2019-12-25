import { useEffect, useRef, useCallback } from "react";
import { Timeline } from "motion-ux";
import createAnimations from "./createAnimations";
import createAdjustedAnimations from "./createAdjustedAnimations";
import isEqual from "../isEqual";
import transformAnimatedProperties from "./transformAnimatedProperties";
import objectApplyValues from "./objectApplyValues";
import assertAnimatingTheSameProperties from "./assertAnimatingTheSameProperties";

const convertToValues = animatedProperties => {
  return Object.keys(animatedProperties).reduce((properties, key) => {
    properties[key] = animatedProperties[key].value;
    return properties;
  }, {});
};

const useTransition = (
  animatedProperties,
  duration,
  applyValues = objectApplyValues,
  ref,
  animate = true
) => {
  const state = useRef({
    lastAnimatedProperties: null,
    animatedProperties,
    duration,
    applyValues,
    ref,
    animate,
    timeline: null,
    node: null
  });

  state.current.animatedProperties = animatedProperties;
  state.current.duration = duration;
  state.current.applyValues = applyValues;
  state.current.ref = ref;
  state.current.animate = animate;

  // Keep refs up to date.
  const callbackRef = useCallback(node => {
    const { animatedProperties, applyValues, ref } = state.current;

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

      state.current.node = node;

      // This should run when the element is mounted.
      const values = convertToValues(animatedProperties);

      applyValues(state.current.node, values);
      state.current.lastAnimatedProperties = animatedProperties;
    }
  }, []);

  // Clean up timeline to prevent memory leak.
  useEffect(() => {
    return () => {
      if (state.current.timeline != null) {
        state.current.timeline.dispose();
      }
    };
  }, []);

  if (animatedProperties == null) {
    // Stop the current animation, if there is one.
    if (state.current.timeline != null) {
      state.current.timeline.dispose();
    }

    // Reset
    state.current.lastAnimatedProperties = null;
    return callbackRef;
  }

  transformAnimatedProperties(animatedProperties);

  const isDifferent = !isEqual(
    animatedProperties,
    state.current.lastAnimatedProperties
  );

  if (state.current.lastAnimatedProperties == null || !animate) {
    if (state.current.timeline != null) {
      state.current.timeline.dispose();
      state.current.timeline = null;
    }

    const values = convertToValues(animatedProperties);

    if (state.current.node != null) {
      applyValues(state.current.node, values);
    }

    state.current.lastAnimatedProperties = animatedProperties;
    return callbackRef;
  } else if (isDifferent && state.current.lastAnimatedProperties != null) {
    assertAnimatingTheSameProperties(
      animatedProperties,
      state.current.lastAnimatedProperties
    );

    if (state.current.timeline == null) {
      const animations = createAnimations(
        state.current.lastAnimatedProperties,
        animatedProperties
      );

      state.current.timeline = new Timeline({
        animations: animations,
        duration: duration
      });
    } else {
      const animations = createAdjustedAnimations(
        state.current.timeline,
        state.current.lastAnimatedProperties,
        animatedProperties
      );

      state.current.timeline.dispose();

      state.current.timeline = new Timeline({
        animations: animations,
        duration: duration
      });
    }

    state.current.timeline.observe("RENDER", ({ animations }) => {
      if (state.current.node != null) {
        applyValues(state.current.node, animations.useTransition);
      }
    });

    state.current.timeline.observeTime(1, () => {
      state.current.timeline.current = null;
    });

    state.current.timeline.play();
    state.current.lastAnimatedProperties = animatedProperties;
  }

  return callbackRef;
};

export default useTransition;
