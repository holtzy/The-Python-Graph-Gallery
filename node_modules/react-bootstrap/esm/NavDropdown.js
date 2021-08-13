import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["id", "title", "children", "bsPrefix", "className", "rootCloseEvent", "menuRole", "disabled", "active", "renderMenuOnMount"];
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
import Dropdown from './Dropdown';
import NavLink from './NavLink';
var NavDropdown = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      rootCloseEvent = _ref.rootCloseEvent,
      menuRole = _ref.menuRole,
      disabled = _ref.disabled,
      active = _ref.active,
      renderMenuOnMount = _ref.renderMenuOnMount,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  /* NavItem has no additional logic, it's purely presentational. Can set nav item class here to support "as" */
  var navItemPrefix = useBootstrapPrefix(undefined, 'nav-item');
  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    ref: ref
  }, props, {
    className: classNames(className, navItemPrefix)
  }), /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    id: id,
    eventKey: null,
    active: active,
    disabled: disabled,
    childBsPrefix: bsPrefix,
    as: NavLink
  }, title), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});
NavDropdown.displayName = 'NavDropdown';
NavDropdown.Item = Dropdown.Item;
NavDropdown.ItemText = Dropdown.ItemText;
NavDropdown.Divider = Dropdown.Divider;
NavDropdown.Header = Dropdown.Header;
export default NavDropdown;