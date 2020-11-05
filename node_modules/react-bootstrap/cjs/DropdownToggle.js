"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isRequiredForA11y = _interopRequireDefault(require("prop-types-extra/lib/isRequiredForA11y"));

var _react = _interopRequireDefault(require("react"));

var _DropdownToggle = require("react-overlays/DropdownToggle");

var _useMergedRefs = _interopRequireDefault(require("@restart/hooks/useMergedRefs"));

var _Button = _interopRequireDefault(require("./Button"));

var _ThemeProvider = require("./ThemeProvider");

var _useWrappedRefWithWarning = _interopRequireDefault(require("./useWrappedRefWithWarning"));

var DropdownToggle = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      split = _ref.split,
      className = _ref.className,
      children = _ref.children,
      childBsPrefix = _ref.childBsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? _Button.default : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "split", "className", "children", "childBsPrefix", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-toggle');

  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }

  var _useDropdownToggle = (0, _DropdownToggle.useDropdownToggle)(),
      toggleProps = _useDropdownToggle[0],
      toggle = _useDropdownToggle[1].toggle;

  toggleProps.ref = (0, _useMergedRefs.default)(toggleProps.ref, (0, _useWrappedRefWithWarning.default)(ref, 'DropdownToggle')); // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    onClick: toggle,
    className: (0, _classnames.default)(className, prefix, split && prefix + "-split")
  }, toggleProps, props), children);
});

DropdownToggle.displayName = 'DropdownToggle';
var _default = DropdownToggle;
exports.default = _default;
module.exports = exports["default"];