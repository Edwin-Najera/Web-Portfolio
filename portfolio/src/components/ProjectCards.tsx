import "./global.css";
import { useInView } from "react-intersection-observer";

const ProjectCards = () => {
  const { ref: myRef, inView: visibleElement } = useInView({
    triggerOnce: true,
  });
  let fade = "";

  if (visibleElement) {
    fade = "projects";
  }
  return (
    <div ref={myRef} className="Projects">
      <a
        href="https://github.com/Edwin-Najera/Web-Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="card" id={fade}>
          <img className="card-img-top" alt="Project Image" />
          <div className="card-body">
            <h5 className="card-title">Personal Portfolio</h5>
            <p className="card-text">
              A sleek and responsive portfolio website built with React,
              Bootstrap, and custom CSS for a unique, personalized design. This
              site showcases my skills, projects, and experiences while
              reflecting my passion for coding and creativity. With a
              handcrafted UI, smooth navigation, and an interactive project
              gallery, it offers an engaging way to explore my work. The custom
              styling ensures a distinctive look that sets my portfolio apart.
              Visitors can learn about my journey in computer science and easily
              connect with me.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCards;
