import { IDialogProps } from "../../components";
import { IHotkeyProps } from "./hotkey";
export interface IHotkeysDialogProps extends IDialogProps {
    /**
     * This string displayed as the group name in the hotkeys dialog for all
     * global hotkeys.
     */
    globalHotkeysGroup?: string;
}
export declare function isHotkeysDialogShowing(): boolean;
export declare function setHotkeysDialogProps(props: Partial<IHotkeysDialogProps>): void;
export declare function showHotkeysDialog(hotkeys: IHotkeyProps[]): void;
export declare function hideHotkeysDialog(): void;
/**
 * Use this function instead of `hideHotkeysDialog` if you need to ensure that all hotkey listeners
 * have time to execute with the dialog in a consistent open state. This can avoid flickering the
 * dialog between open and closed states as successive listeners fire.
 */
export declare function hideHotkeysDialogAfterDelay(): void;
