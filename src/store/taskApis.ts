import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BE_BASE_URL = import.meta.env.VITE_APP_BE_BASE_URL;

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(`${BE_BASE_URL}/task`);
  const data = response.data.tasks?.map(
    (task: { _id: number; task: string; category: string }) => {
      const { _id, ...other } = task;
      return { id: _id, ...other };
    }
  );

  return data;
});

export const updateTaskCategory = createAsyncThunk(
  "tasks/updateTaskCategory",
  async ({ id, newCategory }: { id: number; newCategory: string }) => {
    await axios.patch(`${BE_BASE_URL}/task/${id}`, {
      category: newCategory,
    });
    return { id, newCategory };
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async ({ task, category }: { task: string; category: string }) => {
    const response = await axios.post(`${BE_BASE_URL}/task`, {
      task,
      category,
    });

    const newTask = response.data.task;

    return {
      id: newTask._id,
      task: newTask.task,
      category: newTask.category,
      createdAt: newTask.createdAt,
      updatedAt: newTask.updatedAt,
    };
  }
);