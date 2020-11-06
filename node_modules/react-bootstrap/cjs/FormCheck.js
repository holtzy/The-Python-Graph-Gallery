"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _all = _interopRequireDefault(require("prop-types-extra/lib/all"));

var _react = _interopRequireWildcard(require("react"));

var _Feedback = _interopRequireDefault(require("./Feedback"));

var _FormCheckInput = _interopRequireDefault(require("./FormCheckInput"));

var _FormCheckLabel = _interopRequireDefault(require("./FormCheckLabel"));

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _ThemeProvider = require("./ThemeProvider");

var FormCheck = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$feedbackTooltip = _ref.feedbackTooltip,
      feedbackTooltip = _ref$feedbackTooltip === void 0 ? false : _ref$feedbackTooltip,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      label = _ref.label,
      children = _ref.children,
      propCustom = _ref.custom,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"]);
  var custom = type === 'switch' ? true : propCustom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control'] : [bsPrefix, 'form-check'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var innerFormContext = (0, _react.useMemo)(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = custom || label != null && label !== false && !children;

  var input = /*#__PURE__*/_react.default.createElement(_FormCheckInput.default, (0, _extends2.default)({}, props, {
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled,
    as: as
  }));

  return /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: innerFormContext
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: (0, _classnames.default)(className, bsPrefix, custom && "custom-" + type, inline && bsPrefix + "-inline")
  }, children || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, input, hasLabel && /*#__PURE__*/_react.default.createElement(_FormCheckLabel.default, {
    title: title
  }, label), (isValid || isInvalid) && /*#__PURE__*/_react.default.createElement(_Feedback.default, {
    type: isValid ? 'valid' : 'invalid',
    tooltip: feedbackTooltip
  }, feedback))));
});

FormCheck.displayName = 'FormCheck';
FormCheck.Input = _FormCheckInput.default;
FormCheck.Label = _FormCheckLabel.default;
var _default = FormCheck;
exports.default = _default;
module.exports = exports["default"];