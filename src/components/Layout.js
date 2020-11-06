import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer.js";
import TopNavbar from "./TopNavbar.js";
import TableOfContent from "../components/TableOfContent";

// Import Styles = bootstrap + custom
import "../styles/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Layout component: add header + footer to content
export default function Layout({ children, title }) {
  console.log("children", children);

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

      <Footer />

      <TableOfContent />
    </>
  );
}
