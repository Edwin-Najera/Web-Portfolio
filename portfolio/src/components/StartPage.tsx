import Profile from "./Photos/Profile Photo.jpg";
import "./global.css";

const StartPage = () => {
  return (
    <div className="startdiv">
      <h2 className="typer sideimg">Edwin Najera</h2>
      <img className="img-profile" src={Profile} alt="ProfilePic" />
    </div>
  );
};

export default StartPage;
