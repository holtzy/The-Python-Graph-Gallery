"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _AbstractNavItem = _interopRequireDefault(require("./AbstractNavItem"));

var _SelectableContext = require("./SelectableContext");

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  variant: undefined,
  active: false,
  disabled: false
};

var ListGroupItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      variant = _ref.variant,
      action = _ref.action,
      as = _ref.as,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey", "onClick"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'list-group-item');
  var handleClick = (0, _react.useCallback)(function (event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (onClick) onClick(event);
  }, [disabled, onClick]);
  return /*#__PURE__*/_react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    eventKey: (0, _SelectableContext.makeEventKey)(eventKey || null, props.href) // eslint-disable-next-line no-nested-ternary
    ,
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: (0, _classnames.default)(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
  }));
});

ListGroupItem.defaultProps = defaultProps;
ListGroupItem.displayName = 'ListGroupItem';
var _default = ListGroupItem;
exports.default = _default;
module.exports = exports["default"];