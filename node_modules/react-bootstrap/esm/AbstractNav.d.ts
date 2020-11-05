import React from 'react';
import { BsPrefixRefForwardingComponent } from './helpers';
interface AbstractNavProps {
    activeKey?: any;
    as?: React.ElementType;
    getControlledId?: any;
    getControllerId?: any;
    onKeyDown?: any;
    onSelect?: any;
    parentOnSelect?: any;
    role?: string;
}
declare type AbstractNav = BsPrefixRefForwardingComponent<'ul', AbstractNavProps>;
declare const AbstractNav: AbstractNav;
export default AbstractNav;
