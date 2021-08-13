import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["children", "bsPrefix"];
import React from 'react';
import Collapse from './Collapse';
import { useBootstrapPrefix } from './ThemeProvider';
import NavbarContext from './NavbarContext';
var NavbarCollapse = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-collapse');
  return /*#__PURE__*/React.createElement(NavbarContext.Consumer, null, function (context) {
    return /*#__PURE__*/React.createElement(Collapse, _extends({
      in: !!(context && context.expanded)
    }, props), /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});
NavbarCollapse.displayName = 'NavbarCollapse';
export default NavbarCollapse;