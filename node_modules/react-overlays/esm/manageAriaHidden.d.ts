export declare function ariaHidden(hide: boolean, node: Element | null | undefined): void;
interface SiblingExclusions {
    dialog: Element;
    backdrop: Element;
}
export declare function hideSiblings(container: Element, { dialog, backdrop }: SiblingExclusions): void;
export declare function showSiblings(container: Element, { dialog, backdrop }: SiblingExclusions): void;
export {};
