import makeTransition from "../makeTransition";

const applyStyleValues = (element, values) => {
  if (element!= null && element.style != null) {
    Object.keys(values).forEach(key => {
      element.style[key] = values[key];
    });
  }
};

const makeStyledTransition = (states, duration) => {
  return makeTransition(states, duration, applyStyleValues);
};

export default makeStyledTransition;
