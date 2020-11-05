import React from 'react';
import PropTypes from 'prop-types';
import { DropDirection } from './DropdownContext';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';
export interface DropdownInjectedProps {
    onKeyDown: React.KeyboardEventHandler;
}
export interface DropdownProps {
    drop?: DropDirection;
    alignEnd?: boolean;
    defaultShow?: boolean;
    show?: boolean;
    onToggle: (nextShow: boolean, event?: React.SyntheticEvent) => void;
    itemSelector?: string;
    focusFirstItemOnShow?: false | true | 'keyboard';
    children: (arg: {
        props: DropdownInjectedProps;
    }) => React.ReactNode;
}
/**
 * @displayName Dropdown
 */
declare function Dropdown({ drop, alignEnd, defaultShow, show: rawShow, onToggle: rawOnToggle, itemSelector, focusFirstItemOnShow, children, }: DropdownProps): JSX.Element;
declare namespace Dropdown {
    var displayName: string;
    var propTypes: {
        /**
         * A render prop that returns the root dropdown element. The `props`
         * argument should spread through to an element containing _both_ the
         * menu and toggle in order to handle keyboard events for focus management.
         *
         * @type {Function ({
         *   props: {
         *     onKeyDown: (SyntheticEvent) => void,
         *   },
         * }) => React.Element}
         */
        children: PropTypes.Validator<(...args: any[]) => any>;
        /**
         * Determines the direction and location of the Menu in relation to it's Toggle.
         */
        drop: PropTypes.Requireable<string>;
        /**
         * Controls the focus behavior for when the Dropdown is opened. Set to
         * `true` to always focus the first menu item, `keyboard` to focus only when
         * navigating via the keyboard, or `false` to disable completely
         *
         * The Default behavior is `false` **unless** the Menu has a `role="menu"`
         * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
         */
        focusFirstItemOnShow: PropTypes.Requireable<string | boolean>;
        /**
         * A css slector string that will return __focusable__ menu items.
         * Selectors should be relative to the menu component:
         * e.g. ` > li:not('.disabled')`
         */
        itemSelector: PropTypes.Requireable<string>;
        /**
         * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
         */
        alignEnd: PropTypes.Requireable<boolean>;
        /**
         * Whether or not the Dropdown is visible.
         *
         * @controllable onToggle
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * Sets the initial show position of the Dropdown.
         */
        defaultShow: PropTypes.Requireable<boolean>;
        /**
         * A callback fired when the Dropdown wishes to change visibility. Called with the requested
         * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
         *
         * ```ts static
         * function(
         *   isOpen: boolean,
         *   event: SyntheticEvent,
         * ): void
         * ```
         *
         * @controllable show
         */
        onToggle: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var Menu: typeof DropdownMenu;
    var Toggle: typeof DropdownToggle;
}
export default Dropdown;
