import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const state = localStorage.getItem("tasks");
    return state ? JSON.parse(state) : [];
  } catch {
    return [];
  }
};

const saveState = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadState(),
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveState(state.tasks);
    },
    moveTask: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.status = status;
      saveState(state.tasks);
    },
   
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      saveState(state.tasks);
    },
  },
});

export const { addTask, moveTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
                 
                 
                 
                 n) =…
