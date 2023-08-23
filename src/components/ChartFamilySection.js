import './chartFamilySection.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionLogoWithOverlay from './SectionLogoWithOverlay';
import { chartTypesInfo } from '../util/sectionDescriptions';
import { fullUrlToInternalLink } from '../util/utils';

const TITLES = {
  distribution: 'Distribution',
  correlation: 'Correlation',
  ranking: 'Ranking',
  partOfAWhole: 'Part Of A Whole',
  evolution: 'Evolution',
  map: 'Map',
  flow: 'Flow',
  general: 'General Knowledge',
};

export default function ChartFamilySection({ chartFamily }) {
  const allLogos = chartTypesInfo
    .filter((chart) => chart.family === chartFamily)
    .map((chart, id) => {
      const link = fullUrlToInternalLink(chart.pythonURL);
      return (
        <Col key={id} xs={4} md={2} className="col-1-7">
          <SectionLogoWithOverlay
            link={link}
            chartType={chart.logo}
            caption={chart.label}
          />
        </Col>
      );
    });

  return (
    <div style={{ paddingBottom: 15 }}>
      <h2 id="Related charts" className={'sectionTitle ' + chartFamily}>
        {TITLES?.[chartFamily]}
      </h2>
      <Row>{allLogos}</Row>
    </div>
  );
}
