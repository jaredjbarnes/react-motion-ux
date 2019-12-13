import makeTransition from "../makeTransition";

const applyValues = (obj, values) => {
  if (obj != null) {
    Object.keys(values).forEach(key => {
      obj[key] = values[key];
    });
  }
};

const makePropertyTransition = (states, duration) => {
  return makeTransition(states, duration, applyValues);
};

export default makePropertyTransition;
