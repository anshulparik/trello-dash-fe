import { SlOptions } from "react-icons/sl";
import TextContainer from "./TaskContainer";

const Card = () => {
  return (
    <div className="bg-off-white rounded-lg px-4 py-6 flex flex-col gap-8 justify-center">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-dark-blue text-md">To Do</span>
        <SlOptions className="font-semibold text-dark-blue text-lg" />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <TextContainer />
        <TextContainer />
        <TextContainer />
      </div>
      <div className="font-medium text-dark-blue text-sm">+ Add a card</div>
    </div>
  );
};

export default Card;
