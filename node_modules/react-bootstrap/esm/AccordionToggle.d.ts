import React from 'react';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
declare type EventHandler = React.EventHandler<React.SyntheticEvent>;
export interface AccordionToggleProps extends BsPrefixPropsWithChildren {
    eventKey: string;
    onClick?: EventHandler;
}
declare type AccordionToggle = BsPrefixRefForwardingComponent<'div', AccordionToggleProps>;
export declare function useAccordionToggle(eventKey: string, onClick?: EventHandler): EventHandler;
declare const AccordionToggle: AccordionToggle;
export default AccordionToggle;
