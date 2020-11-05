import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _fadeStyles;

import classNames from 'classnames';
import transitionEnd from 'dom-helpers/transitionEnd';
import React, { useCallback } from 'react';
import Transition, { ENTERED, ENTERING } from 'react-transition-group/Transition';
import triggerBrowserReflow from './triggerBrowserReflow';
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[ENTERING] = 'show', _fadeStyles[ENTERED] = 'show', _fadeStyles);
var Fade = React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  var handleEnter = useCallback(function (node) {
    triggerBrowserReflow(node);
    if (props.onEnter) props.onEnter(node);
  }, [props]);
  return /*#__PURE__*/React.createElement(Transition, _extends({
    ref: ref,
    addEndListener: transitionEnd
  }, props, {
    onEnter: handleEnter
  }), function (status, innerProps) {
    return React.cloneElement(children, _extends({}, innerProps, {
      className: classNames('fade', className, children.props.className, fadeStyles[status])
    }));
  });
});
Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';
export default Fade;