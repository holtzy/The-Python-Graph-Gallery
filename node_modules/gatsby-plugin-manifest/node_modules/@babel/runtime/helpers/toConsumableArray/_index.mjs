import arrayWithoutHoles from "../arrayWithoutHoles/_index.mjs";
import iterableToArray from "../iterableToArray/_index.mjs";
import unsupportedIterableToArray from "../unsupportedIterableToArray/_index.mjs";
import nonIterableSpread from "../nonIterableSpread/_index.mjs";
export default function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}