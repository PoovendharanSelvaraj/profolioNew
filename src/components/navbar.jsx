import { FaBriefcase } from "react-icons/fa";
import { GrBriefcase } from "react-icons/gr";

import "../styles.css";

export const Navbar = () => {
  const darkmode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle("btn");
  };
  return (
    <div id="navbar" className="navbar">
      <div className="homeicon" style={{ margin: "10px 0px" }}>
        <FaBriefcase fontSize="50px" />
      </div>
      <div className="nav-div1">
        <ul>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <label class="switch">
          <input onChange={darkmode} type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
};
