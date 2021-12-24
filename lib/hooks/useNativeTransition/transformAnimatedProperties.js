"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var transformAnimatedProperties = function transformAnimatedProperties(animatedProperties) {
  Object.keys(animatedProperties).forEach(function (key) {
    animatedProperties[key] = transformStyle(animatedProperties[key]);
  });
};

var transformStyle = function transformStyle(value) {
  var objectValue = value;

  if (_typeof(value) === "object" && value != null) {
    objectValue = value;
  } else {
    objectValue = {
      value: value
    };
  }

  objectValue.value = objectValue.value.toString();
  return objectValue;
};

var _default = transformAnimatedProperties;
exports.default = _default;
//# sourceMappingURL=transformAnimatedProperties.js.map