import "./sectionLogoWithOverlay.css";
import { Link } from "gatsby";
import React from "react";
import SectionLogo from "./SectionLogo";

export default function SectionLogoWithOverlay({ chartType, caption, link }) {
  return (
    <>
      <div className="sectionLogoContainer">
        <Link to={link}>
          <SectionLogo chartType={chartType} />
          <div className="sectionLogoOverlay">
            <div className="sectionLogoOverlayText">+</div>
          </div>
        </Link>
      </div>
      <p className="distributionSection sectionLogoCaption">{caption}</p>
    </>
  );
}
