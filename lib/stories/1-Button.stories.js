"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emoji = exports.Text = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _demo = require("@storybook/react/demo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Button',
  component: _demo.Button
};
exports.default = _default;

var Text = function Text() {
  return _react.default.createElement(_demo.Button, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Hello Button");
};

exports.Text = Text;

var Emoji = function Emoji() {
  return _react.default.createElement(_demo.Button, {
    onClick: (0, _addonActions.action)('clicked')
  }, _react.default.createElement("span", {
    role: "img",
    "aria-label": "so cool"
  }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"));
};

exports.Emoji = Emoji;
//# sourceMappingURL=1-Button.stories.js.map