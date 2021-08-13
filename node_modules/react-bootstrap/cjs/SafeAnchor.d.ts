import React from 'react';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export interface SafeAnchorProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {
    href?: string;
    disabled?: boolean;
    tabIndex?: number;
}
declare type SafeAnchor = BsPrefixRefForwardingComponent<'a', SafeAnchorProps>;
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */
declare const SafeAnchor: SafeAnchor;
export default SafeAnchor;
