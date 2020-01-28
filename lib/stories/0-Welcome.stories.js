"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToStorybook = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonLinks = require("@storybook/addon-links");

var _demo = require("@storybook/react/demo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Welcome',
  component: _demo.Welcome
};
exports.default = _default;

var ToStorybook = function ToStorybook() {
  return _react.default.createElement(_demo.Welcome, {
    showApp: (0, _addonLinks.linkTo)('Button')
  });
};

exports.ToStorybook = ToStorybook;
ToStorybook.story = {
  name: 'to Storybook'
};
//# sourceMappingURL=0-Welcome.stories.js.map