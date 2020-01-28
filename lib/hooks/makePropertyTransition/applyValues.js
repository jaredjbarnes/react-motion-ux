"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var applyValues = function applyValues(obj, values) {
  if (obj != null) {
    Object.keys(values).forEach(function (key) {
      obj[key] = values[key];
    });
  }
};

var _default = applyValues;
exports.default = _default;
//# sourceMappingURL=applyValues.js.map