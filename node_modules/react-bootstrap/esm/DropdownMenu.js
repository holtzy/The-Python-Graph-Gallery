import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useDropdownMenu } from 'react-overlays/DropdownMenu';
import useMergedRefs from '@restart/hooks/useMergedRefs';
import warning from 'warning';
import NavbarContext from './NavbarContext';
import { useBootstrapPrefix } from './ThemeProvider';
import useWrappedRefWithWarning from './useWrappedRefWithWarning';
import usePopperMarginModifiers from './usePopperMarginModifiers';
var alignDirection = PropTypes.oneOf(['left', 'right']);
export var alignPropType = PropTypes.oneOfType([alignDirection, PropTypes.shape({
  sm: alignDirection
}), PropTypes.shape({
  md: alignDirection
}), PropTypes.shape({
  lg: alignDirection
}), PropTypes.shape({
  xl: alignDirection
})]);
var defaultProps = {
  align: 'left',
  alignRight: false,
  flip: true
}; // TODO: remove this hack

var DropdownMenu = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      align = _ref.align,
      alignRight = _ref.alignRight,
      rootCloseEvent = _ref.rootCloseEvent,
      flip = _ref.flip,
      showProps = _ref.show,
      renderOnMount = _ref.renderOnMount,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      popperConfig = _ref.popperConfig,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "align", "alignRight", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig"]);

  var isNavbar = useContext(NavbarContext);
  var prefix = useBootstrapPrefix(bsPrefix, 'dropdown-menu');

  var _usePopperMarginModif = usePopperMarginModifiers(),
      popperRef = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var alignClasses = [];

  if (align) {
    if (typeof align === 'object') {
      var keys = Object.keys(align);
      process.env.NODE_ENV !== "production" ? warning(keys.length === 1, 'There should only be 1 breakpoint when passing an object to `align`') : void 0;

      if (keys.length) {
        var brkPoint = keys[0];
        var direction = align[brkPoint]; // .dropdown-menu-right is required for responsively aligning
        // left in addition to align left classes.
        // Reuse alignRight to toggle the class below.

        alignRight = direction === 'left';
        alignClasses.push(prefix + "-" + brkPoint + "-" + direction);
      }
    } else if (align === 'right') {
      alignRight = true;
    }
  }

  var _ref2 = useDropdownMenu({
    flip: flip,
    rootCloseEvent: rootCloseEvent,
    show: showProps,
    alignEnd: alignRight,
    usePopper: !isNavbar && alignClasses.length === 0,
    popperConfig: _extends({}, popperConfig, {
      modifiers: marginModifiers.concat((popperConfig == null ? void 0 : popperConfig.modifiers) || [])
    })
  }),
      hasShown = _ref2.hasShown,
      placement = _ref2.placement,
      show = _ref2.show,
      alignEnd = _ref2.alignEnd,
      close = _ref2.close,
      menuProps = _ref2.props;

  menuProps.ref = useMergedRefs(popperRef, useMergedRefs(useWrappedRefWithWarning(ref, 'DropdownMenu'), menuProps.ref));
  if (!hasShown && !renderOnMount) return null; // For custom components provide additional, non-DOM, props;

  if (typeof Component !== 'string') {
    menuProps.show = show;
    menuProps.close = close;
    menuProps.alignRight = alignEnd;
  }

  if (placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    props.style = _extends({}, props.style, {}, menuProps.style);
    props['x-placement'] = placement;
  }

  return /*#__PURE__*/React.createElement(Component, _extends({}, props, menuProps, {
    className: classNames.apply(void 0, [className, prefix, show && 'show', alignEnd && prefix + "-right"].concat(alignClasses))
  }));
});
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
export default DropdownMenu;