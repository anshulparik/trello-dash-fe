export const TASK_CATEGORY = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  REVIEW: "Review",
  DONE: "Done",
} as const;

export const INITIAL_DATA = [
  {
    id: 1,
    task: "Task 1",
    category: TASK_CATEGORY.TODO,
  },
  {
    id: 2,
    task: "Task 2",
    category: TASK_CATEGORY.TODO,
  },
  {
    id: 3,
    task: "Task 3",
    category: TASK_CATEGORY.TODO,
  },
  {
    id: 4,
    task: "Task 4",
    category: TASK_CATEGORY.IN_PROGRESS,
  },
  {
    id: 5,
    task: "Task 5",
    category: TASK_CATEGORY.IN_PROGRESS,
  },
  {
    id: 6,
    task: "Task 6",
    category: TASK_CATEGORY.REVIEW,
  },
  {
    id: 7,
    task: "Task 7",
    category: TASK_CATEGORY.REVIEW,
  },
  {
    id: 8,
    task: "Task 8",
    category: TASK_CATEGORY.DONE,
  },
  {
    id: 9,
    task: "Task 9",
    category: TASK_CATEGORY.DONE,
  },
] as const;
