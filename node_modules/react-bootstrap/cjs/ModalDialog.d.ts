import React from 'react';
import { BsPrefixPropsWithChildren } from './helpers';
export interface ModalDialogProps extends React.HTMLAttributes<HTMLDivElement>, BsPrefixPropsWithChildren {
    size?: 'sm' | 'lg' | 'xl';
    centered?: boolean;
    scrollable?: boolean;
}
declare const ModalDialog: React.ForwardRefExoticComponent<ModalDialogProps & React.RefAttributes<HTMLDivElement>>;
export default ModalDialog;
