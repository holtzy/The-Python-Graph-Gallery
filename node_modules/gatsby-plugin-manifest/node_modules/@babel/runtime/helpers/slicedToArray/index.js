var arrayWithHoles = require("@babel/runtime/helpers/arrayWithHoles");

var iterableToArrayLimit = require("@babel/runtime/helpers/iterableToArrayLimit");

var unsupportedIterableToArray = require("@babel/runtime/helpers/unsupportedIterableToArray");

var nonIterableRest = require("@babel/runtime/helpers/nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;