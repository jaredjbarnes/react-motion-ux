import easeOut from "./easeOut.js";

export default (lastProperties, properties) => {
  const target = {};

  const animations = Object.keys(properties).map(key => {
    const property = properties[key];
    const lastProperty = lastProperties[key];

    return {
      ...property,
      from: lastProperty.value,
      to: property.value,
      name: key,
      target: target,
      startAt: typeof property.startAt === "number" ? property.startAt : 0,
      endAt: typeof property.endAt === "number" ? property.endAt : 1,
      easing: easeOut[property.easing] || easeOut.expo
    };
  });

  return animations;
};
