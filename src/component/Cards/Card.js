import React, { useState } from "react";
import "./Card.css";
import {
  AlignJustify,
  ChevronUp,
  ChevronsDown,
  Circle,
  MoreHorizontal,
} from "react-feather";
import Dropdown from "../Dropdown/Dropdown";

const Card = ({ id, card }) => {
  // const handleAssigneeName = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  //   console.log("here");
  let arr = card.assignee.split(" ");
  let nameAcronym = "";
  arr.forEach((name) => (nameAcronym += name[0].toUpperCase()));

  // return nameAcronym;
  // };
  // const handlePriority = () => {
  //   if (card.priority === "P0") {
  //     return <ChevronUp color='red' size='20px' strokeWidth='2.5px' />;
  //   } else if (card.priority === "P1") {
  //     return <AlignJustify color='yellow' size='20px' strokeWidth='2.5px' />;
  //   } else {
  //     return <ChevronsDown color='blue' size='20px' strokeWidth='2.5px' />;
  //   }
  // };
  return (
    <div className='cards'>
      <div className='card-header'>
        <div className='title'>{card.title}</div>
        <div
          className='card_header'
          onClick={() => {
            setShowDropdown((open) => !open);
          }}
        >
          <MoreHorizontal size='15px' />
          {showDropdown && (
            <Dropdown
              showDropdown
              class='board_dropdown'
              onClose={() => setShowDropdown(false)}
            >
              <p>Edit Card</p>
              <p>Delete Card</p>
            </Dropdown>
          )}
        </div>
      </div>

      <div className='card-details'>
        <div className='type'>
          {card.type === "Bug" ? (
            <Circle color='red' strokeWidth='10px' size='15px' />
          ) : (
            // <span> Bug</span>

            <Circle color='green' strokeWidth='10px' size='15px' />
            // <span> Feat</span>
          )}
        </div>
        <div className='other-details'>
          <div className='effort-estimation'>{card.effortEstimation}</div>
          <div className='priority'>
            {card.priority === "P0" ? (
              <ChevronUp color='red' size='20px' strokeWidth='2.5px' />
            ) : card.priority === "P1" ? (
              <AlignJustify color='yellow' size='20px' strokeWidth='2.5px' />
            ) : (
              <ChevronsDown color='blue' size='20px' strokeWidth='2.5px' />
            )}
            {/* <ChevronUp color='red' size='20px' strokeWidth='2.5px' /> */}
          </div>
          <div className='assignee'>{nameAcronym}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
