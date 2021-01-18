import React from "react";
import PropTypes from 'prop-types';
import "./contact.css";
import Button from "react-bootstrap/Button";

// Component for the Contact & Edit section at the bottom of each page.
// If a pageSlug prop is provided, a link to the according github page will be provided.
export default function Contact({ pageSlug, isNotebook }) {

  const editPageUrl = 'https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/src/notebooks/' + pageSlug + ".ipynb"

  return (
    <div className="contactSection lightSection">
      <h2 id="Edit this page" className="contactTitle">{isNotebook ? "Contact & Edit" : "Contact"}</h2>
      <p className="contactText">
        👋 This document is a work by{" "}
        <a href="https://www.yan-holtz.com">Yan Holtz</a>. Any feedback is
        highly encouraged. You can <a href="https://github.com/holtzy/The-Python-Graph-Gallery/issues">fill an issue</a> on Github, drop me a message on
        <a href="https://twitter.com/r_graph_gallery?lang=en">Twitter</a>, or send an email pasting <code>yan.holtz.data</code> with <code>gmail.com</code>.
      </p>
      {isNotebook &&
        <blockquote>
          This page is just a <u>jupyter notebook</u>, you can edit it <a href={editPageUrl}>here</a>. Please help me making this website better 🙏!
        </blockquote>
      }
      <div>
        <Button size="xl" href="https://github.com/holtzy/python-graph-gallery">
          GITHUB
        </Button>
        <Button size="xl" href="https://twitter.com/R_Graph_Gallery">
          TWITTER
        </Button>
        {pageSlug &&
          <Button size="xl" href={editPageUrl}>
            EDIT
          </Button>
        }
      </div>
    </div>
  );
}

Contact.propTypes = {
  pageSlug: PropTypes.string,
  isNotebook: PropTypes.boolean
};
