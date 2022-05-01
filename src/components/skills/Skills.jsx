import "./skills.css";
import { logos } from "../../logos";

const Skills = () => {
  return (
    <div className="skills">
      <div className="s-left">
        <h1 className="s-title">Skills</h1>
      </div>
      <div className="s-right">
        <h1 className="s-title">subtitle</h1>
        <div className="s-logos">
          {logos.map((logo) => (
            <div className="s-container" key={logo.id}>
              <img className="s-img" src={logo.img} />
              <p className="s-name">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
