import { easings } from "motion-ux";

export default (currentValues, lastOptions, newOptions) => {
  const target = {};

  const animations = Object.keys(newOptions).map(key => {
    const oldOption = lastOptions[key];
    const option = newOptions[key];
    const from = currentValues[key];
    const controls = Array.isArray(option.controls) ? option.controls : [];

    controls.unshift(oldOption.to);

    const adjustedOption = {
      ...option,
      from,
      controls
    };

    return {
      ...adjustedOption,
      name: key,
      target: target,
      startAt:
        typeof adjustedOption.startAt === "number" ? adjustedOption.startAt : 0,
      endAt:
        typeof adjustedOption.endAt === "number" ? adjustedOption.endAt : 1,
      easing: easings[adjustedOption.easing] || easings.linear
    };
  });

  return animations;
};
