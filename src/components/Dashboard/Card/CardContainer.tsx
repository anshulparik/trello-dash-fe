import Card from "./Card";

const CardContainer = () => {
  const todoTasks = ["Task 1", "Task 2", "Task 3", "Task 9"];
  const inProgressTasks = ["Task 4", "Task 5"];
  const reviewTasks = ["Task 6"];
  const doneTasks = ["Task 7", "Task 8"];

  return (
    <div className="bg-light-blue px-2 py-3 xl:px-4 xl:py-5 border border-gray-400 border-t-0 grid col-span-1 gap-8 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-min">
      <Card heading="To Do" tasks={todoTasks} />
      <Card heading="In Progress" tasks={inProgressTasks} />
      <Card heading="Review" tasks={reviewTasks} />
      <Card heading="Done" tasks={doneTasks} />
    </div>
  );
};

export default CardContainer;
