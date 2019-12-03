import { useState, useEffect } from "react";
import { Timeline } from "motion-ux";
import createAnimations from "./createAnimations";
import createAdjustedAnimations from "./createAnimations";
import getValues from "./getValues";
import isEqual from "./isEqual";

const useMotion = (options, duration) => {
  const [state, setState] = useState(null);
  let [values, setValues] = useState(null);

  if (state == null) {
    const newState = {
      timeline: null,
      observer: null,
      options: null
    };

    newState.timeline = new Timeline({
      animations: createAnimations(options),
      duration: duration
    });

    newState.timeline.play();
    newState.observer = newState.timeline.observe("RENDER", () => {
      setValues(getValues(newState.timeline));
    });

    newState.options = options;
    values = getValues(newState.timeline);

    setValues(values);
    setState(newState);
  }

  if (state != null && !isEqual(state.options, options)) {
    const currentValues = getValues(state.timeline);
    const animations = createAdjustedAnimations(
      currentValues,
      state.options,
      options
    );

    const newState = {};

    newState.timeline = new Timeline({
      animations: animations,
      duration: duration
    });

    state.observer.dispose();
    newState.observer = newState.timeline.observe("RENDER", () => {
      setValues(getValues(newState.timeline));
    });
    newState.timeline.play();

    newState.options = options;
    values = getValues(newState.timeline);

    setValues(values);
    setState(newState);
  }

  useEffect(() => {
    return () => {
      state.observer.dispose();
    };
  }, [options, duration]);

  return values;
};

export default useMotion;

// const { color, position } = useMotion(
//   {
//     color: {
//       from: "rgba(0,0,0,0)",
//       to: "rgba(255,0,0,0)",
//       easing: "easeInOutQuad"
//     },
//     position: {
//       from: "0px",
//       to: "100px",
//       easing: "easeOutExpo"
//     }
//   },
//   2000
// );


// const style = useMorph("default", {
//     default: {
//         transform: "",
//         border: "",
//         width: "",
//         height: ""
//     },
//     top: {
//         transform: "",
//         border: "",
//         width: "",
//         height: ""
//     },
//     bottom: {
//         transform: "",
//         border: "",
//         width: "",
//         height: ""
//     }
// }, "easeOutExpo", 2000);