import makeTransition from "../makeTransition";
import applyStyleValues from "./applyStyleValues";

const makeStyledTransition = (states, duration) => {
  return makeTransition(states, duration, applyStyleValues);
};

export default makeStyledTransition;
