import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["bsPrefix", "className", "children", "aspectRatio"];
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  aspectRatio: '1by1'
};
var ResponsiveEmbed = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      aspectRatio = _ref.aspectRatio,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'embed-responsive');
  var child = React.Children.only(children);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref
  }, props, {
    className: classNames(decoratedBsPrefix, className, aspectRatio && decoratedBsPrefix + "-" + aspectRatio)
  }), /*#__PURE__*/React.cloneElement(child, {
    className: classNames(child.props.className, decoratedBsPrefix + "-item")
  }));
});
ResponsiveEmbed.defaultProps = defaultProps;
export default ResponsiveEmbed;