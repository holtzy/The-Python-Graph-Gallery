import React from 'react';
import { SelectCallback, TransitionType } from './helpers';
import { EventKey } from './types';
export interface TabsProps extends React.PropsWithChildren<unknown> {
    activeKey?: EventKey;
    defaultActiveKey?: EventKey;
    onSelect?: SelectCallback;
    variant?: 'tabs' | 'pills';
    transition?: TransitionType;
    id?: string;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
}
declare const Tabs: {
    (props: TabsProps): JSX.Element;
    propTypes: any;
    defaultProps: any;
    displayName: string;
};
export default Tabs;
