import './sectionLogo.css';

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import anim150 from '../../static/section/anim150.gif';
import time150 from '../../static/section/time150.gif';

// This component displays a logo representing a chart type of the gallery. Example: bar chart
// Logo has a different size depending on the window size.
export default function SectionLogo({ chartType }) {
  if (chartType === 'anim150') {
    return (
      <img
        src={anim150}
        alt="Animation with python"
        style={{ width: '100%' }}
      />
    );
  }
  if (chartType === 'time150') {
    return (
      <img
        src={time150}
        alt="Timeseries with python"
        style={{ width: '100%' }}
      />
    );
  }

  const data = useStaticQuery(graphql`
    query ChartFiles {
      allFile(
        filter: {
          relativeDirectory: { eq: "section" }
          extension: { eq: "png" }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const image = data.allFile.edges.find((n) => {
    return n.node.name === chartType;
  });

  if (!image) {
    return null;
  }
  const chartName = chartType.replace('150', '').replace('Small', '');

  return (
    <GatsbyImage
      image={image.node.childImageSharp.gatsbyImageData}
      alt={'logo of a chart:' + chartName}
      className="sectionLogoImg"
    />
  );
}

SectionLogo.propTypes = {
  chartType: PropTypes.string,
};
