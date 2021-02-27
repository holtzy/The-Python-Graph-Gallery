var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var toPrimitive = require("@babel/runtime/helpers/toPrimitive");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;
module.exports["default"] = module.exports, module.exports.__esModule = true;