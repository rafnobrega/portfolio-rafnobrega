import "./Project.css";

const Project = ({ img, link, projectName }) => {
  // console.log(projectName);
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-container">
        <a href={link} target="_blank" rel="noreferrer">
          <div className="p-projectName">{projectName}</div>
          <img src={img} alt="" className="p-img"></img>
        </a>
      </div>
    </div>
  );
};

export default Project;
