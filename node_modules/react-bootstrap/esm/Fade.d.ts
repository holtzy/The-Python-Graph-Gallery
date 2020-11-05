import React from 'react';
import Transition, { TransitionProps } from 'react-transition-group/Transition';
export interface FadeProps extends Omit<TransitionProps, 'addEndListener'> {
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    appear?: boolean;
    timeout?: number;
}
declare const Fade: React.ForwardRefExoticComponent<Pick<FadeProps, React.ReactText> & React.RefAttributes<Transition<any>>>;
export default Fade;
