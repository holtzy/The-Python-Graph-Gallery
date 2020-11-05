import React from 'react';
import ModalManager from './ModalManager';
import { DOMContainer } from './useWaitForDOMRef';
import { TransitionCallbacks } from './types';
export declare type ModalTransitionComponent = React.ComponentType<{
    in: boolean;
    appear?: boolean;
    unmountOnExit?: boolean;
} & TransitionCallbacks>;
export interface RenderModalDialogProps {
    style: React.CSSProperties | undefined;
    className: string | undefined;
    tabIndex: number;
    role: string;
    ref: React.RefCallback<Element>;
    'aria-modal': boolean | undefined;
}
export interface RenderModalBackdropProps {
    ref: React.RefCallback<Element>;
    onClick: (event: React.SyntheticEvent) => void;
}
export interface ModalProps extends TransitionCallbacks {
    children?: React.ReactElement;
    role?: string;
    style?: React.CSSProperties;
    className?: string;
    show?: boolean;
    container?: DOMContainer;
    onShow?: () => void;
    onHide?: () => void;
    manager?: ModalManager;
    backdrop?: true | false | 'static';
    renderDialog?: (props: RenderModalDialogProps) => React.ReactNode;
    renderBackdrop?: (props: RenderModalBackdropProps) => React.ReactNode;
    onEscapeKeyDown?: (e: KeyboardEvent) => void;
    onBackdropClick?: (e: React.SyntheticEvent) => void;
    containerClassName?: string;
    keyboard?: boolean;
    transition?: ModalTransitionComponent;
    backdropTransition?: ModalTransitionComponent;
    autoFocus?: boolean;
    enforceFocus?: boolean;
    restoreFocus?: boolean;
    restoreFocusOptions?: {
        preventScroll: boolean;
    };
    [other: string]: any;
}
export interface ModalHandle {
    dialog: HTMLElement | null;
    backdrop: HTMLElement | null;
}
declare const _default: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<ModalHandle>> & {
    Manager: typeof ModalManager;
};
export default _default;
