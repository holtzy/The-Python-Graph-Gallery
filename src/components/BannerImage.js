import "./chartImage.css";

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// This component displays a logo representing a sponsor of the gallery.
export default function BannerImage({ imgName, caption }) {

  const data = useStaticQuery(graphql`
    query MyQuery3 {
      allFile(filter: { relativeDirectory: { eq: "banner" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcWebp
                srcSet
              }
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

  return (
    <>
      <div className="chartImageContainer">
        <Img
          alt={imgName}
          fluid={image.node.childImageSharp.fluid}
          className="chartImageImg"
        />
        <div className="chartImageOverlay">
          <div className="chartImageOverlayText">
            <p>{caption}</p>
          </div>
        </div>
      </div>
    </>
  );
}
