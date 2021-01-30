"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointAndClickDemo = exports.AnimatedPipelinePath = exports.Default = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Compass = _interopRequireDefault(require("./Compass"));

var _PipelinePath = _interopRequireDefault(require("./PipelinePath"));

var _PointAndClick = _interopRequireDefault(require("./PointAndClick"));

var _Switch = _interopRequireDefault(require("../../makeStyledTransition/stories/Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  component: null,
  title: "useTransition"
};
exports.default = _default;
var bigHoverStyles = {
  display: "inline-flex",
  width: "100px",
  height: "100px",
  backgroundColor: "#dedede",
  border: "1px solid #ccc",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box"
};
var stateNames = ["up", "right", "down", "left"];

var getRandomState = function getRandomState() {
  var index = Math.round(Math.random() * (stateNames.length - 1));
  return stateNames[index];
};

var initialPositions = new Array(50).fill("up");
initialPositions = initialPositions.map(function () {
  return getRandomState();
});

var generatedValue = function generatedValue(max) {
  return Math.round(Math.random() * max);
};

var BigHoverButton = function BigHoverButton(_ref) {
  var style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["style", "children"]);

  return _react.default.createElement("div", _extends({}, props, {
    style: _objectSpread({}, bigHoverStyles, {}, style)
  }), children);
};

var Default = function Default() {
  var _useState = (0, _react.useState)(initialPositions),
      _useState2 = _slicedToArray(_useState, 2),
      positions = _useState2[0],
      setPositions = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      animate = _useState4[0],
      setAnimate = _useState4[1];

  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      var newPositions = initialPositions.map(function () {
        return getRandomState();
      });
      setPositions(newPositions);
    }, 600);
    return function () {
      clearInterval(interval);
    };
  }, []);
  var compasses = positions.map(function (position, index) {
    return _react.default.createElement(_Compass.default, {
      key: index,
      position: position,
      animate: animate
    });
  });
  return _react.default.createElement("div", null, _react.default.createElement(_Switch.default, {
    onChange: function onChange(value) {
      setAnimate(value);
    },
    defaultState: "on"
  }), _react.default.createElement("div", {
    style: {
      display: "inline-block",
      width: "300px",
      height: "300px"
    }
  }, _react.default.createElement(BigHoverButton, {
    onMouseOver: function onMouseOver() {
      var newPositions = initialPositions.map(function () {
        return "up";
      });
      setPositions(newPositions);
    }
  }, "Top"), _react.default.createElement(BigHoverButton, {
    onMouseOver: function onMouseOver() {
      var newPositions = initialPositions.map(function () {
        return "right";
      });
      setPositions(newPositions);
    }
  }, "Right"), _react.default.createElement("br", null), _react.default.createElement(BigHoverButton, {
    onMouseOver: function onMouseOver() {
      var newPositions = initialPositions.map(function () {
        return "down";
      });
      setPositions(newPositions);
    }
  }, "Bottom"), _react.default.createElement(BigHoverButton, {
    onMouseOver: function onMouseOver() {
      var newPositions = initialPositions.map(function () {
        return "left";
      });
      setPositions(newPositions);
    }
  }, "Left")), _react.default.createElement("br", null), compasses);
};

exports.Default = Default;

var AnimatedPipelinePath = function AnimatedPipelinePath() {
  var _useState5 = (0, _react.useState)({
    originX: 300,
    originY: 300,
    destinationX: 100,
    destinationY: 100
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  var interval = setInterval(function () {
    var state = {
      originX: generatedValue(300),
      originY: generatedValue(300),
      destinationX: generatedValue(300),
      destinationY: generatedValue(300)
    };
    setState(state);
  }, 2000);
  (0, _react.useEffect)(function () {
    return function () {
      clearInterval(interval);
    };
  });
  return _react.default.createElement("div", {
    style: {
      position: "relative",
      width: "800px",
      height: "800px"
    }
  }, _react.default.createElement(_PipelinePath.default, state));
};

exports.AnimatedPipelinePath = AnimatedPipelinePath;

var PointAndClickDemo = function PointAndClickDemo() {
  return _react.default.createElement(_PointAndClick.default, null);
};

exports.PointAndClickDemo = PointAndClickDemo;
//# sourceMappingURL=useTransition.stories.js.map