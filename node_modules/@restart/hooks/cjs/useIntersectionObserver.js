"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _useStableMemo = _interopRequireDefault(require("./useStableMemo"));

var _useIsomorphicEffect = _interopRequireDefault(require("./useIsomorphicEffect"));

var _useEventCallback = _interopRequireDefault(require("./useEventCallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useIntersectionObserver(element, callbackOrOptions, maybeOptions) {
  var callback;
  var options;

  if (typeof callbackOrOptions === 'function') {
    callback = callbackOrOptions;
    options = maybeOptions || {};
  } else {
    options = callbackOrOptions || {};
  }

  var _options = options,
      threshold = _options.threshold,
      root = _options.root,
      rootMargin = _options.rootMargin;

  var _useState = (0, _react.useState)(null),
      entries = _useState[0],
      setEntry = _useState[1];

  var handler = (0, _useEventCallback.default)(callback || setEntry);
  var observer = (0, _useStableMemo.default)(function () {
    return typeof IntersectionObserver !== 'undefined' && new IntersectionObserver(handler, {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin
    });
  }, [handler, root, rootMargin, threshold && JSON.stringify(threshold)]);
  (0, _useIsomorphicEffect.default)(function () {
    if (!element || !observer) return;
    observer.observe(element);
    return function () {
      observer.unobserve(element);
    };
  }, [observer, element]);
  return callback ? undefined : entries || [];
}

var _default = useIntersectionObserver;
exports.default = _default;