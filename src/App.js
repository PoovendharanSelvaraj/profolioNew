import { About } from "./components/about";
import { Contact } from "./components/Contacts";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
