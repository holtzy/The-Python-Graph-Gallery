import React from 'react';
import './subscribe-button.css';

export default function SubscribeButton() {
  return (
    <div className="subscribe-button-container">
      <iframe
        src="https://datavizuniverse.substack.com/embed"
        width="480"
        height="70"
      />
    </div>
  );
}
