import "./about.css";
import AboutMe from "../../img/AboutMe1.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaFile,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={AboutMe} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Brazilian-Uruguayan-Canadian web developer with a background in
          marketing and software sales. Moved from Porto Alegre, Brazil, to
          beautiful British Columbia in 2016.
        </p>

        <p className="about-desc">
          Coding started as a hobby for me a few years ago, and throughout the
          years, it became a passion for building solutions and facing new
          challenges every day.
        </p>
        <div className="about-social">
          <a
            href="https://www.linkedin.com/in/rafnobrega/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rafnobrega"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/rafanobrega/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/rafnobrega604"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.canva.com/design/DAFD7z7OF0o/k4ZRfi6PE14Z_nAV1jEwNg/view?utm_content=DAFD7z7OF0o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            rel="noreferrer"
            target="_blank"
          >
            <FaFile />
          </a>
          <a href="mailto:rafael.rlnr@outlook.com" rel="noreferrer">
            <MdEmail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
