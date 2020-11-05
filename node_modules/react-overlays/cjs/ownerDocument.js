"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

var _safeFindDOMNode = _interopRequireDefault(require("./safeFindDOMNode"));

var _default = function _default(componentOrElement) {
  return (0, _ownerDocument["default"])((0, _safeFindDOMNode["default"])(componentOrElement));
};

exports["default"] = _default;
module.exports = exports.default;