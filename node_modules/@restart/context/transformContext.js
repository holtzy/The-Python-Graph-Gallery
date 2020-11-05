"use strict";

exports.__esModule = true;
exports.default = transformContext;

var _react = _interopRequireDefault(require("react"));

var _forwardRef = _interopRequireDefault(require("./forwardRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformContext(Context) {
  return (0, _forwardRef.default)(function (props) {
    return _react.default.createElement(Context.Consumer, null, function (context) {
      return _react.default.createElement(Context.Provider, {
        value: props.mapToValue(context)
      }, props.children);
    });
  }, {
    displayName: 'ContextTransformer'
  });
}