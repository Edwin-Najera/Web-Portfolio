import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
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
  );
};

export default Footer;
