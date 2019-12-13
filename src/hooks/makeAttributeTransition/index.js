import makeTransition from "../makeTransition";

const applyAttributeValues = (obj, values) => {
  if (obj != null && typeof obj.setAttribute === "function") {
    Object.keys(values).forEach(key => {
      obj.setAttribute(key, values[key]);
    });
  }
};

const makeAttributeTransition = (states, duration) => {
  return makeTransition(states, duration, applyAttributeValues);
};

export default makeAttributeTransition;
