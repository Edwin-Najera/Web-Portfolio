import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div id="AboutMe">
        <h2 className="title-text" />
        <AboutMe />
      </div>

      <div id="Projects">
        <h2 className="title-text">Projects</h2>
        <ProjectCards />
      </div>

      <div id="Contact">
        <h2 className="title-text">Contact Me</h2>
      </div>
    </Fragment>
  );
};

export default App;
