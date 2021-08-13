import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["bsPrefix", "className", "as"];
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var NavbarBrand = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      as = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-brand');
  var Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(className, bsPrefix)
  }));
});
NavbarBrand.displayName = 'NavbarBrand';
export default NavbarBrand;