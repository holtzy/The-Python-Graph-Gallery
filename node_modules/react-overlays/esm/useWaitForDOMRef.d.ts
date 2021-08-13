/// <reference types="react" />
export declare type DOMContainer<T extends HTMLElement = HTMLElement> = T | React.RefObject<T> | null | (() => T | React.RefObject<T> | null);
export declare const resolveContainerRef: <T extends HTMLElement>(ref: DOMContainer<T> | undefined) => HTMLBodyElement | T | null;
export default function useWaitForDOMRef<T extends HTMLElement = HTMLElement>(ref: DOMContainer<T> | undefined, onResolved?: (element: T | HTMLBodyElement) => void): HTMLBodyElement | T | null;
