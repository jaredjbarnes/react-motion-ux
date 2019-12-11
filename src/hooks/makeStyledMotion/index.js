import makeMotion from "../makeMotion";

const applyStyleValues = (elementRef, values) => {
  if (elementRef.current != null && elementRef.current.style != null) {
    const element = elementRef.current;

    Object.keys(values).forEach(key => {
      element.style[key] = values[key];
    });
  }
};

const makeStyledMotion = (states, duration) => {
  return makeMotion(states, duration, applyStyleValues);
};

export default makeStyledMotion;
