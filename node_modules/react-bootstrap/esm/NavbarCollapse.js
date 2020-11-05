import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import Collapse from './Collapse';
import { useBootstrapPrefix } from './ThemeProvider';
import NavbarContext from './NavbarContext';
var NavbarCollapse = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "bsPrefix"]);

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