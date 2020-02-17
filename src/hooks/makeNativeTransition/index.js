import useNativeTransition from "../useNativeTransition";

const makeNativeTransition = (suppliedStates, duration) => {
  return (name, { props, ...rest } = {}) => {
    let states;

    if (typeof suppliedStates === "function") {
      states = suppliedStates(props);
    } else {
      states = suppliedStates;
    }

    const stateNames = Object.keys(states).join(", ");
    const initialProperties = states.initial;
    const cssProperties = states[name];

    if (cssProperties == null) {
      throw new Error(
        `Invalid Arguments: Cannot find '${name}' within defined states: ${stateNames}.`
      );
    }

    if (name == null) {
      throw new Error(
        `Invalid Arguments: Cannot find '${name}' within defined states: ${stateNames}, you may have forgotten to pass the state name in as an argument.`
      );
    }

    return useNativeTransition(cssProperties, {
      duration,
      initialProperties,
      ...rest
    });
  };
};

export default makeNativeTransition;
