"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var svgStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};
var defaultValue = {
  originX: 0,
  originY: 0,
  destinationX: 0,
  destinationY: 0,
  curveWidth: 100,
  animated: true
};
var startKnobStyle = {
  backgroundColor: "rgba(0,0,0,1)",
  borderRadius: "0px 5px 5px 0px",
  height: "9px",
  width: "9px"
};
var endKnobStyle = {
  backgroundColor: "rgba(0,0,0,1)",
  borderRadius: "8px 0px 0px 8px",
  height: "15px",
  width: "15px"
};

var applyAttributeValues = function applyAttributeValues(element, values) {
  if (element != null && typeof element.setAttribute === "function") {
    Object.keys(values).forEach(function (key) {
      element.setAttribute(key, values[key]);
    });
  }
};

var applyStyles = function applyStyles(element, values) {
  if (element != null && element.style != null) {
    Object.keys(values).forEach(function (key) {
      element.style[key] = values[key];
    });
  }
};

var PipelinePath = function PipelinePath() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultValue,
      _ref$originX = _ref.originX,
      originX = _ref$originX === void 0 ? 0 : _ref$originX,
      _ref$originY = _ref.originY,
      originY = _ref$originY === void 0 ? 0 : _ref$originY,
      _ref$destinationX = _ref.destinationX,
      destinationX = _ref$destinationX === void 0 ? 0 : _ref$destinationX,
      _ref$destinationY = _ref.destinationY,
      destinationY = _ref$destinationY === void 0 ? 0 : _ref$destinationY,
      _ref$curveWidth = _ref.curveWidth,
      curveWidth = _ref$curveWidth === void 0 ? 100 : _ref$curveWidth,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? true : _ref$animate;

  var ref = (0, _react.useRef)(null);
  var startKnobRef = (0, _react.useRef)(null);
  var endKnobRef = (0, _react.useRef)(null);
  var controlPoint1 = {
    x: originX + curveWidth,
    y: originY
  };
  var controlPoint2 = {
    x: destinationX - curveWidth,
    y: destinationY
  };
  (0, _index.default)({
    d: "M ".concat(originX, " ").concat(originY, " C ").concat(controlPoint1.x, " ").concat(controlPoint1.y, ", ").concat(controlPoint2.x, " ").concat(controlPoint2.y, ", ").concat(destinationX, " ").concat(destinationY)
  }, animate ? 5000 : 0, applyAttributeValues, ref);
  (0, _index.default)({
    transform: "translate(".concat(originX - 5, "px, ").concat(originY - 5, "px)")
  }, animate ? 5000 : 0, applyStyles, startKnobRef);
  (0, _index.default)({
    transform: "translate(".concat(destinationX - 8, "px, ").concat(destinationY - 16, "px)")
  }, animate ? 5000 : 0, applyStyles, endKnobRef);
  return _react.default.createElement("div", {
    style: svgStyle
  }, _react.default.createElement("svg", {
    style: svgStyle
  }, _react.default.createElement("path", {
    ref: ref,
    d: "M 0 0 C 0 0, 0 0, 0 0",
    fill: "transparent",
    stroke: "black",
    strokeWidth: "3"
  })), _react.default.createElement("div", {
    ref: startKnobRef,
    style: startKnobStyle
  }), _react.default.createElement("div", {
    ref: endKnobRef,
    style: endKnobStyle
  }));
};

var _default = PipelinePath;
exports.default = _default;
//# sourceMappingURL=PipelinePath.js.map