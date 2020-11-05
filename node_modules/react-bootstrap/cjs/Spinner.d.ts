import React from 'react';
import { BsPrefixPropsWithChildren } from './helpers';
import { Variant } from './types';
export interface SpinnerProps extends React.HTMLAttributes<HTMLElement>, BsPrefixPropsWithChildren {
    animation: 'border' | 'grow';
    role?: string;
    size?: 'sm';
    variant?: Variant;
}
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<unknown>>;
export default Spinner;
