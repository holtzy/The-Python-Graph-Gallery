import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import SideLogos from "../components/SideLogos";
import TableOfContent from "../components/TableOfContent";

// This is for ESLint, it does not understand that process is a global variable in a gatsby environment
/*global process*/

// Import Styles = bootstrap + custom
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Layout component: add header + footer + TOC to content
export default function Layout({
  children,
  title,
  isTocEnabled,
  chartType,
  seoDescription,
  keywords,
  isHome = false
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Montserrat"
          rel="stylesheet"
        />
        <meta
          name="description"
          content={seoDescription || "How to build a chart with Python"}
        />
        <meta name="author" content="Yan Holtz" />
        <meta
          name="keywords"
          content={keywords || "python, chart, graph, code, viz, dataviz"}
        />

        <meta property="og:site_name" content="The Python Graph Gallery" />
        <meta
          property="og:title"
          content={title + " | The Python Graph Gallery"}
        />
        <meta
          property="og:image"
          content="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"
        />
        <meta property="og:description" content={seoDescription} />
        <meta
          name="twitter:image"
          content="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"
        />
        {process.env.NODE_ENV === 'production' && 
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
        }
      </Helmet>

      <header>
        <TopNavbar />
      </header>

      <main className={isHome ? "home" : "not-home"}>{children}</main>

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
  keywords: PropTypes.string,
  isHome: PropTypes.bool
};
