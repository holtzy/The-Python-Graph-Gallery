"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useTimeout = _interopRequireDefault(require("@restart/hooks/useTimeout"));

var _Fade = _interopRequireDefault(require("./Fade"));

var _ToastHeader = _interopRequireDefault(require("./ToastHeader"));

var _ToastBody = _interopRequireDefault(require("./ToastBody"));

var _ThemeProvider = require("./ThemeProvider");

var _ToastContext = _interopRequireDefault(require("./ToastContext"));

var Toast = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$transition = _ref.transition,
      Transition = _ref$transition === void 0 ? _Fade.default : _ref$transition,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? true : _ref$animation,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 3000 : _ref$delay,
      _ref$autohide = _ref.autohide,
      autohide = _ref$autohide === void 0 ? false : _ref$autohide,
      onClose = _ref.onClose,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "transition", "show", "animation", "delay", "autohide", "onClose"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  var delayRef = (0, _react.useRef)(delay);
  var onCloseRef = (0, _react.useRef)(onClose);
  (0, _react.useEffect)(function () {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  var autohideTimeout = (0, _useTimeout.default)();
  var autohideToast = !!(autohide && show);
  var autohideFunc = (0, _react.useCallback)(function () {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0, _react.useEffect)(function () {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  var toastContext = (0, _react.useMemo)(function () {
    return {
      onClose: onClose
    };
  }, [onClose]);
  var hasAnimation = !!(Transition && animation);

  var toast = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(bsPrefix, className, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }), children);

  return /*#__PURE__*/_react.default.createElement(_ToastContext.default.Provider, {
    value: toastContext
  }, hasAnimation && Transition ? /*#__PURE__*/_react.default.createElement(Transition, {
    in: show,
    unmountOnExit: true
  }, toast) : toast);
});

Toast.displayName = 'Toast';

var _default = Object.assign(Toast, {
  Body: _ToastBody.default,
  Header: _ToastHeader.default
});

exports.default = _default;
module.exports = exports["default"];