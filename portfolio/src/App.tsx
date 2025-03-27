import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import AboutMe from "./components/AboutMe";
import StartPage from "./components/StartPage";
import Contact from "./components/Contact";
import Footer from "./components/footer";

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
          <h2 className="title-text" id="project">
            Projects
          </h2>
          <ProjectCards />
        </div>
        <div id="Contact">
          <h2 className="title-text" id="contact"></h2>
          <Contact />
        </div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
