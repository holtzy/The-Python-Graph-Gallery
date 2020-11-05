import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var ModalDialog = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      centered = _ref.centered,
      size = _ref.size,
      children = _ref.children,
      scrollable = _ref.scrollable,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "centered", "size", "children", "scrollable"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
  var dialogClass = bsPrefix + "-dialog";
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    ref: ref,
    className: classNames(dialogClass, className, size && bsPrefix + "-" + size, centered && dialogClass + "-centered", scrollable && dialogClass + "-scrollable")
  }), /*#__PURE__*/React.createElement("div", {
    className: bsPrefix + "-content"
  }, children));
});
ModalDialog.displayName = 'ModalDialog';
export default ModalDialog;