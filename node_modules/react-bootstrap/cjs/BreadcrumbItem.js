"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  active: false,
  linkProps: {}
};

var BreadcrumbItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'li' : _ref$as,
      _ref$linkAs = _ref.linkAs,
      LinkComponent = _ref$linkAs === void 0 ? _SafeAnchor.default : _ref$linkAs,
      linkProps = _ref.linkProps,
      href = _ref.href,
      title = _ref.title,
      target = _ref.target,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "active", "children", "className", "as", "linkAs", "linkProps", "href", "title", "target"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'breadcrumb-item');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(prefix, className, {
      active: active
    }),
    "aria-current": active ? 'page' : undefined
  }), active ? children : /*#__PURE__*/_react.default.createElement(LinkComponent, (0, _extends2.default)({}, linkProps, {
    href: href,
    title: title,
    target: target
  }), children));
});

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
var _default = BreadcrumbItem;
exports.default = _default;
module.exports = exports["default"];