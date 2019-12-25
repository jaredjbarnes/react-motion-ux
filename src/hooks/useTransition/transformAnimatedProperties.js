const transformAnimatedProperties = animatedProperties => {
  Object.keys(animatedProperties).forEach(key => {
    animatedProperties[key] = transformStyle(animatedProperties[key]);
  });
};

const transformStyle = value => {
  let objectValue = value;

  if (typeof value === "object" && value != null) {
    objectValue = value;
  } else {
    objectValue = {
      value: value
    };
  }

  objectValue.value = objectValue.value.toString();
  return objectValue;
};

export default transformAnimatedProperties;
