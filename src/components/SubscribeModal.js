import './subscribeModal.css';
import React from 'react';

import Modal from 'react-bootstrap/Modal';
import SubscribeButton from './SubscribeButton';

export default function SubscribeModal({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
      className="menuModal"
    >
      <p className="menuModalCloseModalButton" onClick={handleClose}>
        &#10005;
      </p>

      <div className="menuModalAllLogoContainer">
        <h2>Dataviz Universe</h2>
        <p>
          My best Python tips and tricks directly delived in your Inbox. No Spam
          ever. Subscribe anytime.
        </p>
        <SubscribeButton />
      </div>
    </Modal>
  );
}
