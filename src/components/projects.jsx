import "../styles.css";
import { FaBriefcase,FaNodeJs,FaGithub,FaRocket } from "react-icons/fa";
import { GrBriefcase,GrHtml5,GrDeploy } from "react-icons/gr";
import {SiCss3,SiJavascript,SiReact,SiRedux } from "react-icons/si";


export const Projects = () => {
  return (
   <div id="project">
     <h1>Projects</h1>
      <div  className="projects">
         <div className="card">
           <h2>Indiamart Cloned</h2>
           <p>This is India's largest online marketplace which connects buyers with suppliers (E-commerce website).</p>
           <h3>Front End Project | Collaborative</h3>
           <h4>Html | Css | Bootstrap | JavaScript</h4>
           <a className="giticon" href="https://github.com/PoovendharanSelvaraj/India_mart"><FaGithub /></a>
           <a className="giticon" href="https://sad-elion-e4c9b5.netlify.app/"><FaRocket /></a>
         
         </div>
         <div className="card">
           <h2>Tanishq Cloned</h2>
           <p>Tanishq is an Indian jewellery brand and a division of Titan Company. Tanishq has emerged as India's fastest growing jewellery brand and is a name which signifies superior craftsmanship, exclusive designs and superlative product quality.</p>
           <h3>Front End and Back End Project | Collaborative</h3>
           <h4>Html | Css | Bootstrap | JavaScript | MongoDb | Express | NodeJs</h4>
           <a className="giticon" href="https://github.com/PoovendharanSelvaraj/Tanishq"><FaGithub /></a>
           <a className="giticon" href="https://heuristic-minsky-e408f0.netlify.app/user"><FaRocket /></a>         
         </div>
      </div>
   </div>
  );
};
