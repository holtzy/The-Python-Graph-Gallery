import * as React from 'react';
import { Direction } from './resizer';
export declare type ResizeDirection = Direction;
export interface Enable {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
    topLeft?: boolean;
}
export interface HandleStyles {
    top?: React.CSSProperties;
    right?: React.CSSProperties;
    bottom?: React.CSSProperties;
    left?: React.CSSProperties;
    topRight?: React.CSSProperties;
    bottomRight?: React.CSSProperties;
    bottomLeft?: React.CSSProperties;
    topLeft?: React.CSSProperties;
}
export interface HandleClassName {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    topRight?: string;
    bottomRight?: string;
    bottomLeft?: string;
    topLeft?: string;
}
export interface Size {
    width: string | number;
    height: string | number;
}
export interface NumberSize {
    width: number;
    height: number;
}
export interface HandleComponent {
    top?: React.ReactElement<any>;
    right?: React.ReactElement<any>;
    bottom?: React.ReactElement<any>;
    left?: React.ReactElement<any>;
    topRight?: React.ReactElement<any>;
    bottomRight?: React.ReactElement<any>;
    bottomLeft?: React.ReactElement<any>;
    topLeft?: React.ReactElement<any>;
}
export declare type ResizeCallback = (event: MouseEvent | TouchEvent, direction: Direction, elementRef: HTMLElement, delta: NumberSize) => void;
export declare type ResizeStartCallback = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>, dir: Direction, elementRef: HTMLElement) => void | boolean;
export interface ResizableProps {
    as?: string | React.ComponentType<any>;
    style?: React.CSSProperties;
    className?: string;
    grid?: [number, number];
    snap?: {
        x?: number[];
        y?: number[];
    };
    snapGap?: number;
    bounds?: 'parent' | 'window' | HTMLElement;
    boundsByDirection?: boolean;
    size?: Size;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    lockAspectRatio?: boolean | number;
    lockAspectRatioExtraWidth?: number;
    lockAspectRatioExtraHeight?: number;
    enable?: Enable;
    handleStyles?: HandleStyles;
    handleClasses?: HandleClassName;
    handleWrapperStyle?: React.CSSProperties;
    handleWrapperClass?: string;
    handleComponent?: HandleComponent;
    children?: React.ReactNode;
    onResizeStart?: ResizeStartCallback;
    onResize?: ResizeCallback;
    onResizeStop?: ResizeCallback;
    defaultSize?: Size;
    scale?: number;
    resizeRatio?: number;
}
interface State {
    isResizing: boolean;
    direction: Direction;
    original: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    width: number | string;
    height: number | string;
    backgroundStyle: React.CSSProperties;
    flexBasis?: string | number;
}
declare global {
    interface Window {
        MouseEvent: typeof MouseEvent;
        TouchEvent: typeof TouchEvent;
    }
}
export declare class Resizable extends React.PureComponent<ResizableProps, State> {
    flexDir?: 'row' | 'column';
    get parentNode(): HTMLElement | null;
    get window(): Window | null;
    get propsSize(): Size;
    get size(): NumberSize;
    get sizeStyle(): {
        width: string;
        height: string;
    };
    static defaultProps: {
        as: string;
        onResizeStart: () => void;
        onResize: () => void;
        onResizeStop: () => void;
        enable: {
            top: boolean;
            right: boolean;
            bottom: boolean;
            left: boolean;
            topRight: boolean;
            bottomRight: boolean;
            bottomLeft: boolean;
            topLeft: boolean;
        };
        style: {};
        grid: number[];
        lockAspectRatio: boolean;
        lockAspectRatioExtraWidth: number;
        lockAspectRatioExtraHeight: number;
        scale: number;
        resizeRatio: number;
        snapGap: number;
    };
    ratio: number;
    resizable: HTMLElement | null;
    parentLeft: number;
    parentTop: number;
    resizableLeft: number;
    resizableRight: number;
    resizableTop: number;
    resizableBottom: number;
    targetLeft: number;
    targetTop: number;
    constructor(props: ResizableProps);
    getParentSize(): {
        width: number;
        height: number;
    };
    bindEvents(): void;
    unbindEvents(): void;
    componentDidMount(): void;
    appendBase: () => HTMLDivElement | null;
    removeBase: (base: HTMLElement) => void;
    componentWillUnmount(): void;
    createSizeForCssProperty(newSize: number | string, kind: 'width' | 'height'): number | string;
    calculateNewMaxFromBoundary(maxWidth?: number, maxHeight?: number): {
        maxWidth: number | undefined;
        maxHeight: number | undefined;
    };
    calculateNewSizeFromDirection(clientX: number, clientY: number): {
        newWidth: number;
        newHeight: number;
    };
    calculateNewSizeFromAspectRatio(newWidth: number, newHeight: number, max: {
        width?: number;
        height?: number;
    }, min: {
        width?: number;
        height?: number;
    }): {
        newWidth: number;
        newHeight: number;
    };
    setBoundingClientRect(): void;
    onResizeStart(event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>, direction: Direction): void;
    onMouseMove(event: MouseEvent | TouchEvent): void;
    onMouseUp(event: MouseEvent | TouchEvent): void;
    updateSize(size: Size): void;
    renderResizer(): JSX.Element | null;
    ref: (c: HTMLElement | null) => void;
    render(): JSX.Element;
}
export {};
