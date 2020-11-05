import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"


export default function About() {
  return (
    <>
      <Helmet title="About the Python graph gallery">
        <title>the python graph gallery</title>
        <link href="/logo/D3_single_small.png" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <header></header>
      <main>
        <div className="container">
          <div>Here is the about page!</div>
          <Link to="/index">Go back home</Link>
        </div>
      </main>
    </>
  )
}
