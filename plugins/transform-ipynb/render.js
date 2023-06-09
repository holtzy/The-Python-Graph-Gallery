"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const commutable = require("@nteract/commutable");
const displayArea = require("@nteract/display-area");
const presentationalComponents = require("@nteract/presentational-components");
const transforms_1 = require("@nteract/transforms");
const transforms = require("react-katex");
const reactMarkdownWithHtml = __importDefault(
  require("react-markdown/with-html")
);
const katex = __importDefault(require("rehype-katex"));
const stringify = __importDefault(require("rehype-stringify"));
const remarkMath = __importDefault(require("remark-math"));
const remarkRehype = __importDefault(require("remark-rehype"));
const styled = __importDefault(require("styled-components"));
const ContentMargin = styled.default.div`
  padding-left: calc(var(--prompt-width, 50px) + 10px);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
`;
const RawCell = styled.default.pre`
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    #efefef 10px,
    #f1f1f1 20px
  );
`;
// Converts style in string to JSON object
const toObj = (input) => {
  let value = input;
  if (value[value.length - 1] === ";") {
    value = value.substr(0, value.length - 1);
  }
  const result = {};
  const attr = value.split(";");
  for (let i = 0; i < attr.length; i++) {
    const entry = attr[i].split(":");
    let key = entry.splice(0, 1)[0];
    key = key
      .split("-")
      .map((el, i) => {
        if (i === 0) return el;
        return el.charAt(0).toUpperCase() + el.slice(1);
      })
      .join("");
    result[key] = entry.join(":").trim();
  }
  return result;
};

class NotebookRender extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      notebook: commutable.fromJS(props.notebook),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notebook !== this.props.notebook) {
      this.setState({ notebook: commutable.fromJS(nextProps.notebook) });
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
    return React.createElement(
      "div",
      { className: "notebook-render" },
      React.createElement(
        presentationalComponents.Cells,
        null,
        cellOrder.map((cellId) => {
          const cell = cellMap.get(cellId);
          const cellType = cell.get("cell_type", "");
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
              return React.createElement(
                presentationalComponents.Cell,
                { key: cellId, className: "cell" },
                React.createElement(
                  presentationalComponents.Input,
                  { hidden: sourceHidden, className: "input-container" },
                  this.props.showPrompt &&
                    React.createElement(presentationalComponents.Prompt, {
                      className: "prompt",
                      counter: cell.get("execution_count"),
                    }),
                  React.createElement(
                    presentationalComponents.Source,
                    {
                      language: language,
                      theme: this.props.theme,
                      className: this.props.sourceClassName,
                    },
                    source
                  )
                ),
                React.createElement(
                  presentationalComponents.Outputs,
                  {
                    hidden: outputHidden,
                    expanded:
                      cell.getIn(["metadata", "outputExpanded"]) || true,
                  },
                  React.createElement(displayArea.Display, {
                    displayOrder: this.props.displayOrder,
                    outputs: cell.get("outputs").toJS(),
                    transforms: this.props.transforms,
                    expanded: true,
                  })
                )
              );
            case "markdown":
              const remarkPlugins = [
                remarkMath.default,
                remarkRehype.default,
                katex.default,
                stringify.default,
              ];
              const remarkRenderers = {
                math: function blockMath(node) {
                  return React.createElement(
                    transforms.BlockMath,
                    null,
                    node.value
                  );
                },
                inlineMath: function inlineMath(node) {
                  return React.createElement(
                    transforms.InlineMath,
                    null,
                    node.value
                  );
                },
                element: function remarkElement(node) {
                  if (node.tagName === "math") {
                    return node.children;
                  }
                  if (node.tagName === "img") {
                    return React.createElement(node.tagName, node.properties);
                  }
                  if (node.tagName === "br") {
                    return React.createElement(node.tagName, node.properties);
                  }
                  // Separate properties known to cause bugs and handle them separately
                  let _a = node.properties,
                    { ariaHidden, style } = _a,
                    props = __rest(_a, ["ariaHidden", "style"]);
                  // aria-hidden should be in the normal format
                  if (ariaHidden) {
                    props["aria-hidden"] = ariaHidden;
                  }
                  // Style must be an object
                  if (typeof style === "string") {
                    props["style"] = toObj(style);
                  } else if (typeof style === "object") {
                    props["style"] = style;
                  }
                  return React.createElement(
                    node.tagName,
                    props,
                    node.children
                  );
                },
              };
              return React.createElement(
                presentationalComponents.Cell,
                { key: cellId, className: "cell" },
                React.createElement(
                  ContentMargin,
                  { className: "markdown" },
                  React.createElement(reactMarkdownWithHtml.default, {
                    escapeHtml: false,
                    source: source,
                    plugins: remarkPlugins,
                    renderers: remarkRenderers,
                  })
                )
              );
            case "raw":
              return React.createElement(
                presentationalComponents.Cell,
                { key: cellId, className: "cell" },
                React.createElement(RawCell, { className: "raw" }, source)
              );
            default:
              return React.createElement(
                presentationalComponents.Cell,
                { key: cellId, className: "cell" },
                React.createElement(
                  presentationalComponents.Outputs,
                  null,
                  React.createElement(
                    "pre",
                    null,
                    `Cell Type "${cellType}" is not implemented`
                  )
                )
              );
          }
        })
      ),
      this.props.theme === "dark"
        ? React.createElement(presentationalComponents.DarkTheme, null)
        : React.createElement(presentationalComponents.LightTheme, null)
    );
  }
}

NotebookRender.defaultProps = {
  displayOrder: transforms_1.displayOrder,
  notebook: commutable.appendCellToNotebook(
    commutable.emptyNotebook,
    commutable.createCodeCell().set("source", "# where's the content?")
  ),
  theme: "light",
  transforms: transforms_1.transforms,
  showPrompt: true,
};

exports.default = NotebookRender;
