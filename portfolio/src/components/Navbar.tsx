import "./global.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
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
              <ScrollLink to="AboutMe" smooth={true} duration={50}>
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="Projects" smooth={true} duration={50}>
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="Contact" smooth={true} duration={50}>
                Contact
              </ScrollLink>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/Edwin-Najera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
              <a
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
