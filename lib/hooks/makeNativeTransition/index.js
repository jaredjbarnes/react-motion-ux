"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useNativeTransition = _interopRequireDefault(require("../useNativeTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var makeNativeTransition = function makeNativeTransition(suppliedStates, duration) {
  return function (name) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        props = _ref.props,
        rest = _objectWithoutProperties(_ref, ["props"]);

    var states;

    if (typeof suppliedStates === "function") {
      states = suppliedStates(props);
    } else {
      states = suppliedStates;
    }

    var stateNames = Object.keys(states).join(", ");
    var initialProperties = states.initial;
    var cssProperties = states[name];

    if (cssProperties == null) {
      throw new Error("Invalid Arguments: Cannot find '".concat(name, "' within defined states: ").concat(stateNames, "."));
    }

    if (name == null) {
      throw new Error("Invalid Arguments: Cannot find '".concat(name, "' within defined states: ").concat(stateNames, ", you may have forgotten to pass the state name in as an argument."));
    }

    return (0, _useNativeTransition.default)(cssProperties, _objectSpread({
      duration: duration,
      initialProperties: initialProperties
    }, rest));
  };
};

var _default = makeNativeTransition;
exports.default = _default;
//# sourceMappingURL=index.js.map