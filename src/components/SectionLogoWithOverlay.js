import './sectionLogoWithOverlay.css';
import { Link } from 'gatsby';
import React from 'react';
import SectionLogo from './SectionLogo';
import { chartTypesInfo } from '../util/sectionDescriptions';

const generalList = chartTypesInfo
  .filter((info) => info.family === 'general')
  .map((info) => info.logo);

export default function SectionLogoWithOverlay({ chartType, caption, link }) {
  // If the logo is in the "general" family, do not display an overlay.
  const isGeneralFamily = generalList.includes(chartType);

  return (
    <>
      {!isGeneralFamily ? (
        <>
          <div className="sectionLogoContainer">
            <Link to={link}>
              <SectionLogo chartType={chartType} />
              <div className="sectionLogoOverlay">
                <div className="sectionLogoOverlayText">+</div>
              </div>
            </Link>
          </div>
          <p className="sectionLogoCaption">{caption}</p>
        </>
      ) : (
        <div className="sectionLogoContainer">
          <Link to={link}>
            <SectionLogo chartType={chartType} />
          </Link>
          <p className="sectionLogoCaption">{caption}</p>
        </div>
      )}
    </>
  );
}
