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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultBallStyles = {
  position: "absolute",
  borderRadius: "3px",
  transformOrigin: "center center",
  transform: "translate(12px, 12px)",
  width: "6px",
  height: "6px",
  backgroundColor: "rgba(153, 153, 153, 1)"
};
var containerStyles = {
  display: "inline-flex",
  position: "relative",
  width: "30px",
  height: "30px"
};
var useTopBallAnimatedStyles = (0, _index.default)({
  default: {
    transform: "translate(12px, 3px) rotate(0deg)",
    width: "6px",
    height: "6px",
    borderRadius: "3px",
    backgroundColor: "rgba(153, 153, 153, 1)"
  },
  close: {
    transform: "translate(3px, 14px) rotate(45deg)",
    width: "24px",
    height: "2px",
    borderRadius: "2px",
    backgroundColor: "rgba(200, 50, 50, 1)"
  }
}, 300);
var useBottomBallAnimtedStyles = (0, _index.default)({
  default: {
    transform: "translate(12px, 21px) rotate(0deg)",
    width: "6px",
    height: "6px",
    borderRadius: "3px",
    backgroundColor: "rgba(153, 153, 153, 1)"
  },
  close: {
    transform: "translate(3px, 14px) rotate(-45deg)",
    width: "24px",
    height: "2px",
    borderRadius: "1px",
    backgroundColor: "rgba(200, 50, 50, 1)"
  }
}, 300);
var useMiddleBallAnimtedStyles = (0, _index.default)({
  default: {
    opacity: "1"
  },
  close: {
    opacity: "0"
  }
}, 300);

var OptionButton = _react.default.forwardRef(function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      state = _ref.state,
      style = _ref.style,
      className = _ref.className;

  var ref = arguments.length > 1 ? arguments[1] : undefined;
  state = state || "default";
  var topRef = (0, _react.useRef)(null);
  var bottomRef = (0, _react.useRef)(null);
  var middleRef = (0, _react.useRef)(null);
  useTopBallAnimatedStyles(state, topRef);
  useBottomBallAnimtedStyles(state, bottomRef);
  useMiddleBallAnimtedStyles(state, middleRef);
  return _react.default.createElement("div", {
    ref: ref,
    style: _objectSpread({
      display: "inline-block",
      width: "30px",
      height: "30px"
    }, style),
    className: className
  }, _react.default.createElement("div", {
    style: containerStyles
  }, _react.default.createElement("div", {
    ref: topRef,
    style: defaultBallStyles
  }), _react.default.createElement("div", {
    ref: bottomRef,
    style: defaultBallStyles
  }), _react.default.createElement("div", {
    ref: middleRef,
    style: defaultBallStyles
  })));
});

var _default = OptionButton;
exports.default = _default;
//# sourceMappingURL=Option.js.map