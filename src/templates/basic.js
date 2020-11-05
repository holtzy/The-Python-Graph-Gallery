import './basic.css'

import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import TitleAndDescription from '../components/TitleAndDescription'
import ChartFamilySection from '../components/ChartFamilySection'
import Contact from '../components/Contact'

export default function Template({
    data,
}) {
    const { title, description, family, chartType } = data.jupyterNotebook.metadata
    return (
        <Layout title={title}>
            <TitleAndDescription
                title={title}
                description={description}
                chartType={chartType}
            />
            <Container>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: data.jupyterNotebook.html }}
                />
            </Container>
            <div className="greySection">
                <Container>
                    <ChartFamilySection chartFamily={family} hasGreyBackground />
                </Container>
            </div>
            <Container>
                <Contact />
            </Container>
        </Layout>
    )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
      html
      metadata {
          title
          description,
          seoDescription,
          family,
          chartType,
          keywords
      }
    }
  }
`
