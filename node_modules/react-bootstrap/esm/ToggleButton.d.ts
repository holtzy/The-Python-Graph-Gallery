import React from 'react';
import { ButtonProps } from './Button';
import { BsPrefixAndClassNameOnlyProps, BsPrefixComponentClass } from './helpers';
export interface ToggleButtonProps extends ButtonProps, React.PropsWithChildren<BsPrefixAndClassNameOnlyProps> {
    type?: 'checkbox' | 'radio';
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value: string | ReadonlyArray<string> | number;
    inputRef?: React.LegacyRef<HTMLInputElement>;
}
declare type ToggleButton = BsPrefixComponentClass<'button', ToggleButtonProps>;
declare const ToggleButton: React.ForwardRefExoticComponent<ToggleButtonProps & React.RefAttributes<any>>;
export default ToggleButton;
