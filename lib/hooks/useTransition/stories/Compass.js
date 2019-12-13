"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _clone = _interopRequireDefault(require("../../clone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var states = {
  left: {
    transform: "translate(0px, 150px)",
    border: "15px solid rgba(124, 151, 124, 1)"
  },
  up: {
    transform: "translate(150px, 0px)",
    border: "10px solid rgba(46, 66, 61, 1)"
  },
  down: {
    transform: "translate(150px, 300px)",
    border: "35px solid rgba(147, 170, 162, 1)"
  },
  right: {
    transform: "translate(300px, 150px)",
    border: "30px solid rgba(191, 192, 190, 1)"
  }
};

var applyStyleValues = function applyStyleValues(element, values) {
  if (element != null && element.style != null) {
    Object.keys(values).forEach(function (key) {
      element.style[key] = values[key];
    });
  }
};

var containerStyle = {
  display: "inline-block",
  position: "relative",
  width: "300px",
  height: "300px"
};

var Compass = function Compass(_ref) {
  var defaultPosition = _ref.position,
      animate = _ref.animate;

  var _useState = (0, _react.useState)(defaultPosition),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var placement = states[position];
  (0, _react.useMemo)(function () {
    setPosition(defaultPosition);
  }, [defaultPosition]);
  var ref = (0, _index.default)((0, _clone.default)(placement), 2000, applyStyleValues, animate);
  var style = {
    position: "absolute",
    background: "rgba(239, 240, 242, 1)",
    borderRadius: "50% 50%",
    width: "100px",
    height: "100px"
  };
  return _react.default.createElement("div", {
    style: containerStyle
  }, _react.default.createElement("div", {
    ref: ref,
    style: style
  }));
};

var _default = Compass;
exports.default = _default;
//# sourceMappingURL=Compass.js.map