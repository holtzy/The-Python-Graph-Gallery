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

// This is for ESLint, it does not understand that process is a global variable in a gatsby environment
/*global process*/

// Import Styles = bootstrap + custom
// Custom must be AFTER bootstrap. It makes sure custom style are not overriden
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

export default function Layout({
  children,
  isTocEnabled,
  chartType,
  isHome = false,
}) {
  return (
    <>
      {/* <Helmet>
        {process.env.NODE_ENV === 'production' && (
          <script>
            {`(function (w, d) {
              w.adthrive = w.adthrive || {};
              w.adthrive.cmd = w.adthrive.cmd || [];
              w.adthrive.plugin = "adthrive-ads-manual";
              w.adthrive.host = "ads.adthrive.com";
              var s = d.createElement("script");
              s.async = true;
              s.referrerpolicy = "no-referrer-when-downgrade";
              s.src =
                "https://" +
                w.adthrive.host +
                "/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer=" +
                w.encodeURIComponent(w.location.href) +
                "&cb=" +
                (Math.floor(Math.random() * 100) + 1);
              var n = d.getElementsByTagName("script")[0];
              n.parentNode.insertBefore(s, n);
            })(window, document);`}
          </script>
        )}
      </Helmet> */}

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
