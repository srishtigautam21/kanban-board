import "./App.css";
import { KanbanColumns } from "./component/KanbanBoard/KanbanColumns";

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <h1>Kanban</h1>
      </div>
      <div className='board_container'>
        <button className='add-column-btn'>Add new column</button>
        <div className='boards'>
          <KanbanColumns />
          <KanbanColumns />
          <KanbanColumns />
          <KanbanColumns />
        </div>
      </div>
    </div>
  );
}

export default App;
