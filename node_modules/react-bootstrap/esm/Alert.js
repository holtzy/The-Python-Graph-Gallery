import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"];
import classNames from 'classnames';
import React from 'react';
import { useUncontrolled } from 'uncontrollable';
import useEventCallback from '@restart/hooks/useEventCallback';
import { useBootstrapPrefix } from './ThemeProvider';
import Fade from './Fade';
import CloseButton from './CloseButton';
import divWithClassName from './divWithClassName';
import createWithBsPrefix from './createWithBsPrefix';
import SafeAnchor from './SafeAnchor';
var DivStyledAsH4 = divWithClassName('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
var AlertHeading = createWithBsPrefix('alert-heading', {
  Component: DivStyledAsH4
});
var AlertLink = createWithBsPrefix('alert-link', {
  Component: SafeAnchor
});
var defaultProps = {
  show: true,
  transition: Fade,
  closeLabel: 'Close alert'
};
var Alert = /*#__PURE__*/React.forwardRef(function (uncontrolledProps, ref) {
  var _useUncontrolled = useUncontrolled(uncontrolledProps, {
    show: 'onClose'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      show = _useUncontrolled.show,
      closeLabel = _useUncontrolled.closeLabel,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      variant = _useUncontrolled.variant,
      onClose = _useUncontrolled.onClose,
      dismissible = _useUncontrolled.dismissible,
      transition = _useUncontrolled.transition,
      props = _objectWithoutPropertiesLoose(_useUncontrolled, _excluded);

  var prefix = useBootstrapPrefix(bsPrefix, 'alert');
  var handleClose = useEventCallback(function (e) {
    if (onClose) {
      onClose(false, e);
    }
  });
  var Transition = transition === true ? Fade : transition;
  var alert = /*#__PURE__*/React.createElement("div", _extends({
    role: "alert"
  }, !Transition ? props : undefined, {
    ref: ref,
    className: classNames(className, prefix, variant && prefix + "-" + variant, dismissible && prefix + "-dismissible")
  }), dismissible && /*#__PURE__*/React.createElement(CloseButton, {
    onClick: handleClose,
    label: closeLabel
  }), children);
  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/React.createElement(Transition, _extends({
    unmountOnExit: true
  }, props, {
    ref: undefined,
    in: show
  }), alert);
});
Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.Link = AlertLink;
Alert.Heading = AlertHeading;
export default Alert;