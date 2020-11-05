import * as React from "react";
import {
  appendCellToNotebook,
  createCodeCell,
  emptyNotebook,
  fromJS,
  ImmutableNotebook,
} from "@nteract/commutable";
import { Display } from "@nteract/display-area";
import {
  Cell,
  Cells,
  Input,
  Outputs,
  Prompt,
  Source,
  DarkTheme,
  LightTheme,
} from "@nteract/presentational-components";
import { displayOrder, transforms, Transforms } from "@nteract/transforms";
import { BlockMath, InlineMath } from "react-katex";
import ReactMarkdown from "react-markdown/with-html";
import katex from "rehype-katex";
import stringify from "rehype-stringify";
import math from "remark-math";
import remark2rehype from "remark-rehype";
import styled from "styled-components";

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

const ContentMargin = styled.div`
  padding-left: calc(var(--prompt-width, 50px) + 10px);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
`;

const RawCell = styled.pre`
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    #efefef 10px,
    #f1f1f1 20px
  );
`;

export default class NotebookRender extends React.PureComponent<Props, State> {
  static defaultProps = {
    displayOrder,
    notebook: appendCellToNotebook(
      emptyNotebook,
      createCodeCell().set("source", "# where's the content?")
    ),
    theme: "light",
    transforms,
    showPrompt: true,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      notebook: fromJS(props.notebook),
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.notebook !== this.props.notebook) {
      this.setState({ notebook: fromJS(nextProps.notebook) });
    }
  }

  render() {
    const notebook = this.state.notebook;

    // Propagated from the hide_(all)_input nbextension
    const allSourceHidden = notebook.getIn(["metadata", "hide_input"]) || false;

    const language =
      notebook.getIn([
        "metadata",
        "language_info",
        "codemirror_mode",
        "name",
      ]) ||
      notebook.getIn(["metadata", "language_info", "codemirror_mode"]) ||
      notebook.getIn(["metadata", "language_info", "name"]) ||
      "text";

    const cellOrder = notebook.get("cellOrder");
    const cellMap = notebook.get("cellMap");

    return (
      <div className="notebook-render">
        <Cells>
          {cellOrder.map((cellId: string) => {
            const cell = cellMap.get(cellId)!;
            const cellType: string = cell.get("cell_type", "");
            const source = cell.get("source", "");

            switch (cell.cell_type) {
              case "code":
                const sourceHidden =
                  allSourceHidden ||
                  cell.getIn(["metadata", "inputHidden"]) ||
                  cell.getIn(["metadata", "hide_input"]);

                const outputHidden =
                  cell.get("outputs").size === 0 ||
                  cell.getIn(["metadata", "outputHidden"]);

                return (
                  <Cell key={cellId} className="cell">
                    <Input hidden={sourceHidden} className="input-container">
                      {this.props.showPrompt && (
                        <Prompt
                          className="prompt"
                          counter={cell.get("execution_count")}
                        />
                      )}
                      <Source
                        language={language}
                        theme={this.props.theme}
                        className={this.props.sourceClassName}
                      >
                        {source}
                      </Source>
                    </Input>
                    <Outputs
                      hidden={outputHidden}
                      expanded={
                        cell.getIn(["metadata", "outputExpanded"]) || true
                      }
                    >
                      <Display
                        displayOrder={this.props.displayOrder}
                        outputs={cell.get("outputs").toJS()}
                        transforms={this.props.transforms}
                        expanded={true}
                      />
                    </Outputs>
                  </Cell>
                );

              case "markdown":
                const remarkPlugins = [math, remark2rehype, katex, stringify];
                const remarkRenderers = {
                  math: function blockMath(node: { value: string }) {
                    return <BlockMath>{node.value}</BlockMath>;
                  },
                  inlineMath: function inlineMath(node: { value: string }) {
                    return <InlineMath>{node.value}</InlineMath>;
                  },
                  element: function remarkElement(node: {
                    tagName: string;
                    properties: any;
                    children: any;
                  }) {
                    return React.createElement(
                      node.tagName,
                      node.properties,
                      node.children
                    );
                  },
                } as any;
                return (
                  <Cell key={cellId} className="cell">
                    <ContentMargin className="markdown">
                      <ReactMarkdown
                        escapeHtml={false}
                        source={source}
                        plugins={remarkPlugins}
                        renderers={remarkRenderers}
                      />
                    </ContentMargin>
                  </Cell>
                );

              case "raw":
                return (
                  <Cell key={cellId} className="cell">
                    <RawCell className="raw">{source}</RawCell>
                  </Cell>
                );

              default:
                return (
                  <Cell key={cellId} className="cell">
                    <Outputs>
                      <pre>{`Cell Type "${cellType}" is not implemented`}</pre>
                    </Outputs>
                  </Cell>
                );
            }
          })}
        </Cells>
        {this.props.theme === "dark" ? <DarkTheme /> : <LightTheme />}
      </div>
    );
  }
}
