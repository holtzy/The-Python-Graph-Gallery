"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _ThemeProvider = require("./ThemeProvider");

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _ToastContext = _interopRequireDefault(require("./ToastContext"));

var defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};

var ToastHeader = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "closeLabel", "closeButton", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'toast-header');
  var context = (0, _react.useContext)(_ToastContext.default);
  var handleClick = (0, _useEventCallback.default)(function (e) {
    if (context && context.onClose) {
      context.onClose(e);
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(bsPrefix, className)
  }), children, closeButton && /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    label: closeLabel,
    onClick: handleClick,
    className: "ml-2 mb-1",
    "data-dismiss": "toast"
  }));
});

ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps;
var _default = ToastHeader;
exports.default = _default;
module.exports = exports["default"];