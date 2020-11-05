import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import all from 'prop-types-extra/lib/all';
import Feedback from './Feedback';
import FormFileInput from './FormFileInput';
import FormFileLabel from './FormFileLabel';
import FormContext from './FormContext';
import { useBootstrapPrefix } from './ThemeProvider';
var FormFile = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
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
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      lang = _ref.lang,
      dataBrowse = _ref['data-browse'],
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$inputAs = _ref.inputAs,
      inputAs = _ref$inputAs === void 0 ? 'input' : _ref$inputAs,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"]);

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = useBootstrapPrefix(prefix, defaultPrefix);
  var type = 'file';

  var _useContext = useContext(FormContext),
      controlId = _useContext.controlId;

  var innerFormContext = useMemo(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;
  var input = /*#__PURE__*/React.createElement(FormFileInput, _extends({}, props, {
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: inputAs,
    lang: lang
  }));
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: innerFormContext
  }, /*#__PURE__*/React.createElement(Component, {
    style: style,
    className: classNames(className, bsPrefix, custom && "custom-" + type)
  }, children || /*#__PURE__*/React.createElement(React.Fragment, null, custom ? /*#__PURE__*/React.createElement(React.Fragment, null, input, hasLabel && /*#__PURE__*/React.createElement(FormFileLabel, {
    "data-browse": dataBrowse
  }, label)) : /*#__PURE__*/React.createElement(React.Fragment, null, hasLabel && /*#__PURE__*/React.createElement(FormFileLabel, null, label), input), (isValid || isInvalid) && /*#__PURE__*/React.createElement(Feedback, {
    type: isValid ? 'valid' : 'invalid',
    tooltip: feedbackTooltip
  }, feedback))));
});
FormFile.displayName = 'FormFile';
FormFile.Input = FormFileInput;
FormFile.Label = FormFileLabel;
export default FormFile;