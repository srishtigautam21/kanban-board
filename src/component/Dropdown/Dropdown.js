import React, { useEffect, useRef } from "react";

import "./Dropdown.css";

function Dropdown(props) {
  const handleClick = () => {
    if (!props.showDropdown) props.onClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className={`dropdown ${props.class ? props.class : ""}`}>
      {props.children}
    </div>
  );
}

export default Dropdown;
