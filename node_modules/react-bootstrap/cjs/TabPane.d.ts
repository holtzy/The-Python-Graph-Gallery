import { BsPrefixProps, BsPrefixRefForwardingComponent, TransitionCallbacks, TransitionType } from './helpers';
export interface TabPaneProps extends TransitionCallbacks, BsPrefixProps {
    eventKey?: any;
    active?: boolean;
    transition?: TransitionType;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
}
declare type TabPane = BsPrefixRefForwardingComponent<'div', TabPaneProps>;
declare const TabPane: TabPane;
export default TabPane;
