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

var rail = {
  borderRadius: "15px",
  backgroundColor: "rgba(200, 200, 200, 1)",
  position: "relative",
  width: "60px",
  height: "30px"
};
var handle = {
  borderRadius: "15px",
  backgroundColor: "rgba(225, 225, 225, 1)",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "0px",
  left: "0px",
  boxShadow: "0px 3px 5px rgba(0,0,0,0.2)"
};
var useRailStyles = (0, _index.default)({
  on: {
    backgroundColor: "rgba(0, 116, 217, 1)"
  },
  off: {
    backgroundColor: "rgba(200, 200, 200, 1)"
  }
}, 300);
var useHandleStyles = (0, _index.default)({
  on: {
    transform: "translate(100%, 0%)"
  },
  off: {
    transform: "translate(0%, 0%)"
  }
}, 300);

var Switch = function Switch() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      defaultState = _ref.defaultState;

  defaultState = defaultState || "off";

  var _useState = (0, _react.useState)(defaultState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var railRef = useRailStyles(state);
  var handleRef = useHandleStyles(state);
  (0, _react.useMemo)(function () {
    setState(defaultState);
  }, [defaultState]);

  var onClick = function onClick() {
    if (state === "on") {
      setState("off");
    } else {
      setState("on");
    }
  };

  return _react.default.createElement("div", {
    ref: railRef,
    style: rail,
    onClick: onClick
  }, _react.default.createElement("div", {
    ref: handleRef,
    style: handle
  }));
};

var _default = _react.default.forwardRef(Switch);

exports.default = _default;
//# sourceMappingURL=Switch.js.map