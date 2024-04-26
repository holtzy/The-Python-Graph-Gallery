import React from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import SubscribeButton from './SubscribeButton';

// Component for the Contact & Edit section at the bottom of each page.
// If a pageSlug prop is provided, a link to the according github page will be provided.
export default function Contact({ pageSlug, isNotebook }) {
  const editPageUrl =
    'https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/src/notebooks/' +
    pageSlug +
    '.ipynb';

  return (
    <div className="contactSection lightSection">
      <h2 id="Edit this page" className="contactTitle">
        {isNotebook ? 'Contact & Edit' : 'Contact'}
      </h2>
      <br />
      <p className="contactText">
        👋 This document is a work by{' '}
        <a href="https://www.yan-holtz.com">Yan Holtz</a>. You can contribute on{' '}
        <a
          href="https://github.com/holtzy/The-Python-Graph-Gallery"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        , send me a feedback on{' '}
        <a
          href="https://twitter.com/R_Graph_Gallery"
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </a>{' '}
        or subscribe to the newsletter to know when new examples are published!
        🔥
      </p>

      {isNotebook && (
        <blockquote>
          This page is just a <u>jupyter notebook</u>, you can edit it{' '}
          <a href={editPageUrl}>here</a>. Please help me making this website
          better 🙏!
        </blockquote>
      )}

      <SubscribeButton />
    </div>
  );
}

Contact.propTypes = {
  pageSlug: PropTypes.string,
  isNotebook: PropTypes.boolean,
};
