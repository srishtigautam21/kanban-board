import React from "react";
import "./Card.css";
import { ChevronUp, Circle, MoreHorizontal } from "react-feather";

const Card = () => {
  return (
    <div className='cards'>
      <div className='card-header'>
        <div className='title'>Title</div>
        <MoreHorizontal cursor='pointer' size='15px' />
      </div>

      <div className='card-details'>
        <div className='type'>
          <Circle color='red' strokeWidth='10px' size='15px' />
        </div>
        <div className='other-details'>
          <div className='effort-estimation'>5</div>
          <div className='priority'>
            <ChevronUp color='red' size='20px' strokeWidth='2.5px' />
          </div>
          <div className='assignee'>SG</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
