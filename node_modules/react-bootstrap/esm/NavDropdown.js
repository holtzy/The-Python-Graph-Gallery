import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import NavItem from './NavItem';
import NavLink from './NavLink';
var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: PropTypes.any,

  /** An `onClick` handler passed to the Toggle component */
  onClick: PropTypes.func,

  /** The content of the non-toggle Button.  */
  title: PropTypes.node.isRequired,

  /** Disables the toggle NavLink  */
  disabled: PropTypes.bool,

  /** Style the toggle NavLink as active  */
  active: PropTypes.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: PropTypes.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: PropTypes.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: PropTypes.string,

  /** @ignore */
  bsPrefix: PropTypes.string
};
var NavDropdown = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      menuRole = _ref.menuRole,
      disabled = _ref.disabled,
      active = _ref.active,
      renderMenuOnMount = _ref.renderMenuOnMount,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active", "renderMenuOnMount"]);

  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    ref: ref
  }, props, {
    as: NavItem
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
NavDropdown.propTypes = propTypes;
NavDropdown.Item = Dropdown.Item;
NavDropdown.ItemText = Dropdown.ItemText;
NavDropdown.Divider = Dropdown.Divider;
NavDropdown.Header = Dropdown.Header;
export default NavDropdown;