(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('katex')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'katex'], factory) :
	(factory((global.ReactKaTeX = global.ReactKaTeX || {}),global.React,global.PropTypes,global.katex));
}(this, (function (exports,React,PropTypes,KaTeX) { 'use strict';

React = React && 'default' in React ? React['default'] : React;
PropTypes = PropTypes && 'default' in PropTypes ? PropTypes['default'] : PropTypes;
KaTeX = KaTeX && 'default' in KaTeX ? KaTeX['default'] : KaTeX;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var createMathComponent = function createMathComponent(Component, _ref) {
  var displayMode = _ref.displayMode;

  var MathComponent = function (_React$Component) {
    inherits(MathComponent, _React$Component);

    function MathComponent(props) {
      classCallCheck(this, MathComponent);

      var _this = possibleConstructorReturn(this, (MathComponent.__proto__ || Object.getPrototypeOf(MathComponent)).call(this, props));

      _this.usedProp = props.math ? 'math' : 'children';

      _this.state = _this.createNewState(null, props);
      return _this;
    }

    createClass(MathComponent, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps() {
        this.setState(this.createNewState);
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return nextProps[this.usedProp] !== this.props[this.usedProp];
      }
    }, {
      key: 'createNewState',
      value: function createNewState(prevState, props) {
        try {
          var html = this.generateHtml(props);

          return { html: html, error: undefined };
        } catch (error) {
          if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
            return { error: error };
          }

          throw error;
        }
      }
    }, {
      key: 'generateHtml',
      value: function generateHtml(props) {
        var errorColor = props.errorColor,
            renderError = props.renderError;


        return KaTeX.renderToString(props[this.usedProp], {
          displayMode: displayMode,
          errorColor: errorColor,
          throwOnError: !!renderError
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            html = _state.html;
        var renderError = this.props.renderError;


        if (error) {
          return renderError ? renderError(error) : React.createElement(Component, { html: '' + error.message });
        }

        return React.createElement(Component, { html: html });
      }
    }]);
    return MathComponent;
  }(React.Component);

  MathComponent.propTypes = {
    children: PropTypes.string,
    errorColor: PropTypes.string,
    math: PropTypes.string,
    renderError: PropTypes.func
  };

  return MathComponent;
};

var InlineMath = function InlineMath(_ref) {
  var html = _ref.html;

  return React.createElement('span', { dangerouslySetInnerHTML: { __html: html } });
};

InlineMath.propTypes = {
  html: PropTypes.string.isRequired
};

var InlineMath$1 = createMathComponent(InlineMath, { displayMode: false });

var BlockMath = function BlockMath(_ref) {
  var html = _ref.html;

  return React.createElement('div', { dangerouslySetInnerHTML: { __html: html } });
};

BlockMath.propTypes = {
  html: PropTypes.string.isRequired
};

var BlockMath$1 = createMathComponent(BlockMath, { displayMode: true });

exports.InlineMath = InlineMath$1;
exports.BlockMath = BlockMath$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
