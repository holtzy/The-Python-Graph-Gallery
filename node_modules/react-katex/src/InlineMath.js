import React from 'react';
import PropTypes from 'prop-types';
import createMathComponent from './createMathComponent';

const InlineMath = ({ html }) => {
  return <span dangerouslySetInnerHTML={{__html: html}} />;
};

InlineMath.propTypes = {
  html: PropTypes.string.isRequired
};

export default createMathComponent(InlineMath, { displayMode: false });
