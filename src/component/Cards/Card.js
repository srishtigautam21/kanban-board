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
import { Modal } from "../Modal/Modal";

const Card = ({
  boardId,
  id,
  card,
  removeCard,
  dragEntered,
  dragEnded,
  handleEditChanges,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  let arr = card.assignee.split(" ");
  let nameAcronym = "";
  arr.forEach((name) => (nameAcronym += name[0].toUpperCase()));

  return (
    <>
      <div
        className='cards'
        draggable
        onDragEnter={() => dragEntered(boardId, id)}
        onDragEnd={() => dragEnded(boardId, id)}
      >
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
                <p onClick={() => setOpenModal(true)}>Edit Card</p>
                <p onClick={() => removeCard(boardId, id)}>Delete Card</p>
              </Dropdown>
            )}
          </div>
        </div>

        <div className='card-details'>
          <div className='type'>
            {card.type === "Bug" ? (
              <Circle color='red' strokeWidth='10px' size='15px' />
            ) : (
              <Circle color='green' strokeWidth='10px' size='15px' />
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
            </div>
            <div className='assignee'>{nameAcronym}</div>
          </div>
        </div>
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        card={card}
        boardId={boardId}
        id={id}
        handleEditChanges={handleEditChanges}
      ></Modal>
    </>
  );
};

export default Card;
