import "../styles.css";
import photo from "../images/photo.jpg";
import { FaBriefcase, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrBriefcase, GrHtml5 } from "react-icons/gr";
import { SiCss3, SiJavascript, SiReact, SiRedux } from "react-icons/si";

export const About = () => {
  const resume = () => {
    return (window.location.href =
      "https://drive.google.com/file/d/13_NHgW49KWm_cqI75iCappRrzxcbh5ra/view?usp=sharing");
  };
  return (
    <div className="aboutim" style={{ width: "90%", margin: "auto" }}>
      <div className="about">
        <div className="profile">
          <img src={photo} alt="" />
        </div>
        <div className="aboutDes">
          <div>
            <h1>Hi 👋 ,I'm </h1>
            <span className="name">Poovedharan Selvaraj</span>
          </div>
          <div className="objectives">
            <p>
              Adaptive and collaborative aspiring full stack web developer
              specialized in MERN Stack and Javascript. Passionate about
              learning and building new things. Looking forward to work as a
              software development engineer in a product based company.
            </p>
          </div>
          <div className="git">
            <button onClick={resume}>resume</button>
            <a
              className="giticon"
              href="https://github.com/PoovendharanSelvaraj"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/poovendharan-s-39a145167/"
              className="giticon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
