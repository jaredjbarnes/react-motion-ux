import makeMotion from "../makeMotion";

const applyAttributeValues = (ref, values) => {
  if (ref.current != null && typeof ref.current.setAttribute === "function") {
    const obj = ref.current;

    Object.keys(values).forEach(key => {
      obj.setAttribute(key, values[key]);
    });
  }
};

const makeAttributeMotion = (states, duration) => {
  return makeMotion(states, duration, applyAttributeValues);
};

export default makeAttributeMotion;
