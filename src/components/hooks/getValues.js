import clone from "./clone";

export default timeline => {
  return clone(
    timeline
      .getCurrentValues()
      .keys()
      .next().value
  );
};
