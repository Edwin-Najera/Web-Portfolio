import { Fragment, useState } from "react";
import { SiCplusplus } from "react-icons/si";
import { FaJava, FaPython, FaReact } from "react-icons/fa";

const AboutMe = () => {
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isEducationOpen, setEducationOpen] = useState(false);
  return (
    <Fragment>
      <div className="container d-inline-flex" id="About">
        <img className="AboutPhoto" alt="About Me Photo" />
        <div className="d-inline">
          <p className="txt">
            <section className="header">About Me</section>
            Hi! I’m Edwin Najera, a Computer Science undergraduate at the
            University of Texas at Arlington. I’m passionate about technology,
            problem-solving, and building innovative solutions through code.
            Whether it's software development, AI, or web applications, I’m
            always eager to explore new challenges and expand my skill set.
            <br />
            Outside of coding, I enjoy gaming, playing soccer, and continuously
            learning new tech skills. Feel free to connect—I’m always open to
            collaborating and sharing ideas!
            <br />
          </p>
          <div className="d-inline-flex" id="buttons">
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={isEducationOpen ? ".multi-collapse" : "#skills"}
              aria-expanded="false"
              aria-controls={isEducationOpen ? "skills education" : "skills"}
              id="skillsButton"
              onClick={() => {
                setSkillsOpen(!isSkillsOpen);
                setEducationOpen(false);
              }}
              style={{ marginRight: "15%" }}
            >
              <span className="button-text">Skills</span>
              <div className="filler" />
            </button>
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={isSkillsOpen ? ".multi-collapse" : "#education"}
              aria-expanded="false"
              aria-controls={isSkillsOpen ? "education skills" : "education"}
              id="educationButton"
              onClick={() => {
                setSkillsOpen(false);
                setEducationOpen(!isEducationOpen);
              }}
            >
              <span className="button-text">Education</span>
              <div className="filler"></div>
            </button>
          </div>
          <div className="row position-relative" style={{ maxWidth: "25%" }}>
            <div className="col">
              <div className="collapse multi-collapse" id="skills">
                <div className="card-body" id="skillDrop">
                  <div className="d-flex justify-content-evenly">
                    <div className="card-body skill me-3">
                      <SiCplusplus />
                      <p>C++</p>
                    </div>
                    <div className="card-body skill me-3">
                      <FaJava />
                      <p>Java</p>
                    </div>
                    <div className="card-body skill me-3">
                      <FaPython />
                      <p>Python</p>
                    </div>
                    <div className="card-body skill">
                      <FaReact />
                      <p>React</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col position-absolute">
              <div className="collapse multi-collapse" id="education">
                <div className="card-body d-inline-flex">
                  <div>Comp Sci Undergrad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
