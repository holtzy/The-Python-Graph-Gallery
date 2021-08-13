"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _isRequiredForA11y = _interopRequireDefault(require("prop-types-extra/lib/isRequiredForA11y"));

var _ThemeProvider = require("./ThemeProvider");

var _PopoverTitle = _interopRequireDefault(require("./PopoverTitle"));

var _PopoverContent = _interopRequireDefault(require("./PopoverContent"));

var _excluded = ["bsPrefix", "placement", "className", "style", "children", "content", "arrowProps", "popper", "show"];
var defaultProps = {
  placement: 'right'
};

var Popover = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      content = _ref.content,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _1 = _ref.show,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref,
    role: "tooltip",
    style: style,
    "x-placement": primaryPlacement,
    className: (0, _classnames.default)(className, decoratedBsPrefix, primaryPlacement && "bs-popover-" + primaryPlacement)
  }, props), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), content ? /*#__PURE__*/_react.default.createElement(_PopoverContent.default, null, children) : children);
});

Popover.defaultProps = defaultProps;
Popover.Title = _PopoverTitle.default;
Popover.Content = _PopoverContent.default;
var _default = Popover;
exports.default = _default;
module.exports = exports["default"];