"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var noop = function noop() {
  return undefined;
};

var ToggleButton = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      name = _ref.name,
      className = _ref.className,
      checked = _ref.checked,
      type = _ref.type,
      onChange = _ref.onChange,
      value = _ref.value,
      disabled = _ref.disabled,
      inputRef = _ref.inputRef,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef"]);

  var _useState = (0, _react.useState)(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var handleFocus = (0, _react.useCallback)(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(true);
  }, []);
  var handleBlur = (0, _react.useCallback)(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(false);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Button.default, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, focused && 'focus', disabled && 'disabled'),
    type: undefined,
    active: !!checked,
    as: "label"
  }), /*#__PURE__*/_react.default.createElement("input", {
    name: name,
    type: type,
    value: value,
    ref: inputRef,
    autoComplete: "off",
    checked: !!checked,
    disabled: !!disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: onChange || noop
  }), children);
});

ToggleButton.displayName = 'ToggleButton';
var _default = ToggleButton;
exports.default = _default;
module.exports = exports["default"];