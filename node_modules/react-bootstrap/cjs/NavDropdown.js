"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _propTypes.default.any,

  /** An `onClick` handler passed to the Toggle component */
  onClick: _propTypes.default.func,

  /** The content of the non-toggle Button.  */
  title: _propTypes.default.node.isRequired,

  /** Disables the toggle NavLink  */
  disabled: _propTypes.default.bool,

  /** Style the toggle NavLink as active  */
  active: _propTypes.default.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: _propTypes.default.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: _propTypes.default.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: _propTypes.default.string,

  /** @ignore */
  bsPrefix: _propTypes.default.string
};

var NavDropdown = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      menuRole = _ref.menuRole,
      disabled = _ref.disabled,
      active = _ref.active,
      renderMenuOnMount = _ref.renderMenuOnMount,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active", "renderMenuOnMount"]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    as: _NavItem.default
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Toggle, {
    id: id,
    eventKey: null,
    active: active,
    disabled: disabled,
    childBsPrefix: bsPrefix,
    as: _NavLink.default
  }, title), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});

NavDropdown.displayName = 'NavDropdown';
NavDropdown.propTypes = propTypes;
NavDropdown.Item = _Dropdown.default.Item;
NavDropdown.ItemText = _Dropdown.default.ItemText;
NavDropdown.Divider = _Dropdown.default.Divider;
NavDropdown.Header = _Dropdown.default.Header;
var _default = NavDropdown;
exports.default = _default;
module.exports = exports["default"];