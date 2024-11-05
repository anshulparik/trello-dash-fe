import { IoMdList } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";

const TextContainer = () => {
  return (
    <div className="bg-white flex flex-col gap-4 justify-center py-6 px-4 rounded-md">
      <div className="w-full bg-green-500 h-2 rounded-3xl"></div>
      <div className="text-sm text-gray-700 font-medium">
        The default base font size in Tailwind CSS is 16 pixels.
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <IoMdList className="text-lg"/>
        <div className="flex items-center gap-2">
          <FaRegCommentAlt />
          <span>4</span>
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
