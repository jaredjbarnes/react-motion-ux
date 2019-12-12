import clone from "./clone";

export default map => {
  return clone(map.values().next().value);
};
