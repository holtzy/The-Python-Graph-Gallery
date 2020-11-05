import React from 'react';
import { BsPrefixPropsWithChildren } from './helpers';
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement>, BsPrefixPropsWithChildren {
    min?: number;
    now?: number;
    max?: number;
    label?: React.ReactNode;
    srOnly?: boolean;
    striped?: boolean;
    animated?: boolean;
    variant?: 'success' | 'danger' | 'warning' | 'info' | string;
    isChild?: boolean;
}
declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
