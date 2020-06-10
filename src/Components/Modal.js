import React, { useState } from 'react';
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, modalData }) => isShowing ? ReactDOM.createPortal(
    <>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <h3>{modalData.heading}</h3>
                </div>
                <p>
                    {modalData.text}
                </p>
                <button type="button" className="btn modal-close-button" data-dismiss="modal" aria-label="Close" data="close" onClick={hide}>
                    <span aria-hidden="true" data="close" onClick={hide}>Close</span>
                </button>
            </div>
        </div>
    </>, document.body
) : null;

export default Modal;