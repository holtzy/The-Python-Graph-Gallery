import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
import BreadcrumbItem from './BreadcrumbItem';
var defaultProps = {
  label: 'breadcrumb',
  listProps: {}
};
var Breadcrumb = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      listProps = _ref.listProps,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'nav' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "listProps", "children", "label", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'breadcrumb');
  return /*#__PURE__*/React.createElement(Component, _extends({
    "aria-label": label,
    className: className,
    ref: ref
  }, props), /*#__PURE__*/React.createElement("ol", _extends({}, listProps, {
    className: classNames(prefix, listProps == null ? void 0 : listProps.className)
  }), children));
});
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = defaultProps;
Breadcrumb.Item = BreadcrumbItem;
export default Breadcrumb;