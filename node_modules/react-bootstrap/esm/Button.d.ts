import React from 'react';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
import { ButtonVariant } from './types';
export declare type ButtonType = 'button' | 'reset' | 'submit' | string;
export interface ButtonProps extends React.HTMLAttributes<HTMLElement>, BsPrefixPropsWithChildren {
    active?: boolean;
    block?: boolean;
    variant?: ButtonVariant;
    size?: 'sm' | 'lg';
    type?: ButtonType;
    href?: string;
    disabled?: boolean;
    target?: any;
}
declare type Button = BsPrefixRefForwardingComponent<'button', ButtonProps>;
export declare type CommonButtonProps = 'href' | 'size' | 'variant' | 'disabled';
declare const Button: Button;
export default Button;
