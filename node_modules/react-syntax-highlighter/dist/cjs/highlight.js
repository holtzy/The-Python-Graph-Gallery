"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _createElement = _interopRequireDefault(require("./create-element"));

var newLineRegex = /\n/g;

function getNewLines(str) {
  return str.match(newLineRegex);
}

function getLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      _ref$numberProps = _ref.numberProps,
      numberProps = _ref$numberProps === void 0 ? {} : _ref$numberProps;
  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    var properties = typeof numberProps === 'function' ? numberProps(number) : numberProps;
    return _react.default.createElement("span", (0, _extends2.default)({
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number"
    }, properties), "".concat(number, "\n"));
  });
}

function LineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      codeStyle = _ref2.codeStyle,
      _ref2$containerProps = _ref2.containerProps,
      containerProps = _ref2$containerProps === void 0 ? {} : _ref2$containerProps,
      numberProps = _ref2.numberProps,
      startingLineNumber = _ref2.startingLineNumber;
  containerProps.style = containerProps.style || {
    float: 'left',
    paddingRight: '10px'
  };
  return _react.default.createElement("code", (0, _extends2.default)({}, containerProps, {
    style: Object.assign({}, codeStyle, containerProps.style)
  }), getLineNumbers({
    lines: codeString.replace(/\n$/, '').split('\n'),
    numberProps: numberProps,
    startingLineNumber: startingLineNumber
  }));
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineProps = _ref3.lineProps,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? [] : _ref3$className;
  var properties = (typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps) || {};
  properties.className = properties.className ? className.concat(properties.className) : className;
  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: className
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }

  return newTree;
}

function wrapLinesInSpan(codeTree, lineProps) {
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);

    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = newTree.length + 1;
        var newChild = {
          type: 'text',
          value: "".concat(text, "\n")
        };

        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));

          newTree.push(createLineElement({
            children: _children,
            lineNumber: lineNumber,
            lineProps: lineProps
          }));
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];

          if (stringChild) {
            var lastLineInPreviousSpan = {
              type: 'text',
              value: "".concat(text)
            };
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            newTree.push(createLineElement({
              children: [newChild],
              lineNumber: lineNumber,
              lineProps: lineProps,
              className: node.properties.className
            }));
          }
        } else {
          newTree.push(createLineElement({
            children: [newChild],
            lineNumber: lineNumber,
            lineProps: lineProps,
            className: node.properties.className
          }));
        }
      });
      lastLineBreakIndex = index;
    }

    index++;
  };

  while (index < tree.length) {
    _loop();
  }

  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);

    if (children && children.length) {
      newTree.push(createLineElement({
        children: children,
        lineNumber: newTree.length + 1,
        lineProps: lineProps
      }));
    }
  }

  return newTree;
}

function defaultRenderer(_ref4) {
  var rows = _ref4.rows,
      stylesheet = _ref4.stylesheet,
      useInlineStyles = _ref4.useInlineStyles;
  return rows.map(function (node, i) {
    return (0, _createElement.default)({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
}

function getCodeTree(_ref5) {
  var astGenerator = _ref5.astGenerator,
      language = _ref5.language,
      code = _ref5.code,
      defaultCodeValue = _ref5.defaultCodeValue;

  if (astGenerator.getLanguage) {
    var hasLanguage = language && astGenerator.getLanguage(language);

    if (language === 'text') {
      return {
        value: defaultCodeValue,
        language: 'text'
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }

  try {
    return language && language !== 'text' ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}

function _default(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref6) {
    var language = _ref6.language,
        children = _ref6.children,
        _ref6$style = _ref6.style,
        style = _ref6$style === void 0 ? defaultStyle : _ref6$style,
        _ref6$customStyle = _ref6.customStyle,
        customStyle = _ref6$customStyle === void 0 ? {} : _ref6$customStyle,
        _ref6$codeTagProps = _ref6.codeTagProps,
        codeTagProps = _ref6$codeTagProps === void 0 ? {
      style: style['code[class*="language-"]']
    } : _ref6$codeTagProps,
        _ref6$useInlineStyles = _ref6.useInlineStyles,
        useInlineStyles = _ref6$useInlineStyles === void 0 ? true : _ref6$useInlineStyles,
        _ref6$showLineNumbers = _ref6.showLineNumbers,
        showLineNumbers = _ref6$showLineNumbers === void 0 ? false : _ref6$showLineNumbers,
        _ref6$startingLineNum = _ref6.startingLineNumber,
        startingLineNumber = _ref6$startingLineNum === void 0 ? 1 : _ref6$startingLineNum,
        lineNumberContainerProps = _ref6.lineNumberContainerProps,
        lineNumberProps = _ref6.lineNumberProps,
        wrapLines = _ref6.wrapLines,
        _ref6$lineProps = _ref6.lineProps,
        lineProps = _ref6$lineProps === void 0 ? {} : _ref6$lineProps,
        renderer = _ref6.renderer,
        _ref6$PreTag = _ref6.PreTag,
        PreTag = _ref6$PreTag === void 0 ? 'pre' : _ref6$PreTag,
        _ref6$CodeTag = _ref6.CodeTag,
        CodeTag = _ref6$CodeTag === void 0 ? 'code' : _ref6$CodeTag,
        _ref6$code = _ref6.code,
        code = _ref6$code === void 0 ? Array.isArray(children) ? children[0] : children : _ref6$code,
        astGenerator = _ref6.astGenerator,
        rest = (0, _objectWithoutProperties2.default)(_ref6, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "startingLineNumber", "lineNumberContainerProps", "lineNumberProps", "wrapLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
    astGenerator = astGenerator || defaultAstGenerator;
    var lineNumbers = showLineNumbers ? _react.default.createElement(LineNumbers, {
      containerProps: lineNumberContainerProps,
      codeStyle: codeTagProps.style || {},
      numberProps: lineNumberProps,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: '#fff'
    };
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: 'hljs'
    });

    if (!astGenerator) {
      return _react.default.createElement(PreTag, preProps, lineNumbers, _react.default.createElement(CodeTag, codeTagProps, code));
    }
    /*
     * some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined
     */


    wrapLines = renderer && wrapLines === undefined ? true : wrapLines;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: 'text',
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator: astGenerator,
      language: language,
      code: code,
      defaultCodeValue: defaultCodeValue
    });

    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }

    var tree = wrapLines ? wrapLinesInSpan(codeTree, lineProps) : codeTree.value;
    return _react.default.createElement(PreTag, preProps, lineNumbers, _react.default.createElement(CodeTag, codeTagProps, renderer({
      rows: tree,
      stylesheet: style,
      useInlineStyles: useInlineStyles
    })));
  };
}