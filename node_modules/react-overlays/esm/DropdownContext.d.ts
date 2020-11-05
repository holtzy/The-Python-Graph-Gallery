import React from 'react';
export declare type DropDirection = 'up' | 'down' | 'left' | 'right';
export declare type DropdownContextValue = {
    toggle: (nextShow: boolean, event?: React.SyntheticEvent | Event) => void;
    menuElement: HTMLElement | null;
    toggleElement: HTMLElement | null;
    setMenu: (ref: HTMLElement | null) => void;
    setToggle: (ref: HTMLElement | null) => void;
    show: boolean;
    alignEnd?: boolean;
    drop?: DropDirection;
};
declare const DropdownContext: React.Context<DropdownContextValue | null>;
export default DropdownContext;
