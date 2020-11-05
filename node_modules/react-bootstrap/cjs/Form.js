"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _FormCheck = _interopRequireDefault(require("./FormCheck"));

var _FormFile = _interopRequireDefault(require("./FormFile"));

var _FormControl = _interopRequireDefault(require("./FormControl"));

var _FormGroup = _interopRequireDefault(require("./FormGroup"));

var _FormLabel = _interopRequireDefault(require("./FormLabel"));

var _FormText = _interopRequireDefault(require("./FormText"));

var _Switch = _interopRequireDefault(require("./Switch"));

var _ThemeProvider = require("./ThemeProvider");

var _createWithBsPrefix = _interopRequireDefault(require("./createWithBsPrefix"));

var FormRow = (0, _createWithBsPrefix.default)('form-row');
var defaultProps = {
  inline: false
};

var FormImpl = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'form' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});

FormImpl.displayName = 'Form';
FormImpl.defaultProps = defaultProps;
FormImpl.Row = FormRow;
FormImpl.Group = _FormGroup.default;
FormImpl.Control = _FormControl.default;
FormImpl.Check = _FormCheck.default;
FormImpl.File = _FormFile.default;
FormImpl.Switch = _Switch.default;
FormImpl.Label = _FormLabel.default;
FormImpl.Text = _FormText.default;
var _default = FormImpl;
exports.default = _default;
module.exports = exports["default"];