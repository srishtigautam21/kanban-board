import React from "react";
import "./KanbanColumns.css";
import { MoreHorizontal } from "react-feather";
import Card from "../Cards/Card";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const KanbanColumns = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className='wrapper'>
      <div className='board_title'>
        <div className='board_header'>
          Todo do <span className='number_of_cards'> 2</span>
        </div>
        <div
          className='board_header_title_more'
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class='board_dropdown'
              onClose={() => setShowDropdown(false)}
            >
              <p>Delete Column</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export { KanbanColumns };
