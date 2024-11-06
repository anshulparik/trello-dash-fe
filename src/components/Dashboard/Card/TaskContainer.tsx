import { IoMdList } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";
import { useDraggable } from "@dnd-kit/core";
import { TaskCOntainerProps } from "../../../utils/types";

const TaskContainer = ({ id, task }: TaskCOntainerProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-pointer bg-white flex flex-col gap-4 justify-center py-6 px-4 rounded-md"
      style={style}
    >
      <div className="w-full bg-green-500 h-2 rounded-3xl"></div>
      <div className="text-sm text-gray-700 font-medium">{task}</div>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <IoMdList className="text-lg" />
        <div className="flex items-center gap-2">
          <FaRegCommentAlt />
          <span>4</span>
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
