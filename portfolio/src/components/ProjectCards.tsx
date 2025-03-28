import "./global.css";

const ProjectCards = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <a
        className="col-sm-4"
        href="https://github.com/Edwin-Najera/Web-Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="card" id="projects">
          <img className="card-img-top mh-50" alt="Project Image" />
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
      <div className="col-sm-4">
        <a
          href="https://github.com/Edwin-Najera/Java-Mini-Projects"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="card mb-5" id="projects">
            <div className="card-body">
              <h5 className="card-title">Java Projects</h5>
              <p className="card-text">
                Small side projects using Java language
              </p>
            </div>
          </div>
        </a>
        <div className="card" id="projects">
          <div className="card-body">
            <h5 className="card-title">C++ Projects</h5>
            <p className="card-text">Small side projects using C++ language</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
