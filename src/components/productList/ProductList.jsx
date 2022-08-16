import "./ProductList.css"
import Project from "../project/Project";
import {projects} from "../../data"

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Some of my projects</h1>
        <p className="pl-desc">{/* optional text here */}</p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            projectName={item.projectName}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;