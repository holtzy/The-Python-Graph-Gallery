import './sectionLogo.css'

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// This component displays a logo representing a chart type of the gallery. Example: bar chart
// Logo has a different size depending on the window size.
export default function SectionLogo({ chartType }) {

    const data = useStaticQuery(graphql`
    query ChartFiles {
        allFile(filter: {relativeDirectory: {eq: "section"}, extension: {eq: "png"}}) {
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
    `)

    const image = data.allFile.edges.find(n => {
        return n.node.name === chartType
    });

    if (!image) {
        return null;
    }

    return (
        <Img alt={"todo"} fluid={image.node.childImageSharp.fluid} className="sectionLogoImg" />
    )
}
