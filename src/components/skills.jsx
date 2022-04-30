import "../styles.css";
import { FaBriefcase, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrBriefcase, GrHtml5 } from "react-icons/gr";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiExpress,
  SiMongodb
} from "react-icons/si";

export const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="skills">
        <GrHtml5 fontSize="50px" />
        <SiCss3 fontSize="50px" />
        <SiJavascript fontSize="50px" />
        <SiReact fontSize="50px" />
        <SiRedux fontSize="50px" />
        <FaNodeJs fontSize="50px" />
        <SiMongodb fontSize="50px" />
        <SiExpress fontSize="50px" />
      </div>
    </div>
  );
};
