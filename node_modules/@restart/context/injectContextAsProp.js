"use strict";

exports.__esModule = true;
exports.default = void 0;

var _mapContextToProps = _interopRequireDefault(require("./mapContextToProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(Context, prop, Component) {
  return (0, _mapContextToProps.default)(Context, function (context) {
    var _ref;

    return _ref = {}, _ref[prop] = context, _ref;
  }, Component);
};

exports.default = _default;