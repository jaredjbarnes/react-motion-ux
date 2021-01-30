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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var containerStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0"
};
var dotStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  transform: "translate(0px,0px)",
  borderRadius: "50%",
  backgroundColor: "red",
  width: "50px",
  height: "50px"
};

var getRandomNumber = function getRandomNumber(min, max) {
  var range = max - min;
  return min + Math.round(Math.random() * range);
};

var createRandomColor = function createRandomColor() {
  return "rgba(".concat(getRandomNumber(0, 255), ",").concat(getRandomNumber(0, 255), ",").concat(getRandomNumber(0, 255), ",").concat((0, getRandomNumber(0.5, 1)), ")");
};

var applyStyles = function applyStyles(element, values) {
  if (element != null && element.style != null) {
    Object.keys(values).forEach(function (key) {
      element.style[key] = values[key];
    });
  }
};

function Ball(_ref) {
  var x = _ref.x,
      y = _ref.y,
      backgroundColor = _ref.backgroundColor;
  var ref = (0, _index.default)({
    transform: "translate(".concat(x, "px, ").concat(y, "px)"),
    backgroundColor: backgroundColor
  }, {
    duration: 3000,
    applyValues: applyStyles
  });
  return _react.default.createElement("div", {
    ref: ref,
    style: dotStyle
  });
}

var PointAndClick = function PointAndClick() {
  var containerRef = (0, _react.useRef)(null);
  var timeoutRef = (0, _react.useRef)(0);

  var _useState = (0, _react.useState)(function () {
    return {
      x: 0,
      y: 0,
      backgroundColor: "rgba(255,0,0,1)"
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onClick = function onClick(event) {
    var color = createRandomColor();
    var containerRect = containerRef.current.getBoundingClientRect();
    var x = event.pageX - containerRect.left;
    var y = event.pageY - containerRect.top;
    clearTimeout(timeoutRef.current);
    setTimeout(function () {
      setState({
        x: x,
        y: y,
        backgroundColor: color
      });
    }, 100);
  };

  return _react.default.createElement("div", {
    ref: containerRef,
    style: containerStyle,
    onMouseMove: onClick
  }, _react.default.createElement(Ball, state));
};

var _default = PointAndClick;
exports.default = _default;
//# sourceMappingURL=PointAndClick.js.map