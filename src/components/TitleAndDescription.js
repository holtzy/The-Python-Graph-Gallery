import './titleAndDescription.css';
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import { Link } from 'gatsby';
import { chartTypesInfo } from '../util/sectionDescriptions';
import { fullUrlToInternalLink } from '../util/utils';
import { Container } from 'react-bootstrap';
import SectionLogo from './SectionLogo';

// Note that the description received is a string that contains html.
// It was not possible to pass JSX since it is sometimes passed directly from
// the python notebooks metadata
export default function TitleAndDescription({
  title,
  description,
  chartType,
  isRaptiveEnabled = true,
}) {
  const chartInfo = chartTypesInfo.find((chart) => chart.id === chartType);

  return (
    <Container>
      <div className="titleAndDescription">
        <div className="titleRow">
          <h1 className="mainTitle">{title}</h1>
          {chartInfo && (
            <div style={{ width: 100, minWidth: 100 }}>
              <SectionLogo chartType={chartInfo.logo} />
            </div>
          )}
        </div>

        <hr className="smallHr" />

        {typeof description === 'string' ? (
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div className="description">{description}</div>
        )}

        {chartInfo && (
          <div style={{ marginTop: '30px' }}>
            <Link to={fullUrlToInternalLink(chartInfo.pythonURL)}>
              <Button size="sm">{chartInfo.label + ' section'}</Button>
            </Link>
            <a href={chartInfo.dataToVizURL}>
              <Button size="sm">About this chart</Button>
            </a>
          </div>
        )}
      </div>

      {isRaptiveEnabled && (
        <div className="raptive-video-player" style={{ minHeight: 300 }} />
      )}
    </Container>
  );
}

TitleAndDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  chartType: PropTypes.string,
  isRaptiveEnabled: PropTypes.bool,
};
