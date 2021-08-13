/**
 * Setup an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) on
 * a DOM Element that returns it's entries as they arrive.
 *
 * @param element The DOM element to observe
 * @param init IntersectionObserver options
 */
declare function useIntersectionObserver<TElement extends Element>(element: TElement | null | undefined, options: IntersectionObserverInit): IntersectionObserverEntry[];
/**
 * Setup an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) on
 * a DOM Element. This overload does not trigger component updates when receiving new
 * entries. This allows for finer grained performance optimizations by the consumer.
 *
 * @param element The DOM element to observe
 * @param callback A listener for intersection updates.
 * @param init IntersectionObserver options
 */
declare function useIntersectionObserver<TElement extends Element>(element: TElement | null | undefined, callback: IntersectionObserverCallback, options: IntersectionObserverInit): void;
export default useIntersectionObserver;
