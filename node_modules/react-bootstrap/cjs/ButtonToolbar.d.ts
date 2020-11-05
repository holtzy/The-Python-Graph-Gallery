import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface ButtonToolbarProps extends BsPrefixPropsWithChildren {
    role?: string;
}
declare type ButtonToolbar = BsPrefixRefForwardingComponent<'div', ButtonToolbarProps>;
declare const ButtonToolbar: ButtonToolbar;
export default ButtonToolbar;
