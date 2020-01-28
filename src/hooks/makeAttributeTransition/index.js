import makeTransition from "../makeTransition";
import applyAttributeValues from "./applyAttributeValues";

const makeAttributeTransition = (states, duration) => {
  return makeTransition(states, duration, applyAttributeValues);
};

export default makeAttributeTransition;
