"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var ModalContext = _react.default.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide: function onHide() {}
});

var _default = ModalContext;
exports.default = _default;
module.exports = exports["default"];