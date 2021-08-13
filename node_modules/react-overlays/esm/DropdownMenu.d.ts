import PropTypes from 'prop-types';
import React from 'react';
import { DropdownContextValue } from './DropdownContext';
import { UsePopperOptions, Offset, UsePopperState } from './usePopper';
import { RootCloseOptions } from './useRootClose';
export interface UseDropdownMenuOptions {
    flip?: boolean;
    show?: boolean;
    fixed?: boolean;
    alignEnd?: boolean;
    usePopper?: boolean;
    offset?: Offset;
    rootCloseEvent?: RootCloseOptions['clickTrigger'];
    popperConfig?: Omit<UsePopperOptions, 'enabled' | 'placement'>;
}
export declare type UserDropdownMenuProps = Record<string, any> & {
    ref: React.RefCallback<HTMLElement>;
    style?: React.CSSProperties;
    'aria-labelledby'?: string;
};
export declare type UserDropdownMenuArrowProps = Record<string, any> & {
    ref: React.RefCallback<HTMLElement>;
    style: React.CSSProperties;
};
export interface UseDropdownMenuMetadata {
    show: boolean;
    alignEnd?: boolean;
    hasShown: boolean;
    toggle?: DropdownContextValue['toggle'];
    popper: UsePopperState | null;
    arrowProps: Partial<UserDropdownMenuArrowProps>;
}
/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */
export declare function useDropdownMenu(options?: UseDropdownMenuOptions): readonly [UserDropdownMenuProps, UseDropdownMenuMetadata];
export interface DropdownMenuProps extends UseDropdownMenuOptions {
    children: (props: UserDropdownMenuProps, meta: UseDropdownMenuMetadata) => React.ReactNode;
}
/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */
declare function DropdownMenu({ children, ...options }: DropdownMenuProps): JSX.Element;
declare namespace DropdownMenu {
    var displayName: string;
    var propTypes: {
        /**
         * A render prop that returns a Menu element. The `props`
         * argument should spread through to **a component that can accept a ref**.
         *
         * @type {Function ({
         *   show: boolean,
         *   alignEnd: boolean,
         *   close: (?SyntheticEvent) => void,
         *   placement: Placement,
         *   update: () => void,
         *   forceUpdate: () => void,
         *   props: {
         *     ref: (?HTMLElement) => void,
         *     style: { [string]: string | number },
         *     aria-labelledby: ?string
         *   },
         *   arrowProps: {
         *     ref: (?HTMLElement) => void,
         *     style: { [string]: string | number },
         *   },
         * }) => React.Element}
         */
        children: PropTypes.Validator<(...args: any[]) => any>;
        /**
         * Controls the visible state of the menu, generally this is
         * provided by the parent `Dropdown` component,
         * but may also be specified as a prop directly.
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * Aligns the dropdown menu to the 'end' of it's placement position.
         * Generally this is provided by the parent `Dropdown` component,
         * but may also be specified as a prop directly.
         */
        alignEnd: PropTypes.Requireable<boolean>;
        /**
         * Enables the Popper.js `flip` modifier, allowing the Dropdown to
         * automatically adjust it's placement in case of overlap with the viewport or toggle.
         * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
         */
        flip: PropTypes.Requireable<boolean>;
        usePopper: PropTypes.Requireable<boolean>;
        /**
         * A set of popper options and props passed directly to react-popper's Popper component.
         */
        popperConfig: PropTypes.Requireable<object>;
        /**
         * Override the default event used by RootCloseWrapper.
         */
        rootCloseEvent: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        usePopper: boolean;
    };
}
/** @component */
export default DropdownMenu;
