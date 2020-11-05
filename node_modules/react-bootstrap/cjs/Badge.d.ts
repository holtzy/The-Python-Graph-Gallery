import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
import { Variant } from './types';
export interface BadgeProps extends BsPrefixProps {
    variant?: Variant;
    pill?: boolean;
}
declare type Badge = BsPrefixRefForwardingComponent<'span', BadgeProps>;
declare const Badge: Badge;
export default Badge;
