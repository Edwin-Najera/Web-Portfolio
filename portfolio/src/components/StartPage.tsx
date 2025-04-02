import { Fragment } from "react/jsx-runtime";
import "./global.css";

const StartPage = () => {
  return (
    <Fragment>
      <div className="Intro">
        <div className="side-img ps-5 align-items-center">
          Hi my name is
          <h1 className="img-text">Edwin Najera</h1>
          Computer Science Undergrad
        </div>
        <div className="bottom" />
      </div>
    </Fragment>
  );
};

export default StartPage;
