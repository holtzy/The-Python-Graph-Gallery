import React from 'react';
import { Variant } from './types';
import SafeAnchor from './SafeAnchor';
import { TransitionType } from './helpers';
export interface AlertProps extends React.HTMLProps<HTMLDivElement> {
    bsPrefix?: string;
    variant?: Variant;
    dismissible?: boolean;
    show?: boolean;
    onClose?: (a: any, b: any) => void;
    closeLabel?: string;
    transition?: TransitionType;
}
declare const AlertHeading: import("./helpers").BsPrefixRefForwardingComponent<React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>, unknown>;
declare const AlertLink: import("./helpers").BsPrefixRefForwardingComponent<SafeAnchor, unknown>;
declare type Alert = React.ForwardRefExoticComponent<AlertProps> & {
    Link: typeof AlertLink;
    Heading: typeof AlertHeading;
};
declare const Alert: Alert;
export default Alert;
