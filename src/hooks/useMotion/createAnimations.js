import easeOut from "./easeOut.js";

export default options => {
  const target = {};

  const animations = Object.keys(options).map(key => {
    const option = options[key];
    return {
      ...option,
      from: option.value,
      to: option.value,
      name: key,
      target: target,
      startAt: typeof option.startAt === "number" ? option.startAt : 0,
      endAt: typeof option.endAt === "number" ? option.endAt : 1,
      easing: easeOut[option.easing] || easeOut.expo
    };
  });

  return animations;
};
