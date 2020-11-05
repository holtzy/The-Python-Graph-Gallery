/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast-util-from-parse5
 * @fileoverview Transform Parse5’s AST to HAST.
 */

'use strict';

/* Dependencies. */
var information = require('property-information');
var camelcase = require('camelcase');
var vfileLocation = require('vfile-location');
var has = require('has');
var h = require('hastscript');

/* Expose. */
module.exports = wrapper;

/* Handlers. */
var map = {
  '#document': root,
  '#document-fragment': root,
  '#text': text,
  '#comment': comment,
  '#documentType': doctype
};

/**
 * Wrapper to normalise options.
 *
 * @param {ASTNode} ast - Parse5 node.
 * @param {VFile|Object?} [options] - Configuration.
 * @return {HASTNode} - HAST node.
 */
function wrapper(ast, options) {
  var settings = options || {};
  var file;

  if (settings.messages) {
    file = settings;
    settings = {};
  } else {
    file = settings.file;
  }

  return transform(ast, {
    file: file,
    toPosition: file ? vfileLocation(file).toPosition : null,
    verbose: settings.verbose,
    location: false
  });
}

/**
 * Transform a node.
 *
 * @param {ASTNode} ast - Parse5 node.
 * @param {Object} config - Configuration.
 * @return {HASTNode} - HAST node.
 */
function transform(ast, config) {
  var fn = has(map, ast.nodeName) ? map[ast.nodeName] : element;
  var children;
  var node;
  var position;

  if (ast.childNodes) {
    children = nodes(ast.childNodes, config);
  }

  node = fn(ast, children, config);

  if (ast.__location && config.toPosition) {
    config.location = true;
    position = location(ast.__location, ast, node, config);

    if (position) {
      node.position = position;
    }
  }

  return node;
}

/**
 * Transform children.
 *
 * @param {Array.<ASTNode>} children - Parse5 nodes.
 * @param {Object} config - Configuration.
 * @return {Array.<HASTNode>} - HAST nodes.
 */
function nodes(children, config) {
  var length = children.length;
  var index = -1;
  var result = [];

  while (++index < length) {
    result[index] = transform(children[index], config);
  }

  return result;
}

/**
 * Transform a document.
 *
 * Stores `ast.quirksMode` in `node.data.quirksMode`.
 *
 * @param {ASTNode.<Document>} ast - Parse5 document.
 * @param {Array.<ASTNode>} children - Children of `ast`.
 * @param {Object} config - Configuration.
 * @return {HASTRoot} - Root node.
 */
function root(ast, children, config) {
  var node = {
    type: 'root',
    children: children,
    data: {
      quirksMode: ast.quirksMode
    }
  };

  if (config.file && config.location) {
    node.position = location({
      startOffset: 0,
      endOffset: String(config.file).length
    }, ast, node, config);
  }

  return node;
}

/**
 * Transform a doctype.
 *
 * @param {ASTNode.<DocumentType>} ast - Parse5 doctype.
 * @return {HASTDoctype} - Doctype node.
 */
function doctype(ast) {
  return {
    type: 'doctype',
    name: ast.name || '',
    public: ast.publicId || null,
    system: ast.systemId || null
  };
}

/**
 * Transform a text.
 *
 * @param {ASTNode.<Text>} ast - Parse5 text.
 * @return {HASTText} - Text node.
 */
function text(ast) {
  return {type: 'text', value: ast.value};
}

/**
 * Transform a comment.
 *
 * @param {ASTNode.<Comment>} ast - Parse5 comment.
 * @return {HASTComment} - Comment node.
 */
function comment(ast) {
  return {type: 'comment', value: ast.data};
}

/**
 * Transform an element.
 *
 * @param {ASTNode.<Element>} ast - Parse5 element.
 * @param {Array.<ASTNode>} children - Children of `ast`.
 * @return {HASTElement} - Element node.
 */
function element(ast, children) {
  var props = {};
  var values = ast.attrs;
  var length = values.length;
  var index = -1;
  var attr;

  while (++index < length) {
    attr = values[index];
    props[(attr.prefix ? attr.prefix + ':' : '') + attr.name] = attr.value;
  }

  return h(ast.tagName, props, children);
}

/**
 * Create clean positional information.
 *
 * @param {Function} toPosition - Offset to position.
 * @param {Object?} [dirty] - Parse5 location information.
 * @return {Location} - Start and end positions.
 */
function loc(toPosition, dirty) {
  return {
    start: toPosition(dirty.startOffset),
    end: toPosition(dirty.endOffset)
  };
}

/**
 * Create clean positional information.
 *
 * @param {Object} info - Parse5 location information.
 * @param {HASTNode} node - HAST node.
 * @param {Object} ast - Parse5 node.
 * @param {Object} config - Options.
 * @return {Location} - Start and end positions.
 */
function location(info, ast, node, config) {
  var start = info.startOffset;
  var end = info.endOffset;
  var values = info.attrs || {};
  var propPositions = {};
  var prop;
  var name;
  var reference;

  for (prop in values) {
    name = (information(prop) || {}).propertyName || camelcase(prop);
    propPositions[name] = loc(config.toPosition, values[prop]);
  }

  /* Upstream: https://github.com/inikulin/parse5/issues/109 */
  if (node.type === 'element' && !info.endTag) {
    reference = node.children[node.children.length - 1];

    /* Unclosed with children: */
    if (reference && reference.position) {
      if (reference.position.end) {
        end = reference.position.end.offset;
      } else {
        end = null;
      }
    /* Unclosed without children: */
    } else if (info.startTag) {
      end = info.startTag.endOffset;
    }
  }

  if (config.verbose && node.type === 'element') {
    node.data = {
      position: {
        opening: loc(config.toPosition, info.startTag || info),
        closing: info.endTag ? loc(config.toPosition, info.endTag) : null,
        properties: propPositions
      }
    };
  }

  start = typeof start === 'number' ? config.toPosition(start) : null;
  end = typeof end === 'number' ? config.toPosition(end) : null;

  if (!start && !end) {
    return undefined;
  }

  return {start: start, end: end};
}
