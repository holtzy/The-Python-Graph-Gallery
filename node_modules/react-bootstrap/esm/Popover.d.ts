import React from 'react';
import PopoverTitle from './PopoverTitle';
import PopoverContent from './PopoverContent';
import { ArrowProps, Placement } from './Overlay';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface PopoverProps extends React.ComponentPropsWithoutRef<'div'>, BsPrefixPropsWithChildren {
    id: string;
    placement?: Placement;
    title?: string;
    arrowProps?: ArrowProps;
    content?: boolean;
    popper?: any;
    show?: boolean;
}
declare type Popover = BsPrefixRefForwardingComponent<'div', PopoverProps> & {
    Title: typeof PopoverTitle;
    Content: typeof PopoverContent;
};
declare const Popover: Popover;
export default Popover;
