import easeOut from "./easeOut.js";

export default (timeline, lastOptions, newOptions) => {
  const name = 'useMotion';
  const currentValues = timeline.getCurrentValues()[name];
  const shouldRedirect = timeline.progress !== 1;

  const animations = Object.keys(newOptions).map(key => {
    const oldOption = lastOptions[key];
    const option = newOptions[key];
    const from = currentValues[key];
    const controls = Array.isArray(option.controls)
      ? option.controls.slice(0)
      : [];

    if (shouldRedirect) {
      controls.unshift(oldOption.value);
    }

    const animation = {
      ...option,
      property: key,
      name: name,
      to: option.value,
      from,
      controls,
      startAt: typeof option.startAt === "number" ? option.startAt : 0,
      endAt: typeof option.endAt === "number" ? option.endAt : 1,
      easing: easeOut[option.easing] || easeOut.expo
    };

    return animation;
  });

  return animations;
};
