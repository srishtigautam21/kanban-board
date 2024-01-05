import React from "react";

import "./Modal.css";

function Modal(props) {
  return (
    <div className='modal'>
      <div
        className='modal_content'
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
