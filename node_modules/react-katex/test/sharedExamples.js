import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import KaTeX from 'katex';

export default (Component, { wrapperTag, displayMode }) => {
  const sumFormula = '\\sum_0^\\infty';
  const integralFormula = '\\int_{-infty}^\\infty';
  const invalidCommandFormula = '\\inta';
  const incompleteFormula = '\\sum_{';
  const renderError = (error) => (
    <span className={'error'}>{`${error.name}: Cannot render this formula`}</span>
  );

  context('when passing the formula as props', () => {
    it('renders correctly', () => {
      const math = shallow(<Component math={sumFormula} />);

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(sumFormula, { displayMode }) }</${wrapperTag}>`
      );
    });

    it('updates after props are updated', () => {
      const math = shallow(<Component math={sumFormula} />);

      math.setProps({
        math: integralFormula
      });

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(integralFormula, { displayMode }) }</${wrapperTag}>`
      );
    });
  });

  context('when passing the formula as child', () => {
    it('renders correctly', () => {
      const math = shallow(<Component>{ integralFormula }</Component>);

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(integralFormula, { displayMode }) }</${wrapperTag}>`
      );
    });

    it('updates after props are updated', () => {
      const math = shallow(<Component>{ integralFormula }</Component>);

      math.setProps({
        children: sumFormula
      });

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(sumFormula, { displayMode }) }</${wrapperTag}>`
      );

    });
  });

  describe('error handling', () => {
    it('updates when passing from invalid to valid formula', () => {
      const math = shallow(
        <Component
          math={invalidCommandFormula}
          renderError={renderError}
        />
      );

      math.setProps({
        math: integralFormula
      });

      expect(math.html()).to.equal(
        `<${wrapperTag}>${ KaTeX.renderToString(integralFormula, { displayMode }) }</${wrapperTag}>`
      );
    });

    it('updates when passing from valid to invalid formula', () => {
      const math = shallow(
        <Component
          math={integralFormula}
          renderError={renderError}
        />
      );

      math.setProps({
        math: invalidCommandFormula
      });

      expect(math.html()).to.equal(
        '<span class="error">ParseError: Cannot render this formula</span>'
      );
    });

    context('when using default error handler', () => {
      it('renders the formula with the wrong part highlighted in default color', () => {
        const math = shallow(
          <Component math={invalidCommandFormula} />
        );

        expect(math.html()).to.include('color:#cc0000;');
      });

      context('when passing custom error color', () => {
        it('renders the formula with the wrong part highlighted in custom color', () => {
          const math = shallow(
            <Component
              errorColor={'blue'}
              math={invalidCommandFormula}
            />
          );

          expect(math.html()).to.include('color:blue;');
        });
      });

      context('when error is caused by an invalid prop type', () => {
        it('renders error message', () => {
          const math = shallow(<Component displayMode math={123} />);

          expect(math.html()).to.equal(
            `<${wrapperTag}>KaTeX can only parse string typed expression</${wrapperTag}>`
          );
        });
      });

      context('when error is caused while parsing math expression', () => {
        it('renders error message', () => {
          const math = shallow(
            <Component math={incompleteFormula} />
          );

          expect(math.html()).to.equal(
            `<${wrapperTag}>KaTeX parse error: Expected '}', got 'EOF' at end of input: \\sum_{</${wrapperTag}>`
          );
        });
      });
    });

    context('when using custom error handler', () => {
      it('renders the returned value from `renderError` prop', () => {
        const math = shallow(
          <Component
            math={invalidCommandFormula}
            renderError={renderError}
          />
        );

        expect(math.html()).to.equal(
          '<span class="error">ParseError: Cannot render this formula</span>'
        );
      });

      context('when error is caused while parsing math expression', () => {
        it('still uses custom handler', () => {
          const math = shallow(
            <Component math={incompleteFormula} renderError={renderError} />
          );

          expect(math.html()).to.equal(
            '<span class="error">ParseError: Cannot render this formula</span>'
          );
        });
      });
    });
  });
};
