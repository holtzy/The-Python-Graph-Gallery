"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.alignPropType = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _DropdownMenu = require("react-overlays/DropdownMenu");

var _useMergedRefs = _interopRequireDefault(require("@restart/hooks/useMergedRefs"));

var _warning = _interopRequireDefault(require("warning"));

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var _ThemeProvider = require("./ThemeProvider");

var _useWrappedRefWithWarning = _interopRequireDefault(require("./useWrappedRefWithWarning"));

var _usePopperMarginModifiers = _interopRequireDefault(require("./usePopperMarginModifiers"));

var alignDirection = _propTypes.default.oneOf(['left', 'right']);

var alignPropType = _propTypes.default.oneOfType([alignDirection, _propTypes.default.shape({
  sm: alignDirection
}), _propTypes.default.shape({
  md: alignDirection
}), _propTypes.default.shape({
  lg: alignDirection
}), _propTypes.default.shape({
  xl: alignDirection
})]);

exports.alignPropType = alignPropType;
var defaultProps = {
  align: 'left',
  alignRight: false,
  flip: true
}; // TODO: remove this hack

var DropdownMenu = _react.default.forwardRef(function (_ref, ref) {
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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "align", "alignRight", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig"]);
  var isNavbar = (0, _react.useContext)(_NavbarContext.default);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-menu');

  var _usePopperMarginModif = (0, _usePopperMarginModifiers.default)(),
      popperRef = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var alignClasses = [];

  if (align) {
    if (typeof align === 'object') {
      var keys = Object.keys(align);
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(keys.length === 1, 'There should only be 1 breakpoint when passing an object to `align`') : void 0;

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

  var _ref2 = (0, _DropdownMenu.useDropdownMenu)({
    flip: flip,
    rootCloseEvent: rootCloseEvent,
    show: showProps,
    alignEnd: alignRight,
    usePopper: !isNavbar && alignClasses.length === 0,
    popperConfig: (0, _extends2.default)({}, popperConfig, {
      modifiers: marginModifiers.concat((popperConfig == null ? void 0 : popperConfig.modifiers) || [])
    })
  }),
      hasShown = _ref2.hasShown,
      placement = _ref2.placement,
      show = _ref2.show,
      alignEnd = _ref2.alignEnd,
      close = _ref2.close,
      menuProps = _ref2.props;

  menuProps.ref = (0, _useMergedRefs.default)(popperRef, (0, _useMergedRefs.default)((0, _useWrappedRefWithWarning.default)(ref, 'DropdownMenu'), menuProps.ref));
  if (!hasShown && !renderOnMount) return null; // For custom components provide additional, non-DOM, props;

  if (typeof Component !== 'string') {
    menuProps.show = show;
    menuProps.close = close;
    menuProps.alignRight = alignEnd;
  }

  if (placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    props.style = (0, _extends2.default)({}, props.style, {}, menuProps.style);
    props['x-placement'] = placement;
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, menuProps, {
    className: _classnames.default.apply(void 0, [className, prefix, show && 'show', alignEnd && prefix + "-right"].concat(alignClasses))
  }));
});

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
var _default = DropdownMenu;
exports.default = _default;