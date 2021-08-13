import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["bsPrefix", "closeLabel", "closeButton", "className", "children"];
import classNames from 'classnames';
import React, { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';
import { useBootstrapPrefix } from './ThemeProvider';
import CloseButton from './CloseButton';
import ToastContext from './ToastContext';
var defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};
var ToastHeader = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast-header');
  var context = useContext(ToastContext);
  var handleClick = useEventCallback(function (e) {
    if (context && context.onClose) {
      context.onClose(e);
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref
  }, props, {
    className: classNames(bsPrefix, className)
  }), children, closeButton && /*#__PURE__*/React.createElement(CloseButton, {
    label: closeLabel,
    onClick: handleClick,
    className: "ml-2 mb-1",
    "data-dismiss": "toast"
  }));
});
ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps;
export default ToastHeader;