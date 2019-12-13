import useTransition from "../useTransition";

const makeTransition = (states, duration, applyStyleValues) => {
  if (typeof states === "function") {
    return (stateName, props) => {
      const map = states(props);
      return useTransition(map[stateName], duration, applyStyleValues);
    };
  } else {
    return stateName => {
      return useTransition(states[stateName], duration, applyStyleValues);
    };
  }
};

export default makeTransition;
