import { useState } from "react";
import "./App.css";
import { KanbanColumns } from "./component/KanbanBoard/KanbanColumns";
import { boardData } from "./data/boardData";

function App() {
  const [boards, setBoards] = useState(boardData);
  return (
    <div className='App'>
      <div className='navbar'>
        <h1>Kanban</h1>
      </div>
      <div className='board_container'>
        <button className='add-column-btn'>Add new column</button>
        <div className='boards'>
          {boards?.map((board) => (
            <KanbanColumns id={board.id} board={board} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
