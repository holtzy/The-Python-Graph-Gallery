import _typeof from "../typeof/_index.mjs";
import assertThisInitialized from "../assertThisInitialized/_index.mjs";
export default function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}