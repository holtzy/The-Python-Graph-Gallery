"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _useWaitForDOMRef = _interopRequireDefault(require("./useWaitForDOMRef"));

var propTypes = {
  /**
   * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes["default"].any,
  onRendered: _propTypes["default"].func
};

/**
 * @public
 */
var Portal = function Portal(_ref) {
  var container = _ref.container,
      children = _ref.children,
      onRendered = _ref.onRendered;
  var resolvedContainer = (0, _useWaitForDOMRef["default"])(container, onRendered);
  return resolvedContainer ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_reactDom["default"].createPortal(children, resolvedContainer)) : null;
};

Portal.displayName = 'Portal';
Portal.propTypes = propTypes;
var _default = Portal;
exports["default"] = _default;
module.exports = exports.default;