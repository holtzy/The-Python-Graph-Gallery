"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _SelectableContext = _interopRequireWildcard(require("./SelectableContext"));

var _ThemeProvider = require("./ThemeProvider");

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var defaultProps = {
  as: _SafeAnchor.default,
  disabled: false
};

var DropdownItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      eventKey = _ref.eventKey,
      disabled = _ref.disabled,
      href = _ref.href,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      propActive = _ref.active,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-item');
  var onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey; // TODO: Restrict eventKey to string in v5?


  var key = (0, _SelectableContext.makeEventKey)(eventKey, href);
  var active = propActive == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : propActive;
  var handleClick = (0, _useEventCallback.default)(function (event) {
    // SafeAnchor handles the disabled case, but we handle it here
    // for other components
    if (disabled) return;
    if (onClick) onClick(event);
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
  });
  return (
    /*#__PURE__*/
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      ref: ref,
      href: href,
      disabled: disabled,
      className: (0, _classnames.default)(className, prefix, active && 'active', disabled && 'disabled'),
      onClick: handleClick
    }), children)
  );
});

DropdownItem.displayName = 'DropdownItem';
DropdownItem.defaultProps = defaultProps;
var _default = DropdownItem;
exports.default = _default;
module.exports = exports["default"];