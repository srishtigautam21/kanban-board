import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./reduxSlice";

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

export default store;
