import arrayWithHoles from "../arrayWithHoles/_index.mjs";
import iterableToArrayLimitLoose from "../iterableToArrayLimitLoose/_index.mjs";
import unsupportedIterableToArray from "../unsupportedIterableToArray/_index.mjs";
import nonIterableRest from "../nonIterableRest/_index.mjs";
export default function _slicedToArrayLoose(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimitLoose(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}