import './chartImage.css';

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const allGifs = [
  'animated_chart',
  'animated_gapminder.gif',
  'animated_volcano.gif',
];

// This component displays a logo representing a chart type of the gallery. Example: bar chart
// Logo has a different size depending on the window size.
export default function ChartImage({ imgName, caption }) {
  if (allGifs.includes(imgName)) {
    return <p>TODO</p>;
  }

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "graph" } }) {
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
    return n.node.name.includes(imgName);
  });

  if (!image) {
    return null;
  }

  // Note: alt tag looks to be ignored?
  return (
    <>
      <div className="chartImageContainer">
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          alt={caption}
          className="chartImageImg"
        />
        {caption && (
          <div className="chartImageOverlay">
            <div className="chartImageOverlayText">
              <p>{caption}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

ChartImage.propTypes = {
  imgName: PropTypes.string,
  caption: PropTypes.string,
};
