import "./titleAndDescription.css";
import React from "react";
import PropTypes from 'prop-types';

import SocialMediaButtons from "./SocialMediaButtons";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";
import { chartTypesInfo } from "../util/sectionDescriptions";
import { fullUrlToInternalLink } from "../util/utils";
import Sponsors from "../components/Sponsors";

// Note that the description received is a string that contains html.
// It was not possible to pass JSX since it is sometimes passed directly from
// the python notebooks metadata
export default function TitleAndDescription({ title, description, chartType }) {
  const chartInfo = chartTypesInfo.filter((chart) => chart.id === chartType)[0];

  return (
    <>
      <div className="titleAndDescription">
        <h1 className="mainTitle">{title}</h1>
        <hr className="smallHr" />
        <SocialMediaButtons />
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {chartType && (
          <div style={{ marginTop: "10px" }}>
            <Link to={fullUrlToInternalLink(chartInfo.pythonURL)}>
              <Button size="sm">{chartInfo.label + " section"}</Button>
            </Link>
            <a href={chartInfo.dataToVizURL}>
              <Button size="sm">About this chart</Button>
            </a>
          </div>
        )}
      </div>
      <Sponsors />
    </>
  );
}

TitleAndDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  chartType: PropTypes.string
};
