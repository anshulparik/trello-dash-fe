export type Task = {
  id: number;
  task: string;
  category: string;
};

export type CardProps = {
  taskCategory: string;
  data: { id: number; task: string }[];
};

export type TaskCOntainerProps = { id: number; task: string };
