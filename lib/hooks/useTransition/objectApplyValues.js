"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var objectApplyValues = function objectApplyValues(obj, values) {
  if (obj != null) {
    Object.keys(values).forEach(function (key) {
      obj[key] = values[key];
    });
  }
};

var _default = objectApplyValues;
exports.default = _default;
//# sourceMappingURL=objectApplyValues.js.map