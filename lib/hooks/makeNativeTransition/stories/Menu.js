"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OptionButton = _interopRequireDefault(require("./OptionButton"));

var _Button = _interopRequireDefault(require("./Button"));

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var wrapper = {
  display: "inline-block",
  position: "relative"
};
var menuContainer = {
  display: "block",
  position: "relative"
};
var option = {
  display: "block",
  position: "absolute",
  top: "0px",
  left: "0px"
};
var useOneOptionMotion = (0, _index.default)({
  initial: {
    transform: {
      value: "translate(0px, 0px)",
      controls: ["translate(0px, 40px)"]
    },
    opacity: "0"
  },
  opened: {
    transform: {
      value: "translate(0px, 60px)",
      controls: ["translate(0px, 0px)"]
    },
    opacity: "1"
  },
  closed: {
    transform: "translate(0px, 0px)",
    opacity: "0"
  }
}, 400);
var useTwoOptionMotion = (0, _index.default)({
  opened: {
    transform: {
      value: "translate(-60px, 30px)",
      controls: ["translate(0px, 40px)"]
    },
    opacity: "1"
  },
  closed: {
    transform: {
      value: "translate(0px, 0px)",
      controls: ["translate(0px, 40px)"]
    },
    opacity: "0"
  }
}, 400);
var useThreeOptionMotion = (0, _index.default)({
  opened: {
    transform: {
      value: "translate(60px, 30px)",
      controls: ["translate(0px, 40px)"]
    },
    opacity: "1"
  },
  closed: {
    transform: {
      value: "translate(0px, 0px)",
      controls: ["translate(0px, 40px)"]
    },
    opacity: "0"
  }
}, 400);

var Menu = _react.default.forwardRef(function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ref = arguments.length > 1 ? arguments[1] : undefined;

  var _useState = (0, _react.useState)("closed"),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var oneRef = useOneOptionMotion(state);
  var twoRef = useTwoOptionMotion(state);
  var threeRef = useThreeOptionMotion(state);

  var onClick = function onClick() {
    if (state === "opened") {
      setState("closed");
    } else {
      setState("opened");
    }
  };

  return _react.default.createElement("div", {
    ref: ref,
    style: _objectSpread({}, wrapper, {}, props.style)
  }, _react.default.createElement("div", {
    style: menuContainer
  }, _react.default.createElement("div", {
    style: {
      position: "relative"
    }
  }, state === "opened" ? _react.default.createElement(Menu, {
    ref: oneRef,
    style: option
  }) : null, _react.default.createElement(_Button.default, {
    ref: twoRef,
    style: option
  }, "2"), _react.default.createElement(_Button.default, {
    ref: threeRef,
    style: option
  }, "3"), _react.default.createElement(_OptionButton.default, {
    onClick: onClick
  }))));
});

var _default = Menu;
exports.default = _default;
//# sourceMappingURL=Menu.js.map