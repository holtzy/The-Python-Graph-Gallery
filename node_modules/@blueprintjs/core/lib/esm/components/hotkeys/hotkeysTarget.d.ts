import * as React from "react";
import { IConstructor } from "../../common/constructor";
import { HotkeysEvents } from "./hotkeysEvents";
import { IHotkeysProps } from "./hotkeysTypes";
export interface IHotkeysTargetComponent extends React.Component {
    /** Components decorated with the `@HotkeysTarget` decorator must implement React's component `render` function. */
    render(): React.ReactElement<any> | null | undefined;
    /**
     * Components decorated with the `@HotkeysTarget` decorator must implement
     * this method, and it must return a `Hotkeys` React element.
     */
    renderHotkeys(): React.ReactElement<IHotkeysProps>;
}
export declare function HotkeysTarget<T extends IConstructor<IHotkeysTargetComponent>>(WrappedComponent: T): {
    new (...args: any[]): {
        /** @internal */
        globalHotkeysEvents: HotkeysEvents;
        /** @internal */
        localHotkeysEvents: HotkeysEvents;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        /**
         * Components decorated with the `@HotkeysTarget` decorator must implement
         * this method, and it must return a `Hotkeys` React element.
         */
        renderHotkeys(): React.ReactElement<IHotkeysProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
} & T;
