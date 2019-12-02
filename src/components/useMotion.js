import { useState, useEffect } from "react";
import { Timeline, easings } from "motion-ux";

const isEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const clone = obj => {
  return JSON.parse(JSON.stringify(obj));
};

const getValues = timeline => {
  return clone(
    timeline
      .getCurrentValues()
      .keys()
      .next().value
  );
};

const createAnimations = options => {
  const target = {};

  const animations = Object.keys(options).map(key => {
    const option = options[key];
    return {
      ...option,
      name: key,
      target: target,
      startAt: typeof option.startAt === "number" ? option.startAt : 0,
      endAt: typeof option.endAt === "number" ? option.endAt : 1,
      easing: easings[option.easing] || easings.linear
    };
  });

  return animations;
};

const createAdjustedAnimations = (currentValues, oldOptions, options) => {
  const target = {};

  const animations = Object.keys(options).map(key => {
    const oldOption = oldOptions[key];
    const option = options[key];
    const from = currentValues[key];
    const controls = Array.isArray(option.controls) ? option.controls : [];

    controls.unshift(oldOption.to);

    const adjustedOption = {
      ...option,
      from,
      controls
    };

    return {
      ...adjustedOption,
      name: key,
      target: target,
      startAt:
        typeof adjustedOption.startAt === "number" ? adjustedOption.startAt : 0,
      endAt:
        typeof adjustedOption.endAt === "number" ? adjustedOption.endAt : 1,
      easing: easings[adjustedOption.easing] || easings.linear
    };
  });

  return animations;
};

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
//       easing: "ease-in-out"
//     },
//     position: {
//       from: "0px",
//       to: "100px",
//       easing: "ease-out-expo"
//     }
//   },
//   2000
// );


// const style = useMorph("currentState", {
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
// }, "easeOutExpo");