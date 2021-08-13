import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "onClick"];
import classNames from 'classnames';
import React, { useCallback } from 'react';
import AbstractNavItem from './AbstractNavItem';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  variant: undefined,
  active: false,
  disabled: false
};
var ListGroupItem = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      variant = _ref.variant,
      action = _ref.action,
      as = _ref.as,
      onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'list-group-item');
  var handleClick = useCallback(function (event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (onClick) onClick(event);
  }, [disabled, onClick]);

  if (disabled && props.tabIndex === undefined) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/React.createElement(AbstractNavItem, _extends({
    ref: ref
  }, props, {
    // eslint-disable-next-line no-nested-ternary
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: classNames(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
  }));
});
ListGroupItem.defaultProps = defaultProps;
ListGroupItem.displayName = 'ListGroupItem';
export default ListGroupItem;