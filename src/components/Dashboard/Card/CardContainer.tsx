import { INITIAL_DATA, TASK_CATEGORY } from "../../../utils/constant";
import Card from "./Card";

const CardContainer = () => {
  const getFilteredTasks = (
    category: string
  ): { id: number; task: string }[] => {
    const tasks = INITIAL_DATA?.filter(
      (item) => item.category === category
    ).map((item) => {
      return { id: item.id, task: item.task };
    });

    return tasks;
  };

  return (
    <div className="card-container">
      <Card
        heading={TASK_CATEGORY.TODO}
        data={getFilteredTasks(TASK_CATEGORY.TODO)}
      />
      <Card
        heading={TASK_CATEGORY.IN_PROGRESS}
        data={getFilteredTasks(TASK_CATEGORY.IN_PROGRESS)}
      />
      <Card
        heading={TASK_CATEGORY.REVIEW}
        data={getFilteredTasks(TASK_CATEGORY.REVIEW)}
      />
      <Card
        heading={TASK_CATEGORY.DONE}
        data={getFilteredTasks(TASK_CATEGORY.DONE)}
      />
    </div>
  );
};

export default CardContainer;
