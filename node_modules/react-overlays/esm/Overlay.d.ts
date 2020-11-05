import React from 'react';
import { Placement, UsePopperOptions, Offset, State } from './usePopper';
import { RootCloseOptions } from './useRootClose';
import { DOMContainer } from './useWaitForDOMRef';
import { TransitionCallbacks } from './types';
export interface OverlayProps extends TransitionCallbacks {
    flip?: boolean;
    placement?: Placement;
    offset?: Offset;
    containerPadding?: number;
    popperConfig?: Omit<UsePopperOptions, 'placement'>;
    container?: DOMContainer;
    target: DOMContainer;
    show?: boolean;
    transition?: React.ComponentType<{
        in?: boolean;
        appear?: boolean;
    } & TransitionCallbacks>;
    onHide?: (e: Event) => void;
    rootClose?: boolean;
    rootCloseDisabled?: boolean;
    rootCloseEvent?: RootCloseOptions['clickTrigger'];
    children: (value: {
        show: boolean;
        placement: Placement;
        update: () => void;
        forceUpdate: () => void;
        state?: State;
        props: Record<string, any> & {
            ref: React.RefCallback<HTMLElement>;
            style: React.CSSProperties;
            'aria-labelledby'?: string;
        };
        arrowProps: Record<string, any> & {
            ref: React.RefCallback<HTMLElement>;
            style: React.CSSProperties;
        };
    }) => React.ReactNode;
}
/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
declare const Overlay: React.ForwardRefExoticComponent<OverlayProps & React.RefAttributes<HTMLElement>>;
export default Overlay;
