import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';

import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import SideLogos from "../components/SideLogos"
import TableOfContent from '../components/TableOfContent'

// Import Styles = bootstrap + custom
import "../styles/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Layout component: add header + footer + TOC to content
export default function Layout({ children, title, isTocEnabled, chartType, seoDescription, keywords }) {

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Montserrat"
          rel="stylesheet"
        />
        <meta name="description" content={seoDescription || 'How to build a chart with Python'} />
        <meta name="author" content="Yan Holtz" />
        <meta name="keywords" content={keywords || 'python, chart, graph, code, viz, dataviz'} />

        <meta property="og:site_name" content="The Python Graph Gallery" />
        <meta property="og:title" content={title + " | The Python Graph Gallery"} />
        <meta property="og:image" content="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true" />
        <meta property="og:description" content={seoDescription} />
        <meta name="twitter:image" content="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true" />
      </Helmet>

      <header>
        <TopNavbar />
      </header>

      <main>{children}</main>

      <SideLogos />

      <Footer />

      {isTocEnabled && <TableOfContent chartType={chartType} />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  isTocEnabled: PropTypes.bool,
  chartType: PropTypes.string,
  seoDescription: PropTypes.string,
  keywords: PropTypes.string
};
