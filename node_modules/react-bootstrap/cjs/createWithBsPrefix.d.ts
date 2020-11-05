import React from 'react';
import { BsPrefixRefForwardingComponent } from './helpers';
interface BsPrefixOptions<As extends React.ElementType = 'div'> {
    displayName?: string;
    Component?: As;
    defaultProps?: Partial<React.ComponentProps<As>>;
}
export default function createWithBsPrefix<As extends React.ElementType = 'div'>(prefix: string, { displayName, Component, defaultProps, }?: BsPrefixOptions<As>): BsPrefixRefForwardingComponent<As>;
export {};
