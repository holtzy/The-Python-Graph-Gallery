"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = safeFindDOMNode;

var _reactDom = _interopRequireDefault(require("react-dom"));

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return _reactDom["default"].findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

module.exports = exports.default;