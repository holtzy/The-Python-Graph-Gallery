import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface ButtonGroupProps extends BsPrefixPropsWithChildren {
    role?: string;
    size?: 'sm' | 'lg';
    toggle?: boolean;
    vertical?: boolean;
}
declare type ButtonGroup = BsPrefixRefForwardingComponent<'div', ButtonGroupProps>;
declare const ButtonGroup: ButtonGroup;
export default ButtonGroup;
