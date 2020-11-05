import PropTypes from 'prop-types';
import React from 'react';
import { DropdownContextValue } from './DropdownContext';
export interface UseDropdownToggleProps {
    ref: DropdownContextValue['setToggle'];
    'aria-haspopup': boolean;
    'aria-expanded': boolean;
}
export interface UseDropdownToggleHelpers {
    show: DropdownContextValue['show'];
    toggle: DropdownContextValue['toggle'];
}
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */
export declare function useDropdownToggle(): [UseDropdownToggleProps, UseDropdownToggleHelpers];
export interface DropdownToggleProps {
    children: (args: UseDropdownToggleHelpers & {
        props: UseDropdownToggleProps;
    }) => React.ReactNode;
}
/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */
declare function DropdownToggle({ children }: DropdownToggleProps): JSX.Element;
declare namespace DropdownToggle {
    var displayName: string;
    var propTypes: {
        /**
         * A render prop that returns a Toggle element. The `props`
         * argument should spread through to **a component that can accept a ref**. Use
         * the `onToggle` argument to toggle the menu open or closed
         *
         * @type {Function ({
         *   show: boolean,
         *   toggle: (show: boolean) => void,
         *   props: {
         *     ref: (?HTMLElement) => void,
         *     aria-haspopup: true
         *     aria-expanded: boolean
         *   },
         * }) => React.Element}
         */
        children: PropTypes.Validator<(...args: any[]) => any>;
    };
}
/** @component */
export default DropdownToggle;
