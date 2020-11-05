/// <reference types="react" />
export declare type MouseEvents = {
    [K in keyof GlobalEventHandlersEventMap]: GlobalEventHandlersEventMap[K] extends MouseEvent ? K : never;
}[keyof GlobalEventHandlersEventMap];
export interface RootCloseOptions {
    disabled?: boolean;
    clickTrigger?: MouseEvents;
}
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
declare function useRootClose(ref: React.RefObject<Element> | Element | null | undefined, onRootClose: (e: Event) => void, { disabled, clickTrigger }?: RootCloseOptions): void;
export default useRootClose;
