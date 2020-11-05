"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BsPrefixComponent = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var BsPrefixComponent = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(BsPrefixComponent, _React$Component);

  function BsPrefixComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  return BsPrefixComponent;
}(_react.default.Component); // Need to use this instead of typeof Component to get proper type checking.


exports.BsPrefixComponent = BsPrefixComponent;