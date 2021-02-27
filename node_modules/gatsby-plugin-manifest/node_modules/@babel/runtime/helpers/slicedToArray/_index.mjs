import arrayWithHoles from "../arrayWithHoles/_index.mjs";
import iterableToArrayLimit from "../iterableToArrayLimit/_index.mjs";
import unsupportedIterableToArray from "../unsupportedIterableToArray/_index.mjs";
import nonIterableRest from "../nonIterableRest/_index.mjs";
export default function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}