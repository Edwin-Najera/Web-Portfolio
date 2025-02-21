import "./global.css";
import Hasbulla from "./Photos/hasbulla.jpeg";

const ProjectCards = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top mh-50" src={Hasbulla} alt="alt" />
          <div className="card-body">
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">This is some text for the card for now</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Java Projects</h5>
            <p className="card-text">This is some text for the card for now</p>
          </div>
        </div>
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">C++ Projects</h5>
            <p className="card-text">This is some text for the card for now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
