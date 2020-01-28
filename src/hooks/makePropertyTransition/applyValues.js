const applyValues = (obj, values) => {
  if (obj != null) {
    Object.keys(values).forEach(key => {
      obj[key] = values[key];
    });
  }
};

export default applyValues;
