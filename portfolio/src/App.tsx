import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import AboutMe from "./components/AboutMe";
import StartPage from "./components/StartPage";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="border-check">
        <StartPage />
      </div>

      <div className="border-check" id="AboutMe">
        <h2 className="title-text" />
        <AboutMe />
      </div>

      <div className="border-check" id="Projects">
        <h2 className="title-text">Projects</h2>
        <ProjectCards />
      </div>

      <div className="border-check" id="Contact">
        <h2 className="title-text">Contact Me</h2>
      </div>
    </Fragment>
  );
};

export default App;
