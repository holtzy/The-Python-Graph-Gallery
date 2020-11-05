"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const commutable_1 = require("@nteract/commutable");
const display_area_1 = require("@nteract/display-area");
const presentational_components_1 = require("@nteract/presentational-components");
const transforms_1 = require("@nteract/transforms");
const react_katex_1 = require("react-katex");
const with_html_1 = __importDefault(require("react-markdown/with-html"));
const rehype_katex_1 = __importDefault(require("rehype-katex"));
const rehype_stringify_1 = __importDefault(require("rehype-stringify"));
const remark_math_1 = __importDefault(require("remark-math"));
const remark_rehype_1 = __importDefault(require("remark-rehype"));
const styled_components_1 = __importDefault(require("styled-components"));
const ContentMargin = styled_components_1.default.div `
  padding-left: calc(var(--prompt-width, 50px) + 10px);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
`;
const RawCell = styled_components_1.default.pre `
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    #efefef 10px,
    #f1f1f1 20px
  );
`;
class NotebookRender extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            notebook: commutable_1.fromJS(props.notebook),
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.notebook !== this.props.notebook) {
            this.setState({ notebook: commutable_1.fromJS(nextProps.notebook) });
        }
    }
    render() {
        const notebook = this.state.notebook;
        // Propagated from the hide_(all)_input nbextension
        const allSourceHidden = notebook.getIn(["metadata", "hide_input"]) || false;
        const language = notebook.getIn([
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
        return (React.createElement("div", { className: "notebook-render" },
            React.createElement(presentational_components_1.Cells, null, cellOrder.map((cellId) => {
                const cell = cellMap.get(cellId);
                const cellType = cell.get("cell_type", "");
                const source = cell.get("source", "");
                switch (cell.cell_type) {
                    case "code":
                        const sourceHidden = allSourceHidden ||
                            cell.getIn(["metadata", "inputHidden"]) ||
                            cell.getIn(["metadata", "hide_input"]);
                        const outputHidden = cell.get("outputs").size === 0 ||
                            cell.getIn(["metadata", "outputHidden"]);
                        return (React.createElement(presentational_components_1.Cell, { key: cellId, className: "cell" },
                            React.createElement(presentational_components_1.Input, { hidden: sourceHidden, className: "input-container" },
                                this.props.showPrompt && (React.createElement(presentational_components_1.Prompt, { className: "prompt", counter: cell.get("execution_count") })),
                                React.createElement(presentational_components_1.Source, { language: language, theme: this.props.theme, className: this.props.sourceClassName }, source)),
                            React.createElement(presentational_components_1.Outputs, { hidden: outputHidden, expanded: cell.getIn(["metadata", "outputExpanded"]) || true },
                                React.createElement(display_area_1.Display, { displayOrder: this.props.displayOrder, outputs: cell.get("outputs").toJS(), transforms: this.props.transforms, expanded: true }))));
                    case "markdown":
                        const remarkPlugins = [remark_math_1.default, remark_rehype_1.default, rehype_katex_1.default, rehype_stringify_1.default];
                        const remarkRenderers = {
                            math: function blockMath(node) {
                                return React.createElement(react_katex_1.BlockMath, null, node.value);
                            },
                            inlineMath: function inlineMath(node) {
                                return React.createElement(react_katex_1.InlineMath, null, node.value);
                            },
                            element: function remarkElement(node) {
                                return React.createElement(node.tagName, node.properties, node.children);
                            },
                        };
                        return (React.createElement(presentational_components_1.Cell, { key: cellId, className: "cell" },
                            React.createElement(ContentMargin, { className: "markdown" },
                                React.createElement(with_html_1.default, { escapeHtml: false, source: source, plugins: remarkPlugins, renderers: remarkRenderers }))));
                    case "raw":
                        return (React.createElement(presentational_components_1.Cell, { key: cellId, className: "cell" },
                            React.createElement(RawCell, { className: "raw" }, source)));
                    default:
                        return (React.createElement(presentational_components_1.Cell, { key: cellId, className: "cell" },
                            React.createElement(presentational_components_1.Outputs, null,
                                React.createElement("pre", null, `Cell Type "${cellType}" is not implemented`))));
                }
            })),
            this.props.theme === "dark" ? React.createElement(presentational_components_1.DarkTheme, null) : React.createElement(presentational_components_1.LightTheme, null)));
    }
}
exports.default = NotebookRender;
NotebookRender.defaultProps = {
    displayOrder: transforms_1.displayOrder,
    notebook: commutable_1.appendCellToNotebook(commutable_1.emptyNotebook, commutable_1.createCodeCell().set("source", "# where's the content?")),
    theme: "light",
    transforms: transforms_1.transforms,
    showPrompt: true,
};
