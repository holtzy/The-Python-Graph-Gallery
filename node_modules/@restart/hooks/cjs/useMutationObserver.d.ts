/**
 * Observe mutations on a DOM node or tree of DOM nodes.
 * Depends on the `MutationObserver` api.
 *
 * ```tsx
 * const [element, attachRef] = useCallbackRef(null);
 *
 * useMutationObserver(element, { subtree: true }, (records) => {
 *
 * });
 *
 * return (
 *   <div ref={attachRef} />
 * )
 * ```
 *
 * @param element The DOM element to observe
 * @param config The observer configuration
 * @param callback A callback fired when a mutation occurs
 */
declare function useMutationObserver(element: Element | null | undefined, config: MutationObserverInit, callback: MutationCallback): void;
/**
 * Observe mutations on a DOM node or tree of DOM nodes.
 * use a `MutationObserver` and return records as the are received.
 *
 * ```tsx
 * const [element, attachRef] = useCallbackRef(null);
 *
 * const records = useMutationObserver(element, { subtree: true });
 *
 * return (
 *   <div ref={attachRef} />
 * )
 * ```
 *
 * @param element The DOM element to observe
 * @param config The observer configuration
 */
declare function useMutationObserver(element: Element | null | undefined, config: MutationObserverInit): MutationRecord[];
export default useMutationObserver;
