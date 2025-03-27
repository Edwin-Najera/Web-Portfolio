import { Collapse } from "react-collapse";
import { Fragment, useState } from "react";

const AboutMe = () => {
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isEducationOpen, setEducationOpen] = useState(false);

  return (
    <Fragment>
      <div className="container" id="About">
        <img className="AboutPhoto d-inline" alt="About Me Photo" />
        <div>
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
        </div>
        <div className="container-row">
          <div className="button-container">
            <button
              className="btn button-collapse"
              type="button"
              formTarget="skills"
              aria-expanded="false"
              aria-controls="skills"
              onClick={() => {
                setSkillsOpen(!isSkillsOpen);
                setEducationOpen(false);
              }}
            >
              <span className="button-text">Skills</span>
              <div className="filler" />
            </button>
            <section id="skills">
              <Collapse id="skills" isOpened={isSkillsOpen}>
                <div className="c1">
                  <div className={isSkillsOpen ? "sk1" : ""}>C++</div>
                </div>
                <br />
                <div className="c2">
                  <div className={isSkillsOpen ? "sk2" : ""}>Java</div>
                </div>
                <br />
                <div className="c3">
                  <div className={isSkillsOpen ? "sk3" : ""}>Python</div>
                </div>
                <br />
                <div className="c4">
                  <div className={isSkillsOpen ? "sk4" : ""}>React</div>
                </div>
                <br />
              </Collapse>
            </section>
          </div>
          <div className="button-container">
            <button
              className="btn button-collapse"
              type="button"
              formTarget="skills"
              aria-expanded="false"
              aria-controls="skills"
              onClick={() => {
                setSkillsOpen(false);
                setEducationOpen(!isEducationOpen);
              }}
            >
              <span className="button-text">Education</span>
              <div className="filler" />
            </button>
            <section id="education">
              <Collapse id="education" isOpened={isEducationOpen}>
                <div className="c1">
                  <div className={isEducationOpen ? "ed1" : ""}>
                    Comp Sci Undergrad
                  </div>
                </div>
              </Collapse>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
