import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import SafeAnchor from './SafeAnchor';
import AbstractNavItem from './AbstractNavItem';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  disabled: false,
  as: SafeAnchor
};
var NavLink = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-link');
  return /*#__PURE__*/React.createElement(AbstractNavItem, _extends({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: classNames(className, bsPrefix, disabled && 'disabled')
  }));
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
export default NavLink;