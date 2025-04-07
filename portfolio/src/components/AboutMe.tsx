import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { BiLogoCPlusPlus, BiLogoTypescript } from "react-icons/bi";
import { FaJava, FaPython, FaReact, FaCss3Alt } from "react-icons/fa";

const AboutMe = () => {
  const { ref: myRef, inView: visibleElement } = useInView({
    triggerOnce: true,
  });
  let fade;

  if (visibleElement) {
    fade = "logo fadeIn";
  }

  return (
    <Fragment>
      <div className="row container" id="About">
        {/* <img className="AboutPhoto" alt="About Me Photo" /> */}
        <div className="col d-block-flex" id="Description">
          <p className="header">About Me</p>
          <div className="About-txt">
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
          </div>
        </div>
        <div ref={myRef} className="col" id="Skills">
          <div id="Title">
            <p className="header">Skills</p>
          </div>

          <div className={fade} id="Cpp">
            <BiLogoCPlusPlus />
          </div>
          <div className={fade} id="Python">
            <FaPython />
          </div>
          <div className={fade} id="Java">
            <FaJava />
          </div>
          <div className={fade} id="React">
            <FaReact />
          </div>
          <div className={fade} id="Typescript">
            <BiLogoTypescript />
          </div>
          <div className={fade} id="Css">
            <FaCss3Alt />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
