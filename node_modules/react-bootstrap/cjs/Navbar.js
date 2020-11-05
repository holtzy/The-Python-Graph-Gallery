"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _uncontrollable = require("uncontrollable");

var _createWithBsPrefix = _interopRequireDefault(require("./createWithBsPrefix"));

var _NavbarBrand = _interopRequireDefault(require("./NavbarBrand"));

var _NavbarCollapse = _interopRequireDefault(require("./NavbarCollapse"));

var _NavbarToggle = _interopRequireDefault(require("./NavbarToggle"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var _SelectableContext = _interopRequireDefault(require("./SelectableContext"));

var NavbarText = (0, _createWithBsPrefix.default)('navbar-text', {
  Component: 'span'
});
var defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar = _react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    expanded: 'onToggle'
  }),
      initialBsPrefix = _useUncontrolled.bsPrefix,
      expand = _useUncontrolled.expand,
      variant = _useUncontrolled.variant,
      bg = _useUncontrolled.bg,
      fixed = _useUncontrolled.fixed,
      sticky = _useUncontrolled.sticky,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'nav' : _useUncontrolled$as,
      expanded = _useUncontrolled.expanded,
      _onToggle = _useUncontrolled.onToggle,
      onSelect = _useUncontrolled.onSelect,
      collapseOnSelect = _useUncontrolled.collapseOnSelect,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]);

  var bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(initialBsPrefix, 'navbar');
  var handleCollapse = (0, _react.useCallback)(function () {
    if (onSelect) onSelect.apply(void 0, arguments);

    if (collapseOnSelect && expanded) {
      if (_onToggle) {
        _onToggle(false);
      }
    }
  }, [onSelect, collapseOnSelect, expanded, _onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  var expandClass = bsPrefix + "-expand";
  if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
  var navbarContext = (0, _react.useMemo)(function () {
    return {
      onToggle: function onToggle() {
        return _onToggle && _onToggle(!expanded);
      },
      bsPrefix: bsPrefix,
      expanded: !!expanded
    };
  }, [bsPrefix, expanded, _onToggle]);
  return /*#__PURE__*/_react.default.createElement(_NavbarContext.default.Provider, {
    value: navbarContext
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: handleCollapse
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    className: (0, _classnames.default)(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
  }), children)));
});

Navbar.defaultProps = defaultProps;
Navbar.displayName = 'Navbar';
Navbar.Brand = _NavbarBrand.default;
Navbar.Toggle = _NavbarToggle.default;
Navbar.Collapse = _NavbarCollapse.default;
Navbar.Text = NavbarText;
var _default = Navbar;
exports.default = _default;
module.exports = exports["default"];