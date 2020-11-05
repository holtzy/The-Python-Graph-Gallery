"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _AccordionContext = _interopRequireDefault(require("./AccordionContext"));

var AccordionCollapse = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "eventKey"]);
  var contextEventKey = (0, _react.useContext)(_AccordionContext.default);
  return /*#__PURE__*/_react.default.createElement(_Collapse.default, (0, _extends2.default)({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), /*#__PURE__*/_react.default.createElement("div", null, _react.default.Children.only(children)));
});

AccordionCollapse.displayName = 'AccordionCollapse';
var _default = AccordionCollapse;
exports.default = _default;
module.exports = exports["default"];