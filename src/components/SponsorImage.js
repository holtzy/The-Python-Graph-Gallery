import "./chartImage.css";

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

// This component displays a logo representing a sponsor of the gallery.
export default function SponsorImage({ imgName, caption }) {

  const data = useStaticQuery(graphql`query MyQuery2 {
  allFile(filter: {relativeDirectory: {eq: "sponsor"}}) {
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
}`);

  const image = data.allFile.edges.find((n) => {
    return n.node.name.includes(imgName);
  });

  if (!image) {
    return null;
  }

  return <>
    <div className="chartImageContainer">
      <GatsbyImage
        image={image.node.childImageSharp.gatsbyImageData}
        alt={imgName}
        className="chartImageImg" />
      <div className="chartImageOverlay">
        <div className="chartImageOverlayText">
          <p>{caption}</p>
        </div>
      </div>
    </div>
  </>;
}
