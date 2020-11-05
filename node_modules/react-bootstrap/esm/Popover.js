import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import { useBootstrapPrefix } from './ThemeProvider';
import PopoverTitle from './PopoverTitle';
import PopoverContent from './PopoverContent';
var defaultProps = {
  placement: 'right'
};
var Popover = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      content = _ref.content,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _1 = _ref.show,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "placement", "className", "style", "children", "content", "arrowProps", "popper", "show"]);

  var decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'popover');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    role: "tooltip",
    style: style,
    "x-placement": primaryPlacement,
    className: classNames(className, decoratedBsPrefix, primaryPlacement && "bs-popover-" + primaryPlacement)
  }, props), /*#__PURE__*/React.createElement("div", _extends({
    className: "arrow"
  }, arrowProps)), content ? /*#__PURE__*/React.createElement(PopoverContent, null, children) : children);
});
Popover.defaultProps = defaultProps;
Popover.Title = PopoverTitle;
Popover.Content = PopoverContent;
export default Popover;