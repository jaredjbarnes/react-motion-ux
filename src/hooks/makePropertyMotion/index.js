import makeMotion from "../makeMotion";

const applyValues = (ref, values) => {
  if (ref.current != null) {
    const obj = ref.current;

    Object.keys(values).forEach(key => {
      obj[key] = values[key];
    });
  }
};

const makePropertyMotion = (states, duration) => {
  return makeMotion(states, duration, applyValues);
};

export default makePropertyMotion;
