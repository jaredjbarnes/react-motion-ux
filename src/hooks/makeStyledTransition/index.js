import makeTransition from "../makeTransition";

const applyStyleValues = (elementRef, values) => {
  if (elementRef.current != null && elementRef.current.style != null) {
    const element = elementRef.current;

    Object.keys(values).forEach(key => {
      element.style[key] = values[key];
    });
  }
};

const makeStyledTransition = (states, duration) => {
  return makeTransition(states, duration, applyStyleValues);
};

export default makeStyledTransition;
