import * as React from "react";
import { IProps } from "../../common/props";
import { ITreeNode } from "./treeNode";
export declare type TreeEventHandler<T = {}> = (node: ITreeNode<T>, nodePath: number[], e: React.MouseEvent<HTMLElement>) => void;
export interface ITreeProps<T = {}> extends IProps {
    /**
     * The data specifying the contents and appearance of the tree.
     */
    contents: Array<ITreeNode<T>>;
    /**
     * Invoked when a node is clicked anywhere other than the caret for expanding/collapsing the node.
     */
    onNodeClick?: TreeEventHandler<T>;
    /**
     * Invoked when caret of an expanded node is clicked.
     */
    onNodeCollapse?: TreeEventHandler<T>;
    /**
     * Invoked when a node is right-clicked or the context menu button is pressed on a focused node.
     */
    onNodeContextMenu?: TreeEventHandler<T>;
    /**
     * Invoked when a node is double-clicked. Be careful when using this in combination with
     * an `onNodeClick` (single-click) handler, as the way this behaves can vary between browsers.
     * See http://stackoverflow.com/q/5497073/3124288
     */
    onNodeDoubleClick?: TreeEventHandler<T>;
    /**
     * Invoked when the caret of a collapsed node is clicked.
     */
    onNodeExpand?: TreeEventHandler<T>;
    /**
     * Invoked when the mouse is moved over a node.
     */
    onNodeMouseEnter?: TreeEventHandler<T>;
    /**
     * Invoked when the mouse is moved out of a node.
     */
    onNodeMouseLeave?: TreeEventHandler<T>;
}
export declare class Tree<T = {}> extends React.Component<ITreeProps<T>> {
    static displayName: string;
    static ofType<U>(): new (props: ITreeProps<U>) => Tree<U>;
    static nodeFromPath<U>(path: number[], treeNodes?: Array<ITreeNode<U>>): ITreeNode<U>;
    private nodeRefs;
    render(): JSX.Element;
    /**
     * Returns the underlying HTML element of the `Tree` node with an id of `nodeId`.
     * This element does not contain the children of the node, only its label and controls.
     * If the node is not currently mounted, `undefined` is returned.
     */
    getNodeContentElement(nodeId: string | number): HTMLElement | undefined;
    private renderNodes;
    private handleNodeCollapse;
    private handleNodeClick;
    private handleContentRef;
    private handleNodeContextMenu;
    private handleNodeDoubleClick;
    private handleNodeExpand;
    private handleNodeMouseEnter;
    private handleNodeMouseLeave;
    private handlerHelper;
}
