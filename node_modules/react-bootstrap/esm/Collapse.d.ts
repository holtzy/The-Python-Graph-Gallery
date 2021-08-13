import React from 'react';
import { TransitionCallbacks } from './helpers';
declare type Dimension = 'height' | 'width';
export interface CollapseProps extends TransitionCallbacks, Pick<React.HTMLAttributes<HTMLElement>, 'role'> {
    className?: string;
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    appear?: boolean;
    timeout?: number;
    dimension?: Dimension | (() => Dimension);
    getDimensionValue?: (dimension: Dimension, element: HTMLElement) => number;
    children: React.ReactElement;
}
declare const Collapse: React.ForwardRefExoticComponent<CollapseProps & React.RefAttributes<unknown>>;
export default Collapse;
