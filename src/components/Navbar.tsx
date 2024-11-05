import { CgMenuGridR } from "react-icons/cg";
import { BsTrello } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="flex items-center gap-6 lg:gap-10">
        <CgMenuGridR className="text-2xl lg:text-3xl" />
        <div className="flex items-center gap-3 lg:gap-4">
          <BsTrello className="text-lg lg:text-2xl" />
          <span className="text-lg lg:text-2xl font-semibold tracking-wide">
            Trello
          </span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-5 tracking-wide">
        <div className="flex items-center gap-1">
          <span className="font-medium text-sm xl:text-lg">Workspaces</span>
          <MdOutlineKeyboardArrowDown className="font-medium text-xl" />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium text-sm xl:text-lg">Recent</span>
          <MdOutlineKeyboardArrowDown className="font-medium text-xl" />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium text-sm xl:text-lg">Starred</span>
          <MdOutlineKeyboardArrowDown className="font-medium text-xl" />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium text-sm xl:text-lg">Templates</span>
          <MdOutlineKeyboardArrowDown className="font-medium text-xl" />
        </div>
        <button className="nav-button">
          Create
        </button>
      </div>
      <GiHamburgerMenu className="text-xl md:hidden cursor-pointer" />
    </div>
  );
};

export default Navbar;
