import React, { useState } from 'react';
import './styles.css';

const Modal = ({ showModal, onClose, children }) => {
  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
