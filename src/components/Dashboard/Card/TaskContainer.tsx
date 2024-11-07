import { IoMdList } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";
import { useDraggable } from "@dnd-kit/core";
import { TaskContainerProps } from "../../../utils/types";

const TaskContainer = ({
  id,
  task,
  createdAt,
  updatedAt,
}: TaskContainerProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  const formatTime = (timeString: string) => {
    const timestamp = new Date(timeString);
    const formattedDate = timestamp.toLocaleString();
    return formattedDate;
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-pointer bg-white flex flex-col gap-4 justify-center py-6 px-4 rounded-md"
      style={style}
    >
      <div className="w-full bg-green-500 h-2 rounded-3xl"></div>
      <div className="text-lg text-gray-700 font-medium">{task}</div>
      <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
        <IoMdList className="text-lg" />
        <div className="flex items-center gap-2">
          <FaRegCommentAlt />
          <span>4</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <span className="font-medium">Created At:</span>
          <span>{formatTime(createdAt)}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium">Updated At:</span>{" "}
          {formatTime(updatedAt)}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
