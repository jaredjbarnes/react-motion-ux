import { useState, useCallback, useEffect } from "react";
import transfromAnimatedProperties from "./transformAnimatedProperties";
import { bezierCurveEasings } from "../useTransition/easeOut";

const useNativeTransition = (
  cssProperties,
  { duration: defaultDuration = 0, ref, onComplete, initialProperties = null }
) => {
  const [node, setNode] = useState(null);

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

        if (initialProperties != null) {
          transfromAnimatedProperties(initialProperties);

          Object.keys(initialProperties).forEach(key => {
            const { value } = initialProperties[key];
            node.style[key] = value;
          });
        } else {
          transfromAnimatedProperties(cssProperties);

          Object.keys(cssProperties).forEach(key => {
            const { value } = cssProperties[key];
            node.style[key] = value;
          });
        }

        setNode(node);
      }
    },
    [ref, initialProperties, cssProperties]
  );

  useEffect(() => {
    if (cssProperties != null && node != null) {
      transfromAnimatedProperties(cssProperties);

      const transition = Object.keys(cssProperties)
        .map(property => {
          let {
            duration: durationOverride,
            easing: easingName,
            startAt = 0,
            endAt = 1
          } = cssProperties[property];

          let delay;
          let easing =
            bezierCurveEasings[easingName] != null
              ? bezierCurveEasings[easingName]
              : bezierCurveEasings.expo;
          let duration =
            typeof durationOverride === "number"
              ? durationOverride
              : defaultDuration;

          startAt = typeof startAt === "number" ? startAt : 0;
          endAt = typeof endAt === "number" ? endAt : 0;

          const originalDuration = duration;
          duration = (endAt - startAt) * originalDuration;
          delay = `${startAt * originalDuration}`;

          return `${property} ${duration}ms ${easing} ${delay}ms`;
        })
        .join(", ");

      node.style.transition = transition;

      Object.keys(cssProperties).forEach(key => {
        const { value } = cssProperties[key];
        node.style[key] = value;
      });
    }
  }, [initialProperties, cssProperties, defaultDuration, node]);

  useEffect(() => {
    if (node != null) {
      if (typeof onComplete === "function") {
        node.addEventListener("transitionend", onComplete);
      }
      return () => {
        node.removeEventListener("transitionend", onComplete);
      };
    }
  }, [node, onComplete]);

  return callbackRef;
};

export default useNativeTransition;
