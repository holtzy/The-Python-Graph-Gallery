import * as React from "react";
import { IRefObject } from "../../common/refs";
import { AbstractButton, IButtonProps } from "./abstractButton";
export { IButtonProps };
export declare class Button extends AbstractButton<React.ButtonHTMLAttributes<HTMLButtonElement>> {
    static displayName: string;
    protected buttonRef: HTMLButtonElement | IRefObject<HTMLButtonElement> | null;
    protected handleRef: IRefObject<HTMLButtonElement> | ((ref: HTMLButtonElement | null) => void);
    render(): JSX.Element;
}
export declare class AnchorButton extends AbstractButton<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
    static displayName: string;
    protected buttonRef: HTMLAnchorElement | IRefObject<HTMLAnchorElement> | null;
    protected handleRef: IRefObject<HTMLAnchorElement> | ((ref: HTMLAnchorElement | null) => void);
    render(): JSX.Element;
}
