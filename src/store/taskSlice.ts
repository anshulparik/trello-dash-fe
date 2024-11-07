import { Task } from "../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks, updateTaskCategory, createTask } from "./taskApis";

const loadTasksFromLocalStorage = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];
};

const initialState = {
  tasks: loadTasksFromLocalStorage(),
  loading: false,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      })
      .addCase(
        updateTaskCategory.fulfilled,
        (state, action: PayloadAction<{ id: number; newCategory: string }>) => {
          const { id, newCategory } = action.payload;
          const task = state.tasks.find((task) => task.id === id);
          if (task) {
            task.category = newCategory;
            task.updatedAt = `${new Date()}`;
          }
          localStorage.setItem("tasks", JSON.stringify(state.tasks));
        }
      )
      .addCase(createTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      });
  },
});

export default taskSlice.reducer;
