"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = useWrappedRefWithWarning;

var _invariant = _interopRequireDefault(require("invariant"));

var _react = require("react");

var _useMergedRefs = _interopRequireDefault(require("@restart/hooks/useMergedRefs"));

function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (!(process.env.NODE_ENV !== "production")) return ref; // eslint-disable-next-line react-hooks/rules-of-hooks

  var warningRef = (0, _react.useCallback)(function (refValue) {
    !(refValue == null || !refValue.isReactComponent) ? process.env.NODE_ENV !== "production" ? (0, _invariant.default)(false, componentName + " injected a ref to a provided `as` component that resolved to a component instance instead of a DOM element. " + 'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element') : invariant(false) : void 0;
  }, [componentName]); // eslint-disable-next-line react-hooks/rules-of-hooks

  return (0, _useMergedRefs.default)(warningRef, ref);
}

module.exports = exports["default"];