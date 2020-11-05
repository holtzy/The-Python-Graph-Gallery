import * as React from "react";
import { IProps, MaybeElement } from "../../common/props";
import { IconName } from "../icon/icon";
export interface ITreeNode<T = {}> extends IProps {
    /**
     * Child tree nodes of this node.
     */
    childNodes?: Array<ITreeNode<T>>;
    /**
     * Whether this tree node is non-interactive. Enabling this prop will ignore
     * mouse event handlers (in particular click, down, enter, leave).
     */
    disabled?: boolean;
    /**
     * Whether the caret to expand/collapse a node should be shown.
     * If not specified, this will be true if the node has children and false otherwise.
     */
    hasCaret?: boolean;
    /**
     * The name of a Blueprint icon (or an icon element) to render next to the node's label.
     */
    icon?: IconName | MaybeElement;
    /**
     * A unique identifier for the node.
     */
    id: string | number;
    /**
     */
    isExpanded?: boolean;
    /**
     * Whether this node is selected.
     * @default false
     */
    isSelected?: boolean;
    /**
     * The main label for the node.
     */
    label: string | JSX.Element;
    /**
     * A secondary label/component that is displayed at the right side of the node.
     */
    secondaryLabel?: string | MaybeElement;
    /**
     * An optional custom user object to associate with the node.
     * This property can then be used in the `onClick`, `onContextMenu` and `onDoubleClick`
     * event handlers for doing custom logic per node.
     */
    nodeData?: T;
}
export interface ITreeNodeProps<T = {}> extends ITreeNode<T> {
    children?: React.ReactNode;
    contentRef?: (node: TreeNode<T>, element: HTMLDivElement | null) => void;
    depth: number;
    key?: string | number;
    onClick?: (node: TreeNode<T>, e: React.MouseEvent<HTMLDivElement>) => void;
    onCollapse?: (node: TreeNode<T>, e: React.MouseEvent<HTMLSpanElement>) => void;
    onContextMenu?: (node: TreeNode<T>, e: React.MouseEvent<HTMLDivElement>) => void;
    onDoubleClick?: (node: TreeNode<T>, e: React.MouseEvent<HTMLDivElement>) => void;
    onExpand?: (node: TreeNode<T>, e: React.MouseEvent<HTMLSpanElement>) => void;
    onMouseEnter?: (node: TreeNode<T>, e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (node: TreeNode<T>, e: React.MouseEvent<HTMLDivElement>) => void;
    path: number[];
}
export declare class TreeNode<T = {}> extends React.Component<ITreeNodeProps<T>> {
    static displayName: string;
    static ofType<U>(): new (props: ITreeNodeProps<U>) => TreeNode<U>;
    render(): JSX.Element;
    private maybeRenderCaret;
    private maybeRenderSecondaryLabel;
    private handleCaretClick;
    private handleClick;
    private handleContentRef;
    private handleContextMenu;
    private handleDoubleClick;
    private handleMouseEnter;
    private handleMouseLeave;
}
