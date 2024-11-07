import { SlOptions } from "react-icons/sl";
import TaskContainer from "./TaskContainer";
import { useDroppable } from "@dnd-kit/core";
import { CardProps } from "../../../utils/types";

const Card = ({ taskCategory, data }: CardProps) => {
  const { setNodeRef } = useDroppable({
    id: taskCategory,
  });
  return (
    <div className="bg-off-white rounded-lg px-4 py-6 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-dark-blue text-md">
          {taskCategory}
        </span>
        <SlOptions className="cursor-pointer font-semibold text-dark-blue text-lg" />
      </div>
      <div ref={setNodeRef} className="flex flex-col gap-4 flex-grow">
        {data.map((item) => (
          <TaskContainer
            key={item.id}
            id={item.id}
            task={item.task}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
          />
        ))}
      </div>
      <div className="cursor-pointer font-medium text-dark-blue text-sm">
        + Add a card
      </div>
    </div>
  );
};

export default Card;
