import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import FormCheck from './FormCheck';
var Switch = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(FormCheck, _extends({}, props, {
    ref: ref,
    type: "switch"
  }));
});
Switch.displayName = 'Switch';
Switch.Input = FormCheck.Input;
Switch.Label = FormCheck.Label;
export default Switch;