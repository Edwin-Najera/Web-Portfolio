import "./global.css";

const ProjectCards = () => {
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <img className="card-img-top" src="src" alt="alt" />
          <div className="card-body">
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">This is some text for the card for now</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <img className="card-img-top" src="src" alt="alt" />
          <div className="card-body">
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">This is some text for the card for now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
