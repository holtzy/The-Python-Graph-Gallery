import React from 'react';
import { SelectCallback, TransitionType } from './helpers';
export interface TabsProps extends React.PropsWithChildren<unknown> {
    activeKey?: unknown;
    defaultActiveKey?: unknown;
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
