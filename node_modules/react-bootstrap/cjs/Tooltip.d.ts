import React from 'react';
import { ArrowProps, Placement } from './Overlay';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement>, BsPrefixPropsWithChildren {
    id: string;
    placement?: Placement;
    arrowProps?: ArrowProps;
    show?: boolean;
    popper?: any;
}
declare type Tooltip = BsPrefixRefForwardingComponent<'div', TooltipProps>;
declare const Tooltip: Tooltip;
export default Tooltip;
