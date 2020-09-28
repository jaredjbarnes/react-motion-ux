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
    duration =
      typeof durationOverride === "number" ? durationOverride : duration;

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
      duration,
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
