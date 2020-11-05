import React from 'react';
import { BsPrefixAndClassNameOnlyProps, BsPrefixRefForwardingComponent } from './helpers';
export interface ToastHeaderProps extends React.PropsWithChildren<BsPrefixAndClassNameOnlyProps> {
    closeLabel?: string;
    closeButton?: boolean;
}
declare type ToastHeader = BsPrefixRefForwardingComponent<'div', ToastHeaderProps>;
declare const ToastHeader: ToastHeader;
export default ToastHeader;
