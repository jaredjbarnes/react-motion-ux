"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useInterval = function useInterval(callback, time) {
  var callbackRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    callbackRef.current = callback;
  }, [callback]);
  (0, _react.useEffect)(function () {
    if (typeof time === "number") {
      var interval = setInterval(function () {
        callbackRef.current();
      }, time);
      return function () {
        clearInterval(interval);
      };
    }
  }, [time]);
};

var _default = useInterval;
exports.default = _default;
//# sourceMappingURL=useInterval.js.map