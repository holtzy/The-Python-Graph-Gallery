import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["className"];
import classNames from 'classnames';
import React from 'react';
import Image, { propTypes as imagePropTypes } from './Image';
var defaultProps = {
  fluid: true
};
var FigureImage = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Image, _extends({
    ref: ref
  }, props, {
    className: classNames(className, 'figure-img')
  }));
});
FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = imagePropTypes;
FigureImage.defaultProps = defaultProps;
export default FigureImage;