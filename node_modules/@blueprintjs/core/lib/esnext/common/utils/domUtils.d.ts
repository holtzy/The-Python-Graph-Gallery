/// <reference types="react" />
export declare function elementIsOrContains(element: HTMLElement, testElement: HTMLElement): boolean;
/**
 * Throttle an event on an EventTarget by wrapping it in a
 * `requestAnimationFrame` call. Returns the event handler that was bound to
 * given eventName so you can clean up after yourself.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
export declare function throttleEvent(target: EventTarget, eventName: string, newEventName: string): (event: Event) => void;
export interface IThrottledReactEventOptions {
    preventDefault?: boolean;
}
/**
 * Throttle a callback by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 * @see https://www.html5rocks.com/en/tutorials/speed/animations/
 */
export declare function throttleReactEventCallback<E extends React.SyntheticEvent = React.SyntheticEvent>(callback: (event: E, ...otherArgs: any[]) => any, options?: IThrottledReactEventOptions): (event2: E) => void;
/**
 * Throttle a method by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 */
export declare function throttle<T extends Function>(method: T): T;
