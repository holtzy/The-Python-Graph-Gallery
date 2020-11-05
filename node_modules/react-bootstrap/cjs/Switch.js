"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _FormCheck = _interopRequireDefault(require("./FormCheck"));

var Switch = _react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_FormCheck.default, (0, _extends2.default)({}, props, {
    ref: ref,
    type: "switch"
  }));
});

Switch.displayName = 'Switch';
Switch.Input = _FormCheck.default.Input;
Switch.Label = _FormCheck.default.Label;
var _default = Switch;
exports.default = _default;
module.exports = exports["default"];