import React from 'react';
import './subscribe-button.css';

export default function SubscribeButton() {
  return (
    <div className="subscribe-button-container">
      <iframe
        title="signup button for the dataviz universe newsletter"
        src="https://datavizuniverse.substack.com/embed"
        width="480"
        height="70"
      />
    </div>
  );
}
