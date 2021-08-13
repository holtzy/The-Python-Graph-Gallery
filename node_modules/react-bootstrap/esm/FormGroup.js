import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["bsPrefix", "className", "children", "controlId", "as"];
import classNames from 'classnames';
import React, { useMemo } from 'react';
import FormContext from './FormContext';
import { useBootstrapPrefix } from './ThemeProvider';
var FormGroup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-group');
  var context = useMemo(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(className, bsPrefix)
  }), children));
});
FormGroup.displayName = 'FormGroup';
export default FormGroup;