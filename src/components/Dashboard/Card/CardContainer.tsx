import Card from "./Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { TASK_CATEGORY } from "../../../utils/constant";
import { fetchTasks, updateTaskCategory } from "../../../store/taskApis";

const CardContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const tasksData = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const getFilteredTasks = (category: string) => {
    return Array.isArray(tasksData)
      ? tasksData
          .filter((item) => {
            return item.category === category;
          })
          .map((item) => ({
            id: item.id,
            task: item.task,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          }))
      : [];
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id as number;
    const newCategory = over.id as string;

    dispatch(updateTaskCategory({ id: taskId, newCategory }));
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
