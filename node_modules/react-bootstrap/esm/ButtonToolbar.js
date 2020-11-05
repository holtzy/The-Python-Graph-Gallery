import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  role: 'toolbar'
};
var ButtonToolbar = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'btn-toolbar');
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    ref: ref,
    className: classNames(className, prefix)
  }));
});
ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = defaultProps;
export default ButtonToolbar;