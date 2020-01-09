import useTransition from "../useTransition";

const makeTransition = (states, duration, applyValues) => {
  return (stateName, { props, ref, animate, onComplete, configure } = {}) => {
    if (stateName == null) {
      throw new Error(
        `Invalid Arguments: Cannot find '${stateName}' within defined states: ${Object.keys(
          states
        ).join(", ")}, you may have forgotten to pass the state name in as an argument.`
      );
    }

    let state;

    if (typeof states === "function") {
      const map = states(props);
      state = map[stateName];
    } else {
      state = states[stateName];
    }

    if (state == null) {
      throw new Error(`Invalid Arguments: Cannot find '${stateName}' within defined states: ${Object.keys(
        states
      ).join(", ")}.`);
    }

    return useTransition(state, {
      duration,
      applyValues,
      ref,
      animate,
      onComplete,
      configure
    });
  };
};

export default makeTransition;
