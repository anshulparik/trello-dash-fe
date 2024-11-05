import CardContainer from "./Card/CardContainer";
import ProjectMenu from "./ProjectMenu";


const Dashboard = () => {
  return (
    <div className="bg-medium-blue px-2 xl:px-4">
        <ProjectMenu />
        <CardContainer />
    </div>
  );
}

export default Dashboard