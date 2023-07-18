import './titleAndDescription.css';
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import { Link } from 'gatsby';
import { chartTypesInfo } from '../util/sectionDescriptions';
import { fullUrlToInternalLink } from '../util/utils';
import { Container } from 'react-bootstrap';

// Note that the description received is a string that contains html.
// It was not possible to pass JSX since it is sometimes passed directly from
// the python notebooks metadata
export default function TitleAndDescription({ title, description, chartType }) {
  const chartInfo = chartTypesInfo.filter((chart) => chart.id === chartType)[0];

  return (
    <Container>
      <div className="titleAndDescription">
        <h1 className="mainTitle">{title}</h1>
        <hr className="smallHr" />
        {typeof description === 'string' ? (
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div className="description">{description}</div>
        )}

        {chartType && (
          <div style={{ marginTop: '10px' }}>
            <Link to={fullUrlToInternalLink(chartInfo.pythonURL)}>
              <Button size="sm">{chartInfo.label + ' section'}</Button>
            </Link>
            <a href={chartInfo.dataToVizURL}>
              <Button size="sm">About this chart</Button>
            </a>
          </div>
        )}
      </div>
    </Container>
  );
}

TitleAndDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  chartType: PropTypes.string,
};
