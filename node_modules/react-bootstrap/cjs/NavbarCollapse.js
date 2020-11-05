"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var NavbarCollapse = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "bsPrefix"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-collapse');
  return /*#__PURE__*/_react.default.createElement(_NavbarContext.default.Consumer, null, function (context) {
    return /*#__PURE__*/_react.default.createElement(_Collapse.default, (0, _extends2.default)({
      in: !!(context && context.expanded)
    }, props), /*#__PURE__*/_react.default.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});

NavbarCollapse.displayName = 'NavbarCollapse';
var _default = NavbarCollapse;
exports.default = _default;
module.exports = exports["default"];