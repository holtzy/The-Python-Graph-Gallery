import React from 'react';
import { DropdownProps } from './Dropdown';
import { PropsFromToggle } from './DropdownToggle';
export interface DropdownButtonProps extends DropdownProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect' | 'title'>, React.PropsWithChildren<PropsFromToggle> {
    title: React.ReactNode;
    menuRole?: string;
    renderMenuOnMount?: boolean;
    rootCloseEvent?: 'click' | 'mousedown';
    bsPrefix?: string;
}
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`.
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu related props are passed to the `Dropdown.Menu`
 */
declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLDivElement>>;
export default DropdownButton;
