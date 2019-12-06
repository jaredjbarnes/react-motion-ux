import useMotion from "../useMotion";

const makeMotion = (states, duration) => {
  if (typeof states === "function") {
    return (stateName, props) => {
      const map = states(props);
      return useMotion(map[stateName], duration);
    };
  } else {
    return (stateName) => {
        return useMotion(states[stateName], duration);
      };
  }
};

export default makeMotion;
