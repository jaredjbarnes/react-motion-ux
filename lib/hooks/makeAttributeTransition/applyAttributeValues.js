"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var applyAttributeValues = function applyAttributeValues(obj, values) {
  if (obj != null && typeof obj.setAttribute === "function") {
    Object.keys(values).forEach(function (key) {
      obj.setAttribute(key, values[key]);
    });
  }
};

var _default = applyAttributeValues;
exports.default = _default;
//# sourceMappingURL=applyAttributeValues.js.map