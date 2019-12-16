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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var wrapperStyle = {
  display: "inline-block"
};
var containerStyle = {
  display: "block",
  position: "relative",
  height: "40px",
  width: "30px",
  overflow: "hidden",
  cursor: "pointer",
  userSelect: "none"
};
var lineStyle = {
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: "0px",
  height: "3px",
  backgroundColor: "#ccc",
  borderRadius: "2px"
};
var nameStyle = {
  position: "absolute",
  top: 0,
  left: "32px",
  fontFamily: "Arial",
  fontSize: "18px",
  height: "40px",
  lineHeight: "30px",
  boxSizing: "border-box"
};
var iconContainer = {
  position: "absolute",
  width: "30px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  color: "#ccc"
};
var useLineStyledMotion = (0, _index.default)(function (_ref) {
  var width = _ref.width;
  return {
    inactive: {
      width: "0px",
      left: "0px"
    },
    active: {
      width: "".concat(width, "px"),
      left: "30px"
    }
  };
}, 400);
var useContainerStyledMotion = (0, _index.default)(function (_ref2) {
  var width = _ref2.width;
  return {
    inactive: {
      width: "30px"
    },
    active: {
      width: "".concat(width + 30, "px")
    }
  };
}, 400);
var useNameStyledMotion = (0, _index.default)({
  inactive: {
    transform: {
      value: "translate(0px, 40px)",
      startAt: 0,
      endAt: 0.5
    }
  },
  active: {
    transform: "translate(0px, 10px)"
  }
}, 400);
var useIconStyledMotion = (0, _index.default)(function (_ref3) {
  var color = _ref3.color;
  return {
    inactive: {
      transform: "scale(1, 1)",
      color: "rgba(204,204,204,1)"
    },
    active: {
      transform: {
        value: "scale(1, 1)",
        controls: ["scale(1,1.75)"],
        easing: "overshoot"
      },
      color: color
    }
  };
}, 800);

var NamedIcon = function NamedIcon() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$color = _ref4.color,
      backgroundColor = _ref4$color === void 0 ? "rgba(118, 209, 197, 1)" : _ref4$color,
      name = _ref4.name,
      _ref4$width = _ref4.width,
      width = _ref4$width === void 0 ? 100 : _ref4$width,
      _ref4$isActive = _ref4.isActive,
      isActive = _ref4$isActive === void 0 ? false : _ref4$isActive,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["color", "name", "width", "isActive", "children"]);

  var state = isActive ? "active" : "inactive";
  var lineRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
  var nameRef = (0, _react.useRef)(null);
  var iconRef = (0, _react.useRef)(null);
  useLineStyledMotion(state, {
    width: width
  }, lineRef);
  useContainerStyledMotion(state, {
    width: width
  }, containerRef);
  useNameStyledMotion(state, nameRef);
  useIconStyledMotion(state, {
    color: backgroundColor
  }, iconRef);
  return _react.default.createElement("div", _extends({
    style: wrapperStyle
  }, props), _react.default.createElement("div", {
    ref: containerRef,
    style: containerStyle
  }, _react.default.createElement("div", {
    ref: nameRef,
    style: _objectSpread({}, nameStyle, {
      color: backgroundColor
    })
  }, name), _react.default.createElement("div", {
    ref: lineRef,
    style: _objectSpread({}, lineStyle, {
      backgroundColor: backgroundColor
    })
  }), _react.default.createElement("div", {
    ref: iconRef,
    style: iconContainer
  }, children)));
};

var _default = NamedIcon;
exports.default = _default;
//# sourceMappingURL=NamedIcon.js.map