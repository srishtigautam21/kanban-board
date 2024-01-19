import React from "react";
import Reactdom from "react-dom";
import "./Modal.css";
import { X } from "react-feather";
import { useState } from "react";

const Modal = ({
  openModal,
  setOpenModal,
  card,
  boardId,
  id,
  handleEditChanges,
}) => {
  const [updateCard, setUpdateCard] = useState({
    id: id,
    title: card.title,
    type: card.type,
    effortEstimation: card.effortEstimation,
    priority: card.priority,
    assignee: card.assignee,
    desc: card.desc,
  });
  const [radio, setRadioBtn] = useState(null);

  if (!openModal) return null;
  return Reactdom.createPortal(
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>Edit Card</div>
        <div className='modal-cross' onClick={() => setOpenModal(false)}>
          <X />
        </div>
        <div className='innercontent'>
          <label className='input-wrapper'>
            Title
            <input
              type='text'
              value={updateCard.title}
              onChange={(e) =>
                setUpdateCard((prev) => ({ ...prev, title: e.target.value }))
              }
              className='modal-input'
            />
          </label>
          <label className='input-wrapper'>
            Type
            <select
              value={updateCard.type}
              onChange={(e) =>
                setUpdateCard((prev) => ({ ...prev, type: e.target.value }))
              }
              className='modal-input'
            >
              {/* <option></option> */}
              <option>Feature</option>
              <option>Bug</option>
            </select>
          </label>
          <label className='input-wrapper'>
            Effort Estimation
            <input
              type='number'
              value={updateCard.effortEstimation}
              onChange={(e) =>
                setUpdateCard((prev) => ({
                  ...prev,
                  effortEstimation: e.target.value,
                }))
              }
              className='modal-input'
            />
          </label>
          <label style={{ marginBottom: "10px" }} className='input-wrapper'>
            Priority
            {["P0", "P1", "P2"].map((item) => {
              return (
                <label key={item} className='priority-label-wrapper'>
                  <input
                    type='radio'
                    value={updateCard.priority}
                    onChange={(e) => {
                      setUpdateCard((prev) => ({
                        ...prev,
                        priority: item,
                      }));
                      setRadioBtn(item);
                    }}
                    checked={
                      radio ? radio === item : updateCard.priority === item
                    }
                  />
                  {item}
                </label>
              );
            })}
          </label>
          <label className='input-wrapper'>
            Assignee
            <input
              type='text'
              value={updateCard.assignee}
              onChange={(e) =>
                setUpdateCard((prev) => ({ ...prev, assignee: e.target.value }))
              }
              className='modal-input'
            />
          </label>
          <label className='input-wrapper'>
            Description
            <textarea
              value={updateCard.desc}
              onChange={(e) => {
                setUpdateCard((prev) => ({ ...prev, desc: e.target.value }));
              }}
              className='modal-input'
            ></textarea>
          </label>

          <button
            className='modal-btn'
            onClick={() => {
              handleEditChanges(boardId, id, updateCard);
              setOpenModal(false);
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export { Modal };
