import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["activeKey", "getControlledId", "getControllerId"],
    _excluded2 = ["bsPrefix", "className", "active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"];
import classNames from 'classnames';
import React, { useContext } from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
import TabContext from './TabContext';
import SelectableContext, { makeEventKey } from './SelectableContext';
import Fade from './Fade';

function useTabContext(props) {
  var context = useContext(TabContext);
  if (!context) return props;

  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = _objectWithoutPropertiesLoose(context, _excluded);

  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = makeEventKey(props.eventKey);
  return _extends({}, props, {
    active: props.active == null && key != null ? makeEventKey(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || Fade),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

var TabPane = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useTabContext = useTabContext(props),
      bsPrefix = _useTabContext.bsPrefix,
      className = _useTabContext.className,
      active = _useTabContext.active,
      onEnter = _useTabContext.onEnter,
      onEntering = _useTabContext.onEntering,
      onEntered = _useTabContext.onEntered,
      onExit = _useTabContext.onExit,
      onExiting = _useTabContext.onExiting,
      onExited = _useTabContext.onExited,
      mountOnEnter = _useTabContext.mountOnEnter,
      unmountOnExit = _useTabContext.unmountOnExit,
      Transition = _useTabContext.transition,
      _useTabContext$as = _useTabContext.as,
      Component = _useTabContext$as === void 0 ? 'div' : _useTabContext$as,
      _ = _useTabContext.eventKey,
      rest = _objectWithoutPropertiesLoose(_useTabContext, _excluded2);

  var prefix = useBootstrapPrefix(bsPrefix, 'tab-pane');
  if (!active && !Transition && unmountOnExit) return null;
  var pane = /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    ref: ref,
    role: "tabpanel",
    "aria-hidden": !active,
    className: classNames(className, prefix, {
      active: active
    })
  }));
  if (Transition) pane = /*#__PURE__*/React.createElement(Transition, {
    in: active,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/React.createElement(TabContext.Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(SelectableContext.Provider, {
    value: null
  }, pane));
});
TabPane.displayName = 'TabPane';
export default TabPane;