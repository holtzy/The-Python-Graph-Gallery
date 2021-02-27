var arrayWithHoles = require("@babel/runtime/helpers/arrayWithHoles");

var iterableToArrayLimitLoose = require("@babel/runtime/helpers/iterableToArrayLimitLoose");

var unsupportedIterableToArray = require("@babel/runtime/helpers/unsupportedIterableToArray");

var nonIterableRest = require("@babel/runtime/helpers/nonIterableRest");

function _slicedToArrayLoose(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimitLoose(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArrayLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;