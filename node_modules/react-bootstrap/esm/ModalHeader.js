import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React, { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';
import { useBootstrapPrefix } from './ThemeProvider';
import CloseButton from './CloseButton';
import ModalContext from './ModalContext';
var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var ModalHeader = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      onHide = _ref.onHide,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-header');
  var context = useContext(ModalContext);
  var handleClick = useEventCallback(function () {
    if (context) context.onHide();
    if (onHide) onHide();
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref
  }, props, {
    className: classNames(className, bsPrefix)
  }), children, closeButton && /*#__PURE__*/React.createElement(CloseButton, {
    label: closeLabel,
    onClick: handleClick
  }));
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps;
export default ModalHeader;