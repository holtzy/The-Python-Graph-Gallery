import React from 'react';
import PropTypes from 'prop-types';
import createMathComponent from './createMathComponent';

const BlockMath = ({ html }) => {
  return <div dangerouslySetInnerHTML={{__html: html}} />;
};

BlockMath.propTypes = {
  html: PropTypes.string.isRequired
};

export default createMathComponent(BlockMath, { displayMode: true });
