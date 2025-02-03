import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div id="About Me">
        <h2 className="title-text">About Me</h2>
        <AboutMe />
      </div>

      <div id="projects">
        <h2 className="title-text">Projects</h2>
        <ProjectCards />
      </div>

      <div id="contact">
        <h2 className="title-text">Contact Me</h2>
      </div>
    </Fragment>
  );
};

export default App;
