import { easings } from "motion-ux";

export default options => {
  const target = {};

  const animations = Object.keys(options).map(key => {
    const option = options[key];
    return {
      ...option,
      name: key,
      target: target,
      startAt: typeof option.startAt === "number" ? option.startAt : 0,
      endAt: typeof option.endAt === "number" ? option.endAt : 1,
      easing: easings[option.easing] || easings.linear
    };
  });

  return animations;
};
