import React from 'react';
import { ButtonType } from './Button';
import { AlignType } from './DropdownMenu';
import { PropsFromToggle } from './DropdownToggle';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface SplitButtonProps extends PropsFromToggle, BsPrefixPropsWithChildren {
    id: string | number;
    menuAlign?: AlignType;
    menuRole?: string;
    onClick?: React.MouseEventHandler<this>;
    renderMenuOnMount?: boolean;
    rootCloseEvent?: 'click' | 'mousedown';
    target?: string;
    title: React.ReactNode;
    toggleLabel?: string;
    type?: ButtonType;
}
declare type SplitButton = BsPrefixRefForwardingComponent<'div', SplitButtonProps>;
declare const SplitButton: SplitButton;
export default SplitButton;
