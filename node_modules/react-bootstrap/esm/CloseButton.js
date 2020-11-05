import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
var propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
var defaultProps = {
  label: 'Close'
};
var CloseButton = React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "onClick", "className"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    type: "button",
    className: classNames('close', className),
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, label));
});
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
export default CloseButton;