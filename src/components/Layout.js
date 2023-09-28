import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';
import TopNavbar from '../components/TopNavbar';
import TableOfContent from '../components/TableOfContent';

// Every single page of this website has its content wrapped in this <Layout/> component
// It allows to:
// - import css files
// - Add stuff in the Head of the html page for SEO
// - Call the raptive script for ads
// - Add the nabbar on top
// - add the footer
// - add the table of content

// Import Styles = bootstrap + custom
// Custom must be AFTER bootstrap. It makes sure custom style are not overriden
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import AdInjector from './AdInjector';

export default function Layout({
  children,
  isTocEnabled,
  chartType,
  isHome = false,
}) {
  return (
    <>
      <AdInjector siteId="6434366c7ccf1c58d32ab68f" />

      <header>
        <TopNavbar />
      </header>

      <main className={isHome ? 'home' : 'not-home'}>{children}</main>

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
  keywords: PropTypes.string,
  isHome: PropTypes.bool,
};
