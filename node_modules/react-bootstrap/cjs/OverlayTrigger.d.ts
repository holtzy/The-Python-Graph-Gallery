import PropTypes from 'prop-types';
import React from 'react';
import { OverlayChildren, OverlayProps } from './Overlay';
export declare type OverlayTriggerType = 'hover' | 'click' | 'focus';
export declare type OverlayDelay = number | {
    show: number;
    hide: number;
};
export declare type OverlayInjectedProps = {
    onFocus?: (...args: any[]) => any;
};
export declare type OverlayTriggerRenderProps = OverlayInjectedProps & {
    ref: React.Ref<any>;
};
export interface OverlayTriggerProps extends Omit<OverlayProps, 'children' | 'target'> {
    children: React.ReactElement | ((props: OverlayTriggerRenderProps) => React.ReactNode);
    trigger?: OverlayTriggerType | OverlayTriggerType[];
    delay?: OverlayDelay;
    show?: boolean;
    defaultShow?: boolean;
    onToggle?: (nextShow: boolean) => void;
    flip?: boolean;
    overlay: OverlayChildren;
    target?: never;
    onHide?: never;
}
declare function OverlayTrigger({ trigger, overlay, children, popperConfig, show: propsShow, defaultShow, onToggle, delay: propsDelay, placement, flip, ...props }: OverlayTriggerProps): JSX.Element;
declare namespace OverlayTrigger {
    var propTypes: {
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        /**
         * Specify which action or actions trigger Overlay visibility
         *
         * @type {'hover' | 'click' |'focus' | Array<'hover' | 'click' |'focus'>}
         */
        trigger: PropTypes.Requireable<string | (string | null | undefined)[]>;
        /**
         * A millisecond delay amount to show and hide the Overlay once triggered
         */
        delay: PropTypes.Requireable<number | PropTypes.InferProps<{
            show: PropTypes.Requireable<number>;
            hide: PropTypes.Requireable<number>;
        }>>;
        /**
         * The visibility of the Overlay. `show` is a _controlled_ prop so should be paired
         * with `onToggle` to avoid breaking user interactions.
         *
         * Manually toggling `show` does **not** wait for `delay` to change the visibility.
         *
         * @controllable onToggle
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * The initial visibility state of the Overlay.
         */
        defaultShow: PropTypes.Requireable<boolean>;
        /**
         * A callback that fires when the user triggers a change in tooltip visibility.
         *
         * `onToggle` is called with the desired next `show`, and generally should be passed
         * back to the `show` prop. `onToggle` fires _after_ the configured `delay`
         *
         * @controllable `show`
         */
        onToggle: PropTypes.Requireable<(...args: any[]) => any>;
        /**
          The initial flip state of the Overlay.
         */
        flip: PropTypes.Requireable<boolean>;
        /**
         * An element or text to overlay next to the target.
         */
        overlay: PropTypes.Requireable<((...args: any[]) => any) | PropTypes.ReactElementLike>;
        /**
         * A Popper.js config object passed to the the underlying popper instance.
         */
        popperConfig: PropTypes.Requireable<object>;
        /**
         * @private
         */
        target: PropTypes.Requireable<null>;
        /**
         * @private
         */
        onHide: PropTypes.Requireable<null>;
        /**
         * The placement of the Overlay in relation to it's `target`.
         */
        placement: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        defaultShow: boolean;
        trigger: string[];
    };
}
export default OverlayTrigger;
