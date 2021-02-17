import { easings } from "motion-ux";
import useTransition from "../useTransition";

const makeTransition = (states, duration, applyValues) => {
  return (
    stateName,
    {
      props,
      ref,
      animate,
      onComplete,
      onArrival,
      configure,
      duration: durationOverride,
    } = {}
  ) => {
    let finalDuration = duration;

    if (typeof finalDuration === "object" && finalDuration != null) {
      finalDuration = duration[stateName];

      if (typeof finalDuration !== "number") {
        throw new Error(
          `Couldn't find duration for state in the duration object. Expected something like this: {//...${stateName}:1000,//...}`
        );
      }
    }

    finalDuration =
      typeof durationOverride === "number" ? durationOverride : finalDuration;

    if (stateName == null) {
      throw new Error(
        `Invalid Arguments: Cannot find '${stateName}' within defined states: ${Object.keys(
          states
        ).join(
          ", "
        )}, you may have forgotten to pass the state name in as an argument.`
      );
    }

    let map;

    if (typeof states === "function") {
      map = states(props);
    } else {
      map = states;
    }

    const state = map[stateName];
    const initialProperties = map.initial || null;

    if (state == null) {
      throw new Error(
        `Invalid Arguments: Cannot find '${stateName}' within defined states: ${Object.keys(
          states
        ).join(", ")}.`
      );
    }

    const onCompleteWrapper = () => {
      if (typeof onComplete === "function") {
        onComplete();
      }

      if (typeof onArrival === "function") {
        onArrival(stateName);
      }
    };

    return useTransition(state, {
      duration: finalDuration,
      applyValues,
      ref,
      animate,
      onComplete: onCompleteWrapper,
      configure,
      initialProperties,
    });
  };
};

export default makeTransition;