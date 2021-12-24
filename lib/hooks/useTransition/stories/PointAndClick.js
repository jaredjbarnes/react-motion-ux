"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

var PointAndClick = function PointAndClick() {
  var containerRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    transform: "translate(0px, 0px)",
    backgroundColor: "rgba(255,0,0,1)"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var ref = (0, _index.default)(state, {
    duration: 5000,
    applyValues: applyStyles
  });

  var onClick = function onClick(event) {
    var color = createRandomColor();
    var containerRect = containerRef.current.getBoundingClientRect();
    var x = event.pageX - containerRect.left;
    var y = event.pageY - containerRect.top;
    setState({
      transform: "translate(".concat(x, "px,").concat(y, "px)"),
      backgroundColor: color
    });
  };

  return _react.default.createElement("div", {
    ref: containerRef,
    style: containerStyle,
    onClick: onClick
  }, _react.default.createElement("div", {
    ref: ref,
    style: dotStyle
  }));
};

var _default = PointAndClick;
exports.default = _default;
//# sourceMappingURL=PointAndClick.js.map