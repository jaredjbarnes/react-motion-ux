import useNativeTransition from "../useNativeTransition";

const makeNativeTransition = (suppliedStates, duration) => {
  const getStateCssProperties = (name, props) => {
    let states;

    if (typeof suppliedStates === "function") {
      states = suppliedStates(props);
    } else {
      states = suppliedStates;
    }

    const stateNames = Object.keys(states).join(", ");
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

    return cssProperties;
  };

  return (stateName, { props, ...rest } = {}) => {
    const cssProperties = getStateCssProperties(stateName, props);
    return useNativeTransition(cssProperties, { duration, ...rest });
  };
};

export default makeNativeTransition;
