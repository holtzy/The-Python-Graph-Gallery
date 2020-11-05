import React from "react"
import TitleAndDescription from '../components/TitleAndDescription'
import Layout from '../components/Layout'
import ChartFamilySection from '../components/ChartFamilySection'
import Container from 'react-bootstrap/Container'
import Contact from '../components/Contact'


const siteDescription = "<p>Welcome to the D3.js graph gallery: a collection of simple charts made with d3.js. D3.js is a JavaScript library for manipulating documents based on data.This gallery displays hundreds of chart, always providing reproducible & editable source code.If you're new to javascript and web development, this <a href='#'>online course</a> is probably the place to start &#128540;</p>"

export default function Home(props) {

  return (
    <Layout title="Python Graph Gallery">
      <TitleAndDescription
        title="The Python Graph Gallery"
        description={siteDescription}
      />
      <Container>
        <ChartFamilySection chartFamily="distribution" />
        <ChartFamilySection chartFamily="correlation" />
        <ChartFamilySection chartFamily="ranking" />
        <ChartFamilySection chartFamily="partOfAWhole" />
        <ChartFamilySection chartFamily="evolution" />
        <ChartFamilySection chartFamily="map" />
        <ChartFamilySection chartFamily="flow" />
        <ChartFamilySection chartFamily="general" />
        <Contact />
      </Container>
    </Layout >
  )
}
