/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { IPanel } from "./panelProps";
export interface IPanelViewProps {
    /**
     * Callback invoked when the user presses the back button or a panel invokes
     * the `closePanel()` injected prop method.
     */
    onClose: (removedPanel: IPanel<any>) => void;
    /**
     * Callback invoked when a panel invokes the `openPanel(panel)` injected
     * prop method.
     */
    onOpen: (addedPanel: IPanel<any>) => void;
    /** The panel to be displayed. */
    panel: IPanel;
    /** The previous panel in the stack, for rendering the "back" button. */
    previousPanel?: IPanel;
    /** Whether to show the header with the "back" button. */
    showHeader: boolean;
}
export declare class PanelView extends AbstractPureComponent2<IPanelViewProps> {
    render(): JSX.Element;
    private maybeRenderHeader;
    private maybeRenderBack;
    private handleClose;
}
