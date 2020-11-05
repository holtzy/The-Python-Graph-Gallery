import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import classNames from 'classnames';
import useTimeout from '@restart/hooks/useTimeout';
import Fade from './Fade';
import ToastHeader from './ToastHeader';
import ToastBody from './ToastBody';
import { useBootstrapPrefix } from './ThemeProvider';
import ToastContext from './ToastContext';
var Toast = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$transition = _ref.transition,
      Transition = _ref$transition === void 0 ? Fade : _ref$transition,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? true : _ref$animation,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 3000 : _ref$delay,
      _ref$autohide = _ref.autohide,
      autohide = _ref$autohide === void 0 ? false : _ref$autohide,
      onClose = _ref.onClose,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "children", "transition", "show", "animation", "delay", "autohide", "onClose"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  var delayRef = useRef(delay);
  var onCloseRef = useRef(onClose);
  useEffect(function () {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  var autohideTimeout = useTimeout();
  var autohideToast = !!(autohide && show);
  var autohideFunc = useCallback(function () {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  useEffect(function () {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  var toastContext = useMemo(function () {
    return {
      onClose: onClose
    };
  }, [onClose]);
  var hasAnimation = !!(Transition && animation);
  var toast = /*#__PURE__*/React.createElement("div", _extends({}, props, {
    ref: ref,
    className: classNames(bsPrefix, className, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }), children);
  return /*#__PURE__*/React.createElement(ToastContext.Provider, {
    value: toastContext
  }, hasAnimation && Transition ? /*#__PURE__*/React.createElement(Transition, {
    in: show,
    unmountOnExit: true
  }, toast) : toast);
});
Toast.displayName = 'Toast';
export default Object.assign(Toast, {
  Body: ToastBody,
  Header: ToastHeader
});