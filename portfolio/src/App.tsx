import { Fragment } from "react/jsx-runtime";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import AboutMe from "./components/AboutMe";
import StartPage from "./components/StartPage";
import Contact from "./components/Contact";

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
          <h2
            className="d-flex justify-content-center title-text pt-5"
            id="project"
          >
            Projects
          </h2>
          <ProjectCards />
        </div>
        <div id="Contact">
          <h2 className="title-text" id="contact"></h2>
          <Contact />
        </div>
        <div id="Footer">
          <footer>
            <div className="d-flex justify-content-between bg-dark" id="footer">
              <div className="">Developed by Edwin Najera</div>
              <div className="" style={{ justifySelf: "right" }}>
                <a
                  className="nav-link d-inline"
                  aria-current="page"
                  href="https://github.com/Edwin-Najera"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  className="nav-link d-inline"
                  aria-current="page"
                  href="https://www.linkedin.com/in/edwin-najera-49767a30b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
