import makeTransition from "../makeTransition";

const applyAttributeValues = (ref, values) => {
  if (ref.current != null && typeof ref.current.setAttribute === "function") {
    const obj = ref.current;

    Object.keys(values).forEach(key => {
      obj.setAttribute(key, values[key]);
    });
  }
};

const makeAttributeTransition = (states, duration) => {
  return makeTransition(states, duration, applyAttributeValues);
};

export default makeAttributeTransition;
