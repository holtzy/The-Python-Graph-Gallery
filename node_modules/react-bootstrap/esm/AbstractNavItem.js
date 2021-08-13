import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["active", "className", "eventKey", "onSelect", "onClick", "as"];
import classNames from 'classnames';
import React, { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';
import warning from 'warning';
import NavContext from './NavContext';
import SelectableContext, { makeEventKey } from './SelectableContext';
var defaultProps = {
  disabled: false
};
var AbstractNavItem = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var navKey = makeEventKey(eventKey, props.href);
  var parentOnSelect = useContext(SelectableContext);
  var navContext = useContext(NavContext);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    var contextControllerId = navContext.getControllerId(navKey);
    var contextControlledId = navContext.getControlledId(navKey);
    process.env.NODE_ENV !== "production" ? warning(!contextControllerId || !props.id, "[react-bootstrap] The provided id '" + props.id + "' was overwritten by the current navContext with '" + contextControllerId + "'.") : void 0;
    process.env.NODE_ENV !== "production" ? warning(!contextControlledId || !props['aria-controls'], "[react-bootstrap] The provided aria-controls value '" + props['aria-controls'] + "' was overwritten by the current navContext with '" + contextControlledId + "'.") : void 0;
    props['data-rb-event-key'] = navKey;
    props.id = contextControllerId || props.id;
    props['aria-controls'] = contextControlledId || props['aria-controls'];
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    if (props.disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    props['aria-selected'] = isActive;
  }

  var handleOnclick = useEventCallback(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: classNames(className, isActive && 'active')
  }));
});
AbstractNavItem.defaultProps = defaultProps;
export default AbstractNavItem;