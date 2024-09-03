import './allChartsModal.css';
import React from 'react';

import { Link } from 'gatsby';
import Modal from 'react-bootstrap/Modal';
import { chartTypesInfo } from '../util/sectionDescriptions';
import SectionLogo from './SectionLogo';
import { fullUrlToInternalLink } from '../util/utils';

export default function AllChartsModal({ show, handleClose }) {
  const [name, setName] = React.useState('');

  const logoList = chartTypesInfo
    .filter(
      (chart) =>
        ![
          'matplotlib',
          'drawarrow',
          'pyfonts',
          'seaborn',
          'plotnine',
          'pypalettes',
          'pandas',
        ].includes(chart.id)
    )
    .map((chart, i) => {
      return (
        <div
          key={i}
          className="menuModalLogo"
          onMouseEnter={() => setName(chart.label)}
          onMouseLeave={() => setName('')}
        >
          <Link to={fullUrlToInternalLink(chart.pythonURL)}>
            <SectionLogo chartType={chart.logo} />
          </Link>
        </div>
      );
    });

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
      className="menuModal"
    >
      <p className="menuModalCloseModalButton" onClick={handleClose}>
        &#10005;
      </p>
      <div className="menuModalAllLogoContainer">{logoList}</div>
      <p className="menuModalCharName">{name}</p>
    </Modal>
  );
}
