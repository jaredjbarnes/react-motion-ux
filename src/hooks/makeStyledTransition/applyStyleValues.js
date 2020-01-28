const applyStyleValues = (element, values) => {
  if (element != null && element.style != null) {
    Object.keys(values).forEach(key => {
      element.style[key] = values[key];
    });
  }
};

export default applyStyleValues;
