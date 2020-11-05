export interface ModalInstance {
    dialog: Element;
    backdrop: Element;
}
export declare type ContainerState = Record<string, any> & {
    isOverflowing?: boolean;
    style?: Partial<CSSStyleDeclaration>;
    modals: ModalInstance[];
};
/**
 * Proper state management for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */
declare class ModalManager {
    readonly hideSiblingNodes: boolean;
    readonly handleContainerOverflow: boolean;
    readonly modals: ModalInstance[];
    readonly containers: HTMLElement[];
    readonly data: ContainerState[];
    readonly scrollbarSize: number;
    constructor({ hideSiblingNodes, handleContainerOverflow, }?: {
        hideSiblingNodes?: boolean | undefined;
        handleContainerOverflow?: boolean | undefined;
    });
    isContainerOverflowing(modal: ModalInstance): any;
    containerIndexFromModal(modal: ModalInstance): number;
    setContainerStyle(containerState: ContainerState, container: HTMLElement): void;
    removeContainerStyle(containerState: ContainerState, container: HTMLElement): void;
    add(modal: ModalInstance, container: HTMLElement, className?: string): number;
    remove(modal: ModalInstance): void;
    isTopModal(modal: ModalInstance): boolean;
}
export default ModalManager;
