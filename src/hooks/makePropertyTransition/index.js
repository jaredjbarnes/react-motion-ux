import makeTransition from "../makeTransition";
import applyValues from "./applyValues";

const makePropertyTransition = (states, duration) => {
  return makeTransition(states, duration, applyValues);
};

export default makePropertyTransition;
