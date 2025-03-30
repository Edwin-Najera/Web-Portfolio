import "./global.css";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl fixed-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="#" id="nav-item">
          E N
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div
            className="d-flex navbar-nav justify-content-center"
            id="nav-items"
          >
            <div className="nav-link" id="nav-item">
              <ScrollLink to="AboutMe" smooth={true} duration={50}>
                About
              </ScrollLink>
            </div>
            <div className="nav-link" id="nav-item">
              <ScrollLink to="Projects" smooth={true} duration={50}>
                Projects
              </ScrollLink>
            </div>
            <div className="nav-link" id="nav-item">
              <ScrollLink to="Contact" smooth={true} duration={50}>
                Contact
              </ScrollLink>
            </div>
            <a
              className="nav-link"
              aria-current="page"
              href="https://github.com/Edwin-Najera"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-item"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="nav-link"
              aria-current="page"
              href="https://www.linkedin.com/in/edwin-najera-49767a30b"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-item"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
