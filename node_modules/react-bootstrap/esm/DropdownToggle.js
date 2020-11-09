import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import React from 'react';
import { useDropdownToggle } from 'react-overlays/DropdownToggle';
import useMergedRefs from '@restart/hooks/useMergedRefs';
import Button from './Button';
import { useBootstrapPrefix } from './ThemeProvider';
import useWrappedRefWithWarning from './useWrappedRefWithWarning';
var DropdownToggle = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      split = _ref.split,
      className = _ref.className,
      childBsPrefix = _ref.childBsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? Button : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "split", "className", "childBsPrefix", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'dropdown-toggle');

  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }

  var _useDropdownToggle = useDropdownToggle(),
      toggleProps = _useDropdownToggle[0],
      toggle = _useDropdownToggle[1].toggle;

  toggleProps.ref = useMergedRefs(toggleProps.ref, useWrappedRefWithWarning(ref, 'DropdownToggle')); // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.

  return /*#__PURE__*/React.createElement(Component, _extends({
    onClick: toggle,
    className: classNames(className, prefix, split && prefix + "-split")
  }, toggleProps, props));
});
DropdownToggle.displayName = 'DropdownToggle';
export default DropdownToggle;