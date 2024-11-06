import { useState } from "react";
import { INITIAL_DATA, TASK_CATEGORY } from "../../../utils/constant";
import Card from "./Card";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Task } from "../../../utils/types";

const CardContainer = () => {
  const [tasksData, setTasksData] = useState<Task[]>(INITIAL_DATA);
  const getFilteredTasks = (
    category: string
  ): { id: number; task: string }[] => {
    const tasks = tasksData
      ?.filter((item) => item.category === category)
      .map((item) => {
        return { id: item.id, task: item.task };
      });

    return tasks;
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id as number;
    const newCategory = over.id as string;

    console.log(taskId, "===== taskCategory");
    console.log(newCategory, "===== newCategory");

    setTasksData((tasksData) =>
      tasksData?.map((task) =>
        task.id === taskId ? { ...task, category: newCategory } : task
      )
    );
  };

  return (
    <div className="card-container">
      <DndContext onDragEnd={handleDragEnd}>
        <Card
          taskCategory={TASK_CATEGORY.TODO}
          data={getFilteredTasks(TASK_CATEGORY.TODO)}
        />
        <Card
          taskCategory={TASK_CATEGORY.IN_PROGRESS}
          data={getFilteredTasks(TASK_CATEGORY.IN_PROGRESS)}
        />
        <Card
          taskCategory={TASK_CATEGORY.REVIEW}
          data={getFilteredTasks(TASK_CATEGORY.REVIEW)}
        />
        <Card
          taskCategory={TASK_CATEGORY.DONE}
          data={getFilteredTasks(TASK_CATEGORY.DONE)}
        />
      </DndContext>
    </div>
  );
};

export default CardContainer;
