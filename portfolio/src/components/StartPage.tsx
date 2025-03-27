import Profile from "./Photos/Profile Photo.jpg";
import "./global.css";

const StartPage = () => {
  return (
    <div className="container-fluid" id="Intro">
      <img
        className="img-profile d-inline-block"
        src={Profile}
        alt="ProfilePic"
      />
      <div className="container sideimg d-inline-block">
        <h1 className="img-text">Edwin L Najera Gonzalez</h1>
        <p className="typer"> Computer Science Undergraduate</p>
      </div>
    </div>
  );
};

export default StartPage;
