import { ReactNode } from "react";
import { IHotkeyProps } from "./hotkey";
import { IKeyCombo } from "./hotkeyParser";
import { IHotkeysProps } from "./hotkeysTypes";
export declare enum HotkeyScope {
    LOCAL = "local",
    GLOBAL = "global"
}
export interface IHotkeyAction {
    combo: IKeyCombo;
    props: IHotkeyProps;
}
export declare class HotkeysEvents {
    private scope;
    private actions;
    constructor(scope: HotkeyScope);
    count(): number;
    clear(): void;
    setHotkeys(props: IHotkeysProps & {
        children?: ReactNode;
    }): void;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleKeyUp: (e: KeyboardEvent) => void;
    private invokeNamedCallbackIfComboRecognized;
    private isScope;
    private isTextInput;
}
