import React from 'react';
import { DropdownProps } from './Dropdown';
import { PropsFromToggle } from './DropdownToggle';
import { AlignType } from './DropdownMenu';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface DropdownButtonProps extends DropdownProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect' | 'title'>, PropsFromToggle, BsPrefixPropsWithChildren {
    title: React.ReactNode;
    menuAlign?: AlignType;
    menuRole?: string;
    renderMenuOnMount?: boolean;
    rootCloseEvent?: 'click' | 'mousedown';
}
declare type DropdownButton = BsPrefixRefForwardingComponent<'div', DropdownButtonProps>;
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of
 * [`Dropdown`'s props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu-related props are passed to the `Dropdown.Menu`
 */
declare const DropdownButton: DropdownButton;
export default DropdownButton;
