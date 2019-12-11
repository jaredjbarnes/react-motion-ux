import easeOut from "./easeOut.js";
import getValues from "../getValues";

export default (timeline, lastOptions, newOptions) => {
  const target = {};
  const currentValues = getValues(timeline);
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
      name: key,
      target: target,
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
