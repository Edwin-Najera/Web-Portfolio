import "./global.css";

const ProjectCards = () => {
  return (
    <div className="row container">
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top mh-50" alt="Project Image" />
          <div className="card-body">
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">
              Developed a personal web portfolio using nodejs and Bootstrap.
              Features in 'About Me' showcasing skills and details about me.
            </p>
          </div>
        </div>
      </div>
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
