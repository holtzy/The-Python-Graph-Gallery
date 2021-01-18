import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import SideLogos from "../components/SideLogos"
import TableOfContent from '../components/TableOfContent'

// Import Styles = bootstrap + custom
import "../styles/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Layout component: add header + footer + TOC to content
export default function Layout({ children, title, isTocEnabled, chartType }) {

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          href="/logo/D3_single_small.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Montserrat"
          rel="stylesheet"
        />
      </Helmet>

      <header>
        <TopNavbar />
      </header>

      <main>{children}</main>

      <SideLogos />

      <Footer />

      { isTocEnabled && <TableOfContent chartType={chartType} />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  isTocEnabled: PropTypes.bool,
  chartType: PropTypes.string
};
