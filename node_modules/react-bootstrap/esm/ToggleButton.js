import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef"];
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import Button from './Button';

var noop = function noop() {
  return undefined;
};

var ToggleButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      name = _ref.name,
      className = _ref.className,
      checked = _ref.checked,
      type = _ref.type,
      onChange = _ref.onChange,
      value = _ref.value,
      disabled = _ref.disabled,
      inputRef = _ref.inputRef,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var handleFocus = useCallback(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(true);
  }, []);
  var handleBlur = useCallback(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(false);
  }, []);
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    ref: ref,
    className: classNames(className, focused && 'focus', disabled && 'disabled'),
    type: undefined,
    active: !!checked,
    as: "label"
  }), /*#__PURE__*/React.createElement("input", {
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
export default ToggleButton;