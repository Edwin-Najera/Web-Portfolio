import "./global.css";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Edwin N.
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
          <div className="navbar-nav" id="nav-items">
            <a className="nav-link" href="#">
              <ScrollLink to="AboutMe" smooth={true} duration={50}>
                About
              </ScrollLink>
            </a>
            <a className="nav-link" href="#">
              <ScrollLink to="Projects" smooth={true} duration={50}>
                Projects
              </ScrollLink>
            </a>
            <a className="nav-link" href="#">
              <ScrollLink to="Contact" smooth={true} duration={50}>
                Contact
              </ScrollLink>
            </a>
            <a
              className="nav-link"
              aria-current="page"
              href="https://github.com/Edwin-Najera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="nav-link"
              aria-current="page"
              href="https://www.linkedin.com/in/edwin-najera-49767a30b"
              target="_blank"
              rel="noopener noreferrer"
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
