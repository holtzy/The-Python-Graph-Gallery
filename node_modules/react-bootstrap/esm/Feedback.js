import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: PropTypes.string,

  /** Display feedback as a tooltip. */
  tooltip: PropTypes.bool,
  as: PropTypes.elementType
};
var Feedback = React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'valid' : _ref$type,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "className", "type", "tooltip"]);

  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(className, type + "-" + (tooltip ? 'tooltip' : 'feedback'))
  }));
});
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
export default Feedback;