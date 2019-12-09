import useMotion from "../useMotion";

const makeMotion = (states, duration, applyStyleValues) => {
  if (typeof states === "function") {
    return (stateName, props) => {
      const map = states(props);
      return useMotion(map[stateName], duration, applyStyleValues);
    };
  } else {
    return stateName => {
      return useMotion(states[stateName], duration, applyStyleValues);
    };
  }
};

export default makeMotion;
