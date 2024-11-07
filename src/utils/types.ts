export type Task = {
  id: number;
  task: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export type CardProps = {
  taskCategory: string;
  data: { id: number; task: string; createdAt: string; updatedAt: string }[];
};

export type TaskContainerProps = {
  id: number;
  task: string;
  createdAt: string;
  updatedAt: string;
};
