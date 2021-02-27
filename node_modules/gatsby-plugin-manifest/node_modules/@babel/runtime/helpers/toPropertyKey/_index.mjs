import _typeof from "../typeof/_index.mjs";
import toPrimitive from "../toPrimitive/_index.mjs";
export default function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}