const applyAttributeValues = (obj, values) => {
  if (obj != null && typeof obj.setAttribute === "function") {
    Object.keys(values).forEach(key => {
      obj.setAttribute(key, values[key]);
    });
  }
};

export default applyAttributeValues;
