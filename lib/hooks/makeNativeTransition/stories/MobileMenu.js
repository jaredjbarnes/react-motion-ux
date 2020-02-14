"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NamedIcon = _interopRequireDefault(require("./NamedIcon"));

var _HomeOutlined = _interopRequireDefault(require("@material-ui/icons/HomeOutlined"));

var _AccessTimeOutlined = _interopRequireDefault(require("@material-ui/icons/AccessTimeOutlined"));

var _SecurityOutlined = _interopRequireDefault(require("@material-ui/icons/SecurityOutlined"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MouseSensorPad = function MouseSensorPad(props) {
  return _react.default.createElement("div", _extends({}, props, {
    style: {
      width: "100px",
      height: "50px",
      backgroundColor: "rgb(100,100,100)",
      border: "1px solid #000"
    }
  }));
};

var MobileMenu = function MobileMenu() {
  var _useState = (0, _react.useState)("home"),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return _react.default.createElement("div", {
    style: {
      width: "100%",
      height: "800px",
      backgroundColor: "#ccc",
      paddingTop: "100px",
      textAlign: "center"
    }
  }, _react.default.createElement("div", null, _react.default.createElement(MouseSensorPad, {
    onMouseEnter: function onMouseEnter() {
      setState("home");
    }
  }), _react.default.createElement(MouseSensorPad, {
    onMouseEnter: function onMouseEnter() {
      setState("time");
    }
  }), _react.default.createElement(MouseSensorPad, {
    onMouseEnter: function onMouseEnter() {
      setState("guard");
    }
  }), _react.default.createElement(MouseSensorPad, {
    onMouseEnter: function onMouseEnter() {
      setState("settings");
    }
  })), _react.default.createElement("div", {
    style: {
      display: "inline-flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "400px",
      height: "100px",
      borderRadius: "10px 10px 50px 50px",
      backgroundColor: "rgba(240,240,240,1)",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.25)"
    }
  }, _react.default.createElement(_NamedIcon.default, {
    isActive: state === "home",
    name: "Home",
    onClick: function onClick() {
      setState("home");
    },
    width: 53
  }, _react.default.createElement(_HomeOutlined.default, {
    fontSize: "large"
  })), _react.default.createElement(_NamedIcon.default, {
    isActive: state === "time",
    name: "Time",
    onClick: function onClick() {
      setState("time");
    },
    width: 43
  }, _react.default.createElement(_AccessTimeOutlined.default, {
    fontSize: "large"
  })), _react.default.createElement(_NamedIcon.default, {
    isActive: state === "guard",
    name: "Guard",
    onClick: function onClick() {
      setState("guard");
    },
    width: 55
  }, _react.default.createElement(_SecurityOutlined.default, {
    fontSize: "large"
  })), _react.default.createElement(_NamedIcon.default, {
    isActive: state === "settings",
    name: "Settings",
    onClick: function onClick() {
      setState("settings");
    },
    width: 70
  }, _react.default.createElement(_Settings.default, {
    fontSize: "large"
  }))));
};

var _default = MobileMenu;
exports.default = _default;
//# sourceMappingURL=MobileMenu.js.map