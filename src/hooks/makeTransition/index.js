import useTransition from "../useTransition";

const makeTransition = (states, duration, applyValues) => {
  return (stateName, { props, ref, animate, onComplete, configure } = {}) => {
    if (stateName == null) {
      throw new Error(
        "Invalid Arguments: Did you forget to pass in the state in for a tranistion :)?"
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
      throw new Error(`Cannot find styles for the state named: ${stateName}.`);
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
