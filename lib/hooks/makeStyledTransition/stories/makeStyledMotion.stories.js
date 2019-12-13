"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleNamedIconDemo = exports.NamedIconDemo = exports.DisplayNoneExample = exports.MenuDemo = exports.OptionButtonDemo = exports.OptionDemo = exports.ButtonDemo = exports.SwitchDemo = exports.PulseDemo = exports.BlinkDemo = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Switch = _interopRequireDefault(require("./Switch"));

var _Button = _interopRequireDefault(require("./Button"));

var _Option = _interopRequireDefault(require("./Option"));

var _OptionButton = _interopRequireDefault(require("./OptionButton"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _FadeToNothing = _interopRequireDefault(require("./FadeToNothing"));

var _NamedIcon = _interopRequireDefault(require("./NamedIcon"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _MobileMenu = _interopRequireDefault(require("./MobileMenu"));

var _Blink = _interopRequireDefault(require("./Blink"));

var _Pulse = _interopRequireDefault(require("./Pulse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  component: null,
  title: "makeStyledTransition"
};
exports.default = _default;

var BlinkDemo = function BlinkDemo() {
  return _react.default.createElement(_Blink.default, null);
};

exports.BlinkDemo = BlinkDemo;

var PulseDemo = function PulseDemo() {
  return _react.default.createElement(_Pulse.default, null);
};

exports.PulseDemo = PulseDemo;

var SwitchDemo = function SwitchDemo() {
  return _react.default.createElement(_Switch.default, null);
};

exports.SwitchDemo = SwitchDemo;

var ButtonDemo = function ButtonDemo() {
  return _react.default.createElement(_Button.default, null);
};

exports.ButtonDemo = ButtonDemo;

var OptionDemo = function OptionDemo() {
  var _useState = (0, _react.useState)("default"),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onDefaultClick = function onDefaultClick() {
    setState("default");
  };

  var onCloseClick = function onCloseClick() {
    setState("close");
  };

  return _react.default.createElement("div", null, _react.default.createElement("button", {
    onClick: onDefaultClick
  }, "Options State"), _react.default.createElement("button", {
    onClick: onCloseClick
  }, "Close State"), _react.default.createElement("br", null), _react.default.createElement(_Option.default, {
    state: state
  }));
};

exports.OptionDemo = OptionDemo;

var OptionButtonDemo = function OptionButtonDemo() {
  return _react.default.createElement(_OptionButton.default, null);
};

exports.OptionButtonDemo = OptionButtonDemo;

var MenuDemo = function MenuDemo() {
  return _react.default.createElement(_Menu.default, {
    style: {
      position: "absolute",
      top: "0px",
      left: "100px"
    }
  });
};

exports.MenuDemo = MenuDemo;

var DisplayNoneExample = function DisplayNoneExample() {
  return _react.default.createElement(_FadeToNothing.default, null);
};

exports.DisplayNoneExample = DisplayNoneExample;

var NamedIconDemo = function NamedIconDemo() {
  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var onActivateClick = function onActivateClick() {
    setState(true);
  };

  var onInactivate = function onInactivate() {
    setState(false);
  };

  return _react.default.createElement("div", null, _react.default.createElement("button", {
    onClick: onActivateClick
  }, "Activate"), _react.default.createElement("button", {
    onClick: onInactivate
  }, "Inactivate"), _react.default.createElement("br", null), _react.default.createElement(_NamedIcon.default, {
    isActive: state,
    name: "settings",
    width: 70
  }, _react.default.createElement(_Settings.default, {
    fontSize: "large"
  })));
};

exports.NamedIconDemo = NamedIconDemo;

var MultipleNamedIconDemo = function MultipleNamedIconDemo() {
  return _react.default.createElement(_MobileMenu.default, null);
};

exports.MultipleNamedIconDemo = MultipleNamedIconDemo;
//# sourceMappingURL=makeStyledMotion.stories.js.map