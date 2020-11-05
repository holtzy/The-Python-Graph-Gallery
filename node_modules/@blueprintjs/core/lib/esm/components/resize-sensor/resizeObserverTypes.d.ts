/** This file contains types duplicated from resize-observer-polyfill which are not exported in a consumer-friendly way. */
/** Equivalent to `ResizeObserverEntry` */
export interface IResizeEntry {
    /** Measured dimensions of the target. */
    readonly contentRect: IDOMRectReadOnly;
    /** The resized element. */
    readonly target: Element;
}
interface IDOMRectReadOnly {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
}
export {};
