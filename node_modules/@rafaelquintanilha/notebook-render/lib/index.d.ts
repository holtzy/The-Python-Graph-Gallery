import * as React from "react";
import { ImmutableNotebook } from "@nteract/commutable";
import { Transforms } from "@nteract/transforms";
interface Props {
    displayOrder: string[];
    notebook: ImmutableNotebook;
    transforms: Transforms;
    theme: "light" | "dark";
    showPrompt: Boolean;
    sourceClassName: string;
}
interface State {
    notebook: ImmutableNotebook;
}
export default class NotebookRender extends React.PureComponent<Props, State> {
    static defaultProps: {
        displayOrder: string[];
        notebook: ImmutableNotebook;
        theme: string;
        transforms: any;
        showPrompt: boolean;
    };
    constructor(props: Props);
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element;
}
export {};
