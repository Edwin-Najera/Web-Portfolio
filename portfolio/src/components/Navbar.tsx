import "./global.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <h4
          className="navbar-brand btn"
          onClick={() => {
            scroll.scrollToTop({ duration: 50 });
          }}
        >
          Edwin Najera
        </h4>
        <div>
          <ul className="navbar-list container ">
            <li className="nav-item">
              <ScrollLink
                className="btn"
                to="AboutMe"
                smooth={true}
                duration={50}
              >
                About Me
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="btn"
                to="Projects"
                smooth={true}
                duration={50}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="btn"
                to="Contact"
                smooth={true}
                duration={50}
              >
                Contact Me
              </ScrollLink>
            </li>
            <li className="nav-item">
              <a
                className="btn"
                href="https://github.com/Edwin-Najera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn"
                href="https://www.linkedin.com/in/edwin-najera-49767a30b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
