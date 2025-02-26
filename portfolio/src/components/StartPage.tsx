import Profile from "./Photos/Profile Photo.jpg";
import "./global.css";

const StartPage = () => {
  return (
    <div className="startdiv">
      <div className="sideimg">
        <h1>Edwin L Najera Gonzalez</h1>
        <p className="typer"> Computer Science Undergraduate</p>
      </div>
      <img className="img-profile" src={Profile} alt="ProfilePic" />
    </div>
  );
};

export default StartPage;
