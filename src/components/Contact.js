import React from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import SubscribeButtonCheatSheet from './SubscribeButtonCheatSheet';

export default function Contact() {
  return (
    <div className="contactSection lightSection">
      <h2 id="Edit this page" className="contactTitle">
        🚨 Grab the Data To Viz poster!
      </h2>
      <br />
      <p className="contactText">
        Do you know all the chart types? Do you know which one you should pick?
        I made a <b>decision tree</b> that answers those questions. You can
        download it for free!
      </p>

      <SubscribeButtonCheatSheet />

      <img
        src="https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/refs/heads/master/src/img/poster_small.png"
        alt="handout Cheatsheet beginners"
        width="100%"
      />
    </div>
  );
}
