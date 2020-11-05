import invariant from 'invariant';
import { useCallback } from 'react';
import useMergedRefs from '@restart/hooks/useMergedRefs';
export default function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (!(process.env.NODE_ENV !== "production")) return ref; // eslint-disable-next-line react-hooks/rules-of-hooks

  var warningRef = useCallback(function (refValue) {
    !(refValue == null || !refValue.isReactComponent) ? process.env.NODE_ENV !== "production" ? invariant(false, componentName + " injected a ref to a provided `as` component that resolved to a component instance instead of a DOM element. " + 'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element') : invariant(false) : void 0;
  }, [componentName]); // eslint-disable-next-line react-hooks/rules-of-hooks

  return useMergedRefs(warningRef, ref);
}