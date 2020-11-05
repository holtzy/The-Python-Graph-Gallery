import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React, { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';
import SelectableContext, { makeEventKey } from './SelectableContext';
import { useBootstrapPrefix } from './ThemeProvider';
import NavContext from './NavContext';
import SafeAnchor from './SafeAnchor';
var defaultProps = {
  as: SafeAnchor,
  disabled: false
};
var DropdownItem = React.forwardRef(function (_ref, ref) {
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
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'dropdown-item');
  var onSelectCtx = useContext(SelectableContext);
  var navContext = useContext(NavContext);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey;

  var key = makeEventKey(eventKey || null, href);
  var active = propActive == null && key != null ? makeEventKey(activeKey) === key : propActive;
  var handleClick = useEventCallback(function (event) {
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
    React.createElement(Component, _extends({}, props, {
      ref: ref,
      href: href,
      disabled: disabled,
      className: classNames(className, prefix, active && 'active', disabled && 'disabled'),
      onClick: handleClick
    }), children)
  );
});
DropdownItem.displayName = 'DropdownItem';
DropdownItem.defaultProps = defaultProps;
export default DropdownItem;