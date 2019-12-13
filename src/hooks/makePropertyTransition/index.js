import makeTransition from "../makeTransition";

const applyValues = (ref, values) => {
  if (ref.current != null) {
    const obj = ref.current;

    Object.keys(values).forEach(key => {
      obj[key] = values[key];
    });
  }
};

const makePropertyTransition = (states, duration) => {
  return makeTransition(states, duration, applyValues);
};

export default makePropertyTransition;
