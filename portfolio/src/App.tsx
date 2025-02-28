import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import AboutMe from "./components/AboutMe";
import StartPage from "./components/StartPage";

const App = () => {
  return (
    <Fragment>
      <div id="AppGrid">
        <div id="Navbar">
          <Navbar />
        </div>

        <div id="StartPage">
          <StartPage />
        </div>
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
      </div>
    </Fragment>
  );
};

export default App;
