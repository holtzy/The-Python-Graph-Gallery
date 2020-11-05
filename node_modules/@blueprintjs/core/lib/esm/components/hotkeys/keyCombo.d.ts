/// <reference types="react" />
import { AbstractPureComponent2, IProps } from "../../common";
export interface IKeyComboProps extends IProps {
    /** The key combo to display, such as `"cmd + s"`. */
    combo: string;
    /**
     * Whether to render in a minimal style.
     * If `false`, each key in the combo will be rendered inside a `<kbd>` tag.
     * If `true`, only the icon or short name of a key will be rendered with no wrapper styles.
     * @default false
     */
    minimal?: boolean;
}
export declare class KeyCombo extends AbstractPureComponent2<IKeyComboProps> {
    static displayName: string;
    render(): JSX.Element;
    private renderKey;
    private renderMinimalKey;
}
