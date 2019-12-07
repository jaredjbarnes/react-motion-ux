import easeOut from "./easeOut.js";

export default (currentValues, lastOptions, newOptions) => {
  const target = {};

  const animations = Object.keys(newOptions).map(key => {
    const oldOption = lastOptions[key];
    const option = newOptions[key];
    const from = currentValues[key];
    const controls = Array.isArray(option.controls) ? option.controls : [];

    controls.unshift(oldOption.value);
    controls.push(option.value);

    return {
      ...option,
      name: key,
      target: target,
      to: option.value,
      from,
      controls,
      startAt: typeof option.startAt === "number" ? option.startAt : 0,
      endAt: typeof option.endAt === "number" ? option.endAt : 1,
      easing: easeOut[option.easing] || easeOut.expo
    };
  });

  return animations;
};
