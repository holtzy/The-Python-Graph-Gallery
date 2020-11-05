import React from 'react';
import PropTypes from 'prop-types';
import { SelectCallback, TransitionType } from './helpers';
export interface TabContainerProps extends React.PropsWithChildren<unknown> {
    id?: string;
    transition?: TransitionType;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    generateChildId?: (eventKey: unknown, type: 'tab' | 'pane') => string;
    onSelect?: SelectCallback;
    activeKey?: unknown;
    defaultActiveKey?: unknown;
}
declare const TabContainer: {
    (props: TabContainerProps): JSX.Element;
    propTypes: {
        /**
         * HTML id attribute, required if no `generateChildId` prop
         * is specified.
         *
         * @type {string}
         */
        id: PropTypes.Validator<string>;
        /**
         * Sets a default animation strategy for all children `<TabPane>`s.
         * Defaults to `<Fade>` animation; else, use `false` to disable, or a
         * custom react-transition-group `<Transition/>` component.
         *
         * @type {{Transition | false}}
         * @default {Fade}
         */
        transition: PropTypes.Requireable<string | boolean | ((props: any, context?: any) => any) | (new (props: any, context?: any) => any)>;
        /**
         * Wait until the first "enter" transition to mount tabs (add them to the DOM)
         */
        mountOnEnter: PropTypes.Requireable<boolean>;
        /**
         * Unmount tabs (remove it from the DOM) when they are no longer visible
         */
        unmountOnExit: PropTypes.Requireable<boolean>;
        /**
         * A function that takes an `eventKey` and `type` and returns a unique id for
         * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
         * function, meaning it should always return the _same_ id for the same set
         * of inputs. The default value requires that an `id` to be set for the
         * `<TabContainer>`.
         *
         * The `type` argument will either be `"tab"` or `"pane"`.
         *
         * @defaultValue (eventKey, type) => `${props.id}-${type}-${eventKey}`
         */
        generateChildId: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * A callback fired when a tab is selected.
         *
         * @controllable activeKey
         */
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * The `eventKey` of the currently active tab.
         *
         * @controllable onSelect
         */
        activeKey: PropTypes.Requireable<any>;
    };
};
export default TabContainer;
