import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="bg-light-blue px-2 py-3 xl:px-4 xl:py-5 border border-gray-400 border-t-0 grid col-span-1 gap-8 lg:gap-4 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
