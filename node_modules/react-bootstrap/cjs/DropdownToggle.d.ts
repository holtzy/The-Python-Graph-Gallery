import React from 'react';
import { ButtonProps, CommonButtonProps } from './Button';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface DropdownToggleProps extends BsPrefixPropsWithChildren, ButtonProps {
    split?: boolean;
    childBsPrefix?: string;
}
declare type DropdownToggle = BsPrefixRefForwardingComponent<'button', DropdownToggleProps>;
export declare type PropsFromToggle = Partial<Pick<React.ComponentPropsWithRef<DropdownToggle>, CommonButtonProps>>;
declare const DropdownToggle: DropdownToggle;
export default DropdownToggle;
