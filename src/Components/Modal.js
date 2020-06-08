import React, { useState } from 'react';
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <p>
                    Hello, I'm a modal.
        </p>
            </div>
        </div>
    </>, document.body
) : null;

export default Modal;