import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SubscribeButtonCheatSheet from './SubscribeButtonCheatSheet';

export default function CheatSheetModal({ show, handleClose }) {
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

      <div
        style={{
          backgroundColor: 'white',
          padding: 20,
          border: 'solid 1px black',
          borderRadius: 4,
        }}
      >
        <h2>Download</h2>
        <p>I use these cheatsheets all the time.</p>
        <p>
          To make things easier, I've combined them into a <b>single PDF</b>{' '}
          that I can send to you by email right away. (It's 100% free!)
        </p>
        <SubscribeButtonCheatSheet />
      </div>
    </Modal>
  );
}
