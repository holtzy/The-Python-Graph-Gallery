"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./createWithBsPrefix"));

var _FigureImage = _interopRequireDefault(require("./FigureImage"));

var _FigureCaption = _interopRequireDefault(require("./FigureCaption"));

var Figure = (0, _createWithBsPrefix.default)('figure', {
  Component: 'figure'
});
Figure.Image = _FigureImage.default;
Figure.Caption = _FigureCaption.default;
var _default = Figure;
exports.default = _default;
module.exports = exports["default"];