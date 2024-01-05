import React, { useEffect, useRef } from "react";

import "./Dropdown.css";

function Dropdown(props) {
  //   const dropdownRef = useRef();

  const handleClick = () => {
    // dropdownRef,
    // dropdownRef.current?.contains(event.target),
    // dropdownRef.current,
    // event.target
    console.log(props.showDropdown);
    // if (
    //   dropdownRef &&
    //   !dropdownRef.current?.contains(event.target) &&
    //   props.onClose
    // )
    if (!props.showDropdown) props.onClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      //   ref={dropdownRef}
      className={`dropdown ${props.class ? props.class : ""}`}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;
