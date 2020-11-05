import React from 'react';
import PropTypes from 'prop-types';
import { OverlayProps as BaseOverlayProps } from 'react-overlays/Overlay';
import { TransitionType } from './helpers';
export declare type Placement = import('react-overlays/usePopper').Placement;
export declare type ArrowProps = {
    ref: React.RefCallback<HTMLElement>;
    style: React.CSSProperties;
};
export interface OverlayInjectedProps {
    ref: React.RefCallback<HTMLElement>;
    style: React.CSSProperties;
    'aria-labelledby'?: string;
    arrowProps: ArrowProps;
    show: boolean;
    placement: Placement;
    popper: {
        state: any;
        outOfBoundaries: boolean;
        placement: Placement;
        scheduleUpdate: () => void;
    };
    [prop: string]: any;
}
export declare type OverlayChildren = React.ReactElement<OverlayInjectedProps> | ((injected: OverlayInjectedProps) => React.ReactNode);
export interface OverlayProps extends Omit<BaseOverlayProps, 'children' | 'transition'> {
    children: OverlayChildren;
    transition?: TransitionType;
    placement?: Placement;
}
declare function Overlay({ children: overlay, transition, popperConfig, ...outerProps }: OverlayProps): JSX.Element;
declare namespace Overlay {
    var propTypes: {
        /**
         * A component instance, DOM node, or function that returns either.
         * The `container` element will have the Overlay appended to it via a React portal.
         */
        container: PropTypes.Requireable<any>;
        /**
         * A component instance, DOM node, or function that returns either.
         * The overlay will be positioned in relation to the `target`
         */
        target: PropTypes.Requireable<any>;
        /**
         * Set the visibility of the Overlay
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * A set of popper options and props passed directly to Popper.
         */
        popperConfig: PropTypes.Requireable<object>;
        /**
         * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
         */
        rootClose: PropTypes.Requireable<boolean>;
        /**
         * Specify event for triggering a "root close" toggle.
         */
        rootCloseEvent: PropTypes.Requireable<string>;
        /**
         * A callback invoked by the overlay when it wishes to be hidden. Required if
         * `rootClose` is specified.
         */
        onHide: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Animate the entering and exiting of the Overlay. `true` will use the `<Fade>` transition,
         * or a custom react-transition-group `<Transition>` component can be provided.
         */
        transition: PropTypes.Requireable<any>;
        /**
         * Callback fired before the Overlay transitions in
         */
        onEnter: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Callback fired as the Overlay begins to transition in
         */
        onEntering: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Callback fired after the Overlay finishes transitioning in
         */
        onEntered: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Callback fired right before the Overlay transitions out
         */
        onExit: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Callback fired as the Overlay begins to transition out
         */
        onExiting: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Callback fired after the Overlay finishes transitioning out
         */
        onExited: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * The placement of the Overlay in relation to it's `target`.
         */
        placement: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        transition: React.ForwardRefExoticComponent<Pick<import("./Fade").FadeProps, React.ReactText> & React.RefAttributes<import("react-transition-group/Transition").default<any>>>;
        rootClose: boolean;
        show: boolean;
        placement: string;
    };
}
export default Overlay;
