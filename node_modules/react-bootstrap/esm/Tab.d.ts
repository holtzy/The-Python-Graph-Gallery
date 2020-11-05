import PropTypes from 'prop-types';
import React from 'react';
import TabContent from './TabContent';
import TabPane from './TabPane';
export interface TabProps extends React.ComponentPropsWithRef<typeof TabPane> {
    eventKey?: string;
    title: React.ReactNode;
    disabled?: boolean;
    tabClassName?: string;
}
declare class Tab extends React.Component<TabProps> {
    static propTypes: {
        title: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
    static Container: {
        (props: import("./TabContainer").TabContainerProps): JSX.Element;
        propTypes: {
            id: PropTypes.Validator<string>;
            transition: PropTypes.Requireable<string | boolean | ((props: any, context?: any) => any) | (new (props: any, context?: any) => any)>;
            mountOnEnter: PropTypes.Requireable<boolean>;
            unmountOnExit: PropTypes.Requireable<boolean>;
            generateChildId: PropTypes.Requireable<(...args: any[]) => any>;
            onSelect: PropTypes.Requireable<(...args: any[]) => any>;
            activeKey: PropTypes.Requireable<any>;
        };
    };
    static Content: TabContent;
    static Pane: TabPane;
    render(): null;
}
export default Tab;
