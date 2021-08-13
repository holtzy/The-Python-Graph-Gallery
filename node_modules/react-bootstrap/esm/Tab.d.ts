import PropTypes from 'prop-types';
import React from 'react';
import TabContent from './TabContent';
import TabPane from './TabPane';
import { EventKey } from './types';
export interface TabProps extends React.ComponentPropsWithRef<typeof TabPane> {
    eventKey?: EventKey;
    title: React.ReactNode;
    disabled?: boolean;
    tabClassName?: string;
}
declare class Tab extends React.Component<TabProps> {
    static propTypes: {
        title: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        eventKey: PropTypes.Requireable<string | number>;
    };
    static Container: {
        (props: import("./TabContainer").TabContainerProps): JSX.Element;
        propTypes: {
            id: PropTypes.Validator<string>;
            transition: PropTypes.Requireable<boolean | PropTypes.ReactComponentLike>;
            mountOnEnter: PropTypes.Requireable<boolean>;
            unmountOnExit: PropTypes.Requireable<boolean>;
            generateChildId: PropTypes.Requireable<(...args: any[]) => any>;
            onSelect: PropTypes.Requireable<(...args: any[]) => any>;
            activeKey: PropTypes.Requireable<string | number>;
        };
    };
    static Content: TabContent;
    static Pane: TabPane;
    render(): null;
}
export default Tab;
