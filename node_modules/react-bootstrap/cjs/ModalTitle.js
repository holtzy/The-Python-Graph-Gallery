"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./createWithBsPrefix"));

var _divWithClassName = _interopRequireDefault(require("./divWithClassName"));

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');

var _default = (0, _createWithBsPrefix.default)('modal-title', {
  Component: DivStyledAsH4
});

exports.default = _default;
module.exports = exports["default"];