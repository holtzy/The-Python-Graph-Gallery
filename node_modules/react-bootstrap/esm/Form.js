import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import FormCheck from './FormCheck';
import FormFile from './FormFile';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormText from './FormText';
import Switch from './Switch';
import { useBootstrapPrefix } from './ThemeProvider';
import createWithBsPrefix from './createWithBsPrefix';
var FormRow = createWithBsPrefix('form-row');
var defaultProps = {
  inline: false
};
var FormImpl = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'form' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'form');
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});
FormImpl.displayName = 'Form';
FormImpl.defaultProps = defaultProps;
FormImpl.Row = FormRow;
FormImpl.Group = FormGroup;
FormImpl.Control = FormControl;
FormImpl.Check = FormCheck;
FormImpl.File = FormFile;
FormImpl.Switch = Switch;
FormImpl.Label = FormLabel;
FormImpl.Text = FormText;
export default FormImpl;