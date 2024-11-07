import { SlOptions } from "react-icons/sl";
import TaskContainer from "./TaskContainer";
import { useDroppable } from "@dnd-kit/core";
import { CardProps } from "../../../utils/types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { createTask } from "../../../store/taskApis";

const Card = ({ taskCategory, data }: CardProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { setNodeRef } = useDroppable({
    id: taskCategory,
  });

  const [isInputVisible, setInputVisible] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");

  const handleAddCard = () => {
    setInputVisible(true);
  };

  const handleSubmit = () => {
    if (newCardTitle.trim()) {
      dispatch(createTask({ task: newCardTitle, category: taskCategory }));
      setInputVisible(false);
      setNewCardTitle("");
    }
  };

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
      {isInputVisible ? (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-sm"
            placeholder="Enter task title"
          />
          <div className="flex gap-4">
            <div
              onClick={handleSubmit}
              className="cursor-pointer font-medium text-dark-blue text-sm"
            >
              + Add a card
            </div>
            <div
              onClick={() => setInputVisible(false)}
              className="cursor-pointer font-medium text-red-500 text-sm"
            >
              Cancel
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={handleAddCard}
          className="cursor-pointer font-medium text-dark-blue text-sm"
        >
          + Add a card
        </div>
      )}
    </div>
  );
};

export default Card;
