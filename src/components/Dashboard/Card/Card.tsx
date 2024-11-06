import { SlOptions } from "react-icons/sl";
import TaskContainer from "./TaskContainer";

interface CardProps {
  heading: string;
  tasks: string[];
}

const Card = ({ heading, tasks }: CardProps) => {
  return (
    <div className="bg-off-white rounded-lg px-4 py-6 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-dark-blue text-md">{heading}</span>
        <SlOptions className="cursor-pointer font-semibold text-dark-blue text-lg" />
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskContainer key={index} task={task} />
        ))}
      </div>
      <div className="cursor-pointer font-medium text-dark-blue text-sm">
        + Add a card
      </div>
    </div>
  );
};

export default Card;
