import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["bsPrefix", "active", "children", "className", "as", "linkAs", "linkProps", "href", "title", "target"];
import classNames from 'classnames';
import React from 'react';
import SafeAnchor from './SafeAnchor';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  active: false,
  linkProps: {}
};
var BreadcrumbItem = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'li' : _ref$as,
      _ref$linkAs = _ref.linkAs,
      LinkComponent = _ref$linkAs === void 0 ? SafeAnchor : _ref$linkAs,
      linkProps = _ref.linkProps,
      href = _ref.href,
      title = _ref.title,
      target = _ref.target,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var prefix = useBootstrapPrefix(bsPrefix, 'breadcrumb-item');
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classNames(prefix, className, {
      active: active
    }),
    "aria-current": active ? 'page' : undefined
  }), active ? children : /*#__PURE__*/React.createElement(LinkComponent, _extends({}, linkProps, {
    href: href,
    title: title,
    target: target
  }), children));
});
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
export default BreadcrumbItem;