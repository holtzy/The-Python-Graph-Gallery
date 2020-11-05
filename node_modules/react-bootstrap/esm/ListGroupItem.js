import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React, { useCallback } from 'react';
import AbstractNavItem from './AbstractNavItem';
import { makeEventKey } from './SelectableContext';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  variant: undefined,
  active: false,
  disabled: false
};
var ListGroupItem = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      variant = _ref.variant,
      action = _ref.action,
      as = _ref.as,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey", "onClick"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'list-group-item');
  var handleClick = useCallback(function (event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (onClick) onClick(event);
  }, [disabled, onClick]);
  return /*#__PURE__*/React.createElement(AbstractNavItem, _extends({
    ref: ref
  }, props, {
    eventKey: makeEventKey(eventKey || null, props.href) // eslint-disable-next-line no-nested-ternary
    ,
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: classNames(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
  }));
});
ListGroupItem.defaultProps = defaultProps;
ListGroupItem.displayName = 'ListGroupItem';
export default ListGroupItem;