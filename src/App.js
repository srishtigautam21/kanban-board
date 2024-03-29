import { useState, useEffect } from "react";
import "./App.css";
import { KanbanColumns } from "./component/KanbanBoard/KanbanColumns";
import { boardData } from "./data/boardData";

import { X } from "react-feather";

function App() {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("kanban")) || boardData
  );
  console.log(boards);
  const [targetCard, setTargetCard] = useState({
    boardId: "",
    cardId: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const handleEditChanges = (boardId, cardId, updateCard) => {
    let index = boards.findIndex((item) => item.id === boardId);
    let cardIndex = boards[index].cards.findIndex((item) => item.id === cardId);

    let tempBoards = [...boards];

    tempBoards[index].cards.splice(cardIndex, 1, updateCard);
    setBoards(tempBoards);
  };

  const removeCard = (boardId, cardId) => {
    const index = boards.findIndex((item) => item.id === boardId);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };
  const addboardHandler = (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);
  };

  const handleNewCard = (boardId, updateCard) => {
    console.log(updateCard, boardId);
    const tempBoards = [...boards];
    const targetBoardIndex = tempBoards.findIndex(
      (item) => item.id === boardId
    );
    console.log("tra", targetBoardIndex);
    tempBoards[targetBoardIndex].cards.push({
      id: Date.now() + Math.random() * 2,
      title: updateCard.title,
      type: updateCard.type,
      effortEstimation: updateCard.effortEstimation,
      priority: updateCard.priority,
      assignee: updateCard.assignee,
      desc: updateCard.desc,
    });
    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("kanban", JSON.stringify(boardData));
  }, [boards]);

  return (
    <div className='App'>
      <div className='navbar'>
        <h1>Kanban</h1>
      </div>
      <div className='board_container'>
        <button className='add-column-btn' onClick={() => setShowModal(true)}>
          Add new column
        </button>
        <div className='boards'>
          {boards?.map((board) => (
            <KanbanColumns
              key={board.id}
              id={board.id}
              board={board}
              removeBoard={() => removeBoard(board.id)}
              removeCard={removeCard}
              dragEntered={dragEntered}
              dragEnded={dragEnded}
              handleEditChanges={handleEditChanges}
              handleNewCard={handleNewCard}
            />
          ))}
        </div>
        {showModal && (
          <div className='modal'>
            <div className='modal_content'>
              <div className='modal-header'>Add new Coloumn</div>
              <div className='modal-cross' onClick={() => setShowModal(false)}>
                <X />
              </div>
              <div className='innercontent'>
                <input
                  autoFocus
                  type='text'
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder='New Column Title'
                  className='modal-input-for-board'
                />
                <button
                  onClick={() => {
                    addboardHandler(inputText);
                    setShowModal(false);
                  }}
                  className='modal-btn'
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
