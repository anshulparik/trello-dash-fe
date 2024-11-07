import { Task } from "../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks, updateTaskCategory } from "./taskApis";

interface TaskState {
  tasks: Task[];
  loading: boolean;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(updateTaskCategory.fulfilled, (state, action) => {
        const { id, newCategory } = action.payload;
        const task = state.tasks.find((task) => {
          return task.id === id;
        });
        if (task) {
          task.category = newCategory;
          task.updatedAt = `${new Date()}`;
        }
      });
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
