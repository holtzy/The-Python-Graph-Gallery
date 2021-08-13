"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _uncontrollable = require("uncontrollable");

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _ThemeProvider = require("./ThemeProvider");

var _Fade = _interopRequireDefault(require("./Fade"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _divWithClassName = _interopRequireDefault(require("./divWithClassName"));

var _createWithBsPrefix = _interopRequireDefault(require("./createWithBsPrefix"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _excluded = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"];
var DivStyledAsH4 = (0, _divWithClassName.default)('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
var AlertHeading = (0, _createWithBsPrefix.default)('alert-heading', {
  Component: DivStyledAsH4
});
var AlertLink = (0, _createWithBsPrefix.default)('alert-link', {
  Component: _SafeAnchor.default
});
var defaultProps = {
  show: true,
  transition: _Fade.default,
  closeLabel: 'Close alert'
};

var Alert = /*#__PURE__*/_react.default.forwardRef(function (uncontrolledProps, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
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
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, _excluded);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'alert');
  var handleClose = (0, _useEventCallback.default)(function (e) {
    if (onClose) {
      onClose(false, e);
    }
  });
  var Transition = transition === true ? _Fade.default : transition;

  var alert = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    role: "alert"
  }, !Transition ? props : undefined, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix, variant && prefix + "-" + variant, dismissible && prefix + "-dismissible")
  }), dismissible && /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    onClick: handleClose,
    label: closeLabel
  }), children);

  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/_react.default.createElement(Transition, (0, _extends2.default)({
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
var _default = Alert;
exports.default = _default;
module.exports = exports["default"];