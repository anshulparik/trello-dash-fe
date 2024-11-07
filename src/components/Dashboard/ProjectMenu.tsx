import { LuUsers2 } from "react-icons/lu";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown, MdOutlineLeaderboard } from "react-icons/md";

const ProjectMenu = () => {
  return (
    <div className="project-menu border border-gray-400 border-t-0">
      <div className="cursor-pointer font-medium text-lg xl:text-xl">Project A</div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 text-sm">
        <div className="flex items-center gap-2">
          <LuUsers2 className="text-lg xl:text-xl" />
          <span className="text-md xl:text-lg">Workspace visible</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex items-center gap-2 text-dark-blue py-2 px-3 bg-white bg-opacity-95 rounded-md">
            <MdOutlineLeaderboard className="text-lg xl:text-xl" />
            <span className="text-md xl:text-lg">Board</span>
          </div>
          <MdOutlineKeyboardArrowDown className="font-medium text-xl xl:text-2xl" />
        </div>
      </div>
      <RiMenu2Fill className="md:hidden font-medium text-xl" />
    </div>
  );
};

export default ProjectMenu;
