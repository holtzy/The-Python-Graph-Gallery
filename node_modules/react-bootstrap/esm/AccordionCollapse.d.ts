import React from 'react';
import { CollapseProps } from './Collapse';
import { BsPrefixRefForwardingComponent } from './helpers';
export interface AccordionCollapseProps extends React.PropsWithChildren<CollapseProps> {
    eventKey: string;
}
declare type AccordionCollapse = BsPrefixRefForwardingComponent<'div', AccordionCollapseProps>;
declare const AccordionCollapse: AccordionCollapse;
export default AccordionCollapse;
