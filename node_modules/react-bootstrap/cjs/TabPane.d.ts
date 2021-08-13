import { BsPrefixProps, BsPrefixRefForwardingComponent, TransitionCallbacks, TransitionType } from './helpers';
import { EventKey } from './types';
export interface TabPaneProps extends TransitionCallbacks, BsPrefixProps {
    eventKey?: EventKey;
    active?: boolean;
    transition?: TransitionType;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
}
declare type TabPane = BsPrefixRefForwardingComponent<'div', TabPaneProps>;
declare const TabPane: TabPane;
export default TabPane;
