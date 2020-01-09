"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _easeOut = _interopRequireDefault(require("./easeOut.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(timeline, lastOptions, newOptions) {
  var name = "useTransition";
  var currentValues = timeline.getCurrentValues()[name];
  var shouldRedirect = timeline.progress !== 1;
  var animations = Object.keys(newOptions).map(function (key) {
    var oldOption = lastOptions[key];
    var option = newOptions[key];
    var from = currentValues[key];
    var controls = Array.isArray(option.controls) ? option.controls.slice(0) : [];

    if (shouldRedirect) {
      controls.unshift(oldOption.value);
      controls.push(option.value);
    }

    var animation = _objectSpread({}, option, {
      property: key,
      name: name,
      to: option.value,
      from: from,
      controls: controls,
      startAt: typeof option.startAt === "number" ? option.startAt : 0,
      endAt: typeof option.endAt === "number" ? option.endAt : 1,
      easing: _easeOut.default[option.easing] || _easeOut.default.expo
    });

    return animation;
  });
  return animations;
};

exports.default = _default;
//# sourceMappingURL=createAdjustedAnimations.js.map