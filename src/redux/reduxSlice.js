import { createSlice } from "@reduxjs/toolkit";
import { boardData } from "../data/boardData";

const initialState = {
  boards: JSON.parse(localStorage.getItem("kanban")) || boardData,
  showDropdown: false,
  showModal: false,
  inputText: "",
};

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
  },
});

export const { setBoards } = kanbanSlice.actions;
export default kanbanSlice.reducer;
