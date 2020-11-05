import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface ContainerProps extends BsPrefixPropsWithChildren {
    fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl';
}
declare type Container = BsPrefixRefForwardingComponent<'div', ContainerProps>;
declare const Container: Container;
export default Container;
