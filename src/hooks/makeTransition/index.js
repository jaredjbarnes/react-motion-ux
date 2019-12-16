import useTransition from "../useTransition";

const makeTransition = (states, duration, applyStyleValues) => {
  if (typeof states === "function") {
    return (stateName, props, ref) => {
      if (stateName == null) {
        throw new Error(
          "Invalid Arguments: Did you forget to pass in the state in for a tranistion :)?"
        );
      }

      const map = states(props);
      const state = map[stateName];

      if (state == null) {
        throw new Error(
          `Cannot find styles for the state named: ${stateName}.`
        );
      }

      return useTransition(state, duration, applyStyleValues, ref);
    };
  } else {
    return (stateName, ref) => {
      if (stateName == null) {
        throw new Error(
          "Invalid Arguments: Did you forget to pass in the state in for a tranistion :)?"
        );
      }

      const state = states[stateName];

      if (state == null) {
        throw new Error(
          `Cannot find styles for the state named: ${stateName}.`
        );
      }
      return useTransition(state, duration, applyStyleValues, ref);
    };
  }
};

export default makeTransition;
