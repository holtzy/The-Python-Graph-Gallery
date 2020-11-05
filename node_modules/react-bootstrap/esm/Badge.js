import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  pill: false
};
var Badge = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'span' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "variant", "pill", "className", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'badge');
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classNames(className, prefix, pill && prefix + "-pill", variant && prefix + "-" + variant)
  }));
});
Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
export default Badge;