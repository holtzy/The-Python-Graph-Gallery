import { useState } from 'react';
import useStableMemo from './useStableMemo';
import useEffect from './useIsomorphicEffect';
import useEventCallback from './useEventCallback';
/**
 * Setup an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) on
 * a DOM Element that returns it's entries as they arrive.
 *
 * @param element The DOM element to observe
 * @param init IntersectionObserver options
 */

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

  var _useState = useState(null),
      entries = _useState[0],
      setEntry = _useState[1];

  var handler = useEventCallback(callback || setEntry);
  var observer = useStableMemo(function () {
    return typeof IntersectionObserver !== 'undefined' && new IntersectionObserver(handler, {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin
    });
  }, [handler, root, rootMargin, threshold && JSON.stringify(threshold)]);
  useEffect(function () {
    if (!element || !observer) return;
    observer.observe(element);
    return function () {
      observer.unobserve(element);
    };
  }, [observer, element]);
  return callback ? undefined : entries || [];
}

export default useIntersectionObserver;