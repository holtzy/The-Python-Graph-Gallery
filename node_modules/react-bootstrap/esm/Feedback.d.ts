import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export interface FeedbackProps extends BsPrefixProps {
    className?: string;
    bsPrefix?: never;
    type?: 'valid' | 'invalid';
    tooltip?: boolean;
}
declare type Feedback = BsPrefixRefForwardingComponent<'div', FeedbackProps>;
declare const Feedback: Feedback;
export default Feedback;
