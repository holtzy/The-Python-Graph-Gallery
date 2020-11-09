"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var CarouselItem = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "children", "className"]);
  var finalClassName = (0, _classnames.default)(className, (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: finalClassName
  }), children);
});

CarouselItem.displayName = 'CarouselItem';
var _default = CarouselItem;
exports.default = _default;
module.exports = exports["default"];