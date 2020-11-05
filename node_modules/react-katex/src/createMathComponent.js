import React from 'react';
import PropTypes from 'prop-types';
import KaTeX from 'katex';

const createMathComponent = (Component, { displayMode }) => {
  class MathComponent extends React.Component {
    constructor(props) {
      super(props);

      this.usedProp = props.math ? 'math' : 'children';

      this.state = this.createNewState(null, props);
    }

    componentWillReceiveProps() {
      this.setState(this.createNewState);
    }

    shouldComponentUpdate(nextProps) {
      return nextProps[this.usedProp] !== this.props[this.usedProp];
    }

    createNewState(prevState, props) {
      try {
        const html = this.generateHtml(props);

        return { html, error: undefined };
      } catch (error) {
        if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
          return { error };
        }

        throw error;
      }
    }

    generateHtml(props) {
      const { errorColor, renderError } = props;

      return KaTeX.renderToString(props[this.usedProp], {
        displayMode,
        errorColor,
        throwOnError: !!renderError
      });
    }

    render() {
      const { error, html } = this.state;
      const { renderError } = this.props;

      if (error) {
        return renderError ? (
          renderError(error)
        ) : (
          <Component html={`${error.message}`} />
        );
      }

      return <Component html={html} />;
    }
  }

  MathComponent.propTypes = {
    children: PropTypes.string,
    errorColor: PropTypes.string,
    math: PropTypes.string,
    renderError: PropTypes.func
  };

  return MathComponent;
};

export default createMathComponent;
