import "./global.css";

const ProjectCards = () => {
  return (
    <div className="row container">
      <a
        className="col-sm-4"
        href="https://github.com/Edwin-Najera/Web-Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="card">
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
      <div className="col-sm-3">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Java Projects</h5>
            <p className="card-text">Small side projects using Java language</p>
          </div>
        </div>
        <div className="card">
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
