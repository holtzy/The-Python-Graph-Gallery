import * as React from 'react';
export declare type Direction = 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
export declare type OnStartCallback = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, dir: Direction) => void;
export interface Props {
    direction: Direction;
    className?: string;
    replaceStyles?: React.CSSProperties;
    onResizeStart: OnStartCallback;
    children: React.ReactNode;
}
export declare class Resizer extends React.PureComponent<Props> {
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
    onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
    render(): JSX.Element;
}
