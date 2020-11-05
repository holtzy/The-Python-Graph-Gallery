import React from 'react';
import AccordionToggle from './AccordionToggle';
import AccordionCollapse from './AccordionCollapse';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent, SelectCallback } from './helpers';
export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'>, BsPrefixPropsWithChildren {
    activeKey?: string;
    defaultActiveKey?: string;
    onSelect?: SelectCallback;
}
declare type Accordion = BsPrefixRefForwardingComponent<'div', AccordionProps> & {
    Toggle: typeof AccordionToggle;
    Collapse: typeof AccordionCollapse;
};
declare const Accordion: Accordion;
export default Accordion;
