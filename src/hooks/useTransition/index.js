import { useEffect, useMemo, useCallback } from "react";
import objectApplyValues from "./objectApplyValues";
import TransitionMediator from "./TransitionMediator";

const useTransition = (
  animatedProperties,
  {
    duration,
    applyValues = objectApplyValues,
    ref,
    animate = true,
    onComplete,
    configure,
    initialProperties = null,
  } = {}
) => {
  const transitionMediator = useMemo(() => {
    return new TransitionMediator();
  }, []);

  transitionMediator.setInitialProperties(initialProperties);
  transitionMediator.setDuration(duration);
  transitionMediator.setRenderCallback(applyValues);
  transitionMediator.setShouldAnimate(animate);
  transitionMediator.setOnCompleteCallback(onComplete);
  transitionMediator.setConfigureCallback(configure);

  // Keep refs up to date.
  const callbackRef = useCallback(
    (node) => {
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

        transitionMediator.setNode(node);
      }
    },
    [transitionMediator, ref]
  );

  useEffect(() => {
    return () => {
      transitionMediator.dispose();
    };
  }, [transitionMediator]);

  transitionMediator.updateAnimationProperties(animatedProperties);

  return callbackRef;
};

export default useTransition;
