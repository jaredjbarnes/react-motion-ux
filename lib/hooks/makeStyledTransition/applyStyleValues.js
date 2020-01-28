"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var applyStyleValues = function applyStyleValues(element, values) {
  if (element != null && element.style != null) {
    Object.keys(values).forEach(function (key) {
      element.style[key] = values[key];
    });
  }
};

var _default = applyStyleValues;
exports.default = _default;
//# sourceMappingURL=applyStyleValues.js.map