import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var CarouselItem = React.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "bsPrefix", "children", "className"]);

  var finalClassName = classNames(className, useBootstrapPrefix(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: finalClassName
  }), children);
});
CarouselItem.displayName = 'CarouselItem';
export default CarouselItem;