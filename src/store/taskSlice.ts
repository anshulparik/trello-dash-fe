import { Task } from "../utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { createTask, fetchTasks, updateTaskCategory } from "./taskApis";

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
  reducers: {},
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
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      });
  },
});

export default taskSlice.reducer;
