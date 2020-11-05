import { SyntheticEvent } from 'react';
export declare type ThrottledHandler<TEvent> = ((event: TEvent) => void) & {
    clear(): void;
};
/**
 * Creates a event handler function throttled by `requestAnimationFrame` that
 * returns the **most recent** event. Useful for noisy events that update react state.
 *
 * ```tsx
 * function Component() {
 *   const [position, setPosition] = useState();
 *   const handleMove = useThrottledEventHandler<React.PointerEvent>(
 *     (event) => {
 *       setPosition({
 *         top: event.clientX,
 *         left: event.clientY,
 *       })
 *     }
 *   )
 *
 *   return (
 *     <div onPointerMove={handleMove}>
 *        <div style={position} />
 *     </div>
 *   );
 * }
 * ```
 *
 * @param handler An event handler function
 * @typeParam TEvent The event object passed to the handler function
 * @returns The event handler with a `clear` method attached for clearing any in-flight handler calls
 *
 */
export default function useThrottledEventHandler<TEvent = SyntheticEvent>(handler: (event: TEvent) => void): ThrottledHandler<TEvent>;
