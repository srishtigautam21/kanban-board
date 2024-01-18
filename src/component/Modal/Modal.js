import React from "react";
import Reactdom from "react-dom";
import "./Modal.css";
import { X } from "react-feather";
import { useState } from "react";

const Modal = ({ openModal, setOpenModal, card, boardId, id }) => {
  const [updateCard, setUpdateCard] = [
    {
      title: card.title,
      type: card.type,
      effortEstimation: card.effortEstimation,
      priority: card.priority,
      assignee: card.assignee,
      desc: card.desc,
    },
  ];
  if (!openModal) return null;
  return Reactdom.createPortal(
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>Edit Card</div>
        <div className='modal-cross' onClick={() => setOpenModal(false)}>
          <X />
        </div>
        <div className='innercontent'>
          <label>
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
          <label>
            Type
            <select
              value={updateCard.type}
              onChange={(e) =>
                setUpdateCard((prev) => ({ ...prev, type: e.target.value }))
              }
              className='modal-input'
            >
              <option></option>
              <option>Feature</option>
              <option>Bug</option>
            </select>
          </label>
          <label>
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
          <label style={{ marginBottom: "10px" }}>
            Priority
            {["P0", "P1", "P2"].map((item) => {
              return (
                <label className='priority-label-wrapper'>
                  <input
                    type='radio'
                    value={updateCard.priority}
                    onChange={(e) =>
                      setUpdateCard((prev) => ({
                        ...prev,
                        priority: e.target.value,
                      }))
                    }
                    checked={item === updateCard.priority}
                  />
                  {item}
                </label>
              );
            })}
          </label>
          <label>
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
          <button>Save Changes</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export { Modal };
