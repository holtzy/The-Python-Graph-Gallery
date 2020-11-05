import { IProps } from "../../common";
export interface IHotkeysProps extends IProps {
    /**
     * In order to make local hotkeys work on elements that are not normally
     * focusable, such as `<div>`s or `<span>`s, we add a `tabIndex` attribute
     * to the hotkey target, which makes it focusable. By default, we use `0`,
     * but you can override this value to change the tab navigation behavior
     * of the component. You may even set this value to `null`, which will omit
     * the `tabIndex` from the component decorated by `HotkeysTarget`.
     */
    tabIndex?: number;
}
