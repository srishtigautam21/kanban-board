import React from "react";
import "./KanbanColumns.css";
import { MoreHorizontal } from "react-feather";
import Card from "../Cards/Card";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const KanbanColumns = ({ id, board }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  console.log("hello", showDropdown);
  return (
    <div className='wrapper'>
      <div className='board_title'>
        <div className='board_header'>
          {board.title} <span className='number_of_cards'> 2</span>
        </div>
        <div
          className='board_header_title_more'
          onClick={() => {
            setShowDropdown((open) => !open);
          }}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              showDropdown
              class='board_dropdown'
              onClose={() => setShowDropdown(false)}
            >
              <p>Delete Column</p>
              <p>Add New Card</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className='card-container'>
        {board?.cards?.map((card) => (
          <Card id={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export { KanbanColumns };
