import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import classNames from 'classnames';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  fluid: false
};
var Jumbotron = React.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "className", "fluid", "bsPrefix"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classNames(className, classes)
  }));
});
Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';
export default Jumbotron;