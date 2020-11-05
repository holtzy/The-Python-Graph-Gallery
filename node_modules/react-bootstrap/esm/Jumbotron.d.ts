import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export interface JumbotronProps extends BsPrefixProps {
    fluid?: boolean;
}
declare type Jumbotron = BsPrefixRefForwardingComponent<'div', JumbotronProps>;
declare const Jumbotron: Jumbotron;
export default Jumbotron;
