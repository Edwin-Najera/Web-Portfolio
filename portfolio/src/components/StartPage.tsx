import { Fragment } from "react/jsx-runtime";
import "./global.css";

const StartPage = () => {
  return (
    <Fragment>
      <div className="d-block-flex Intro">
        <div className="side-img">
          Hi my name is
          <h1 className="img-text">Edwin Najera</h1>
        </div>
      </div>
      <div className="bottom" />
    </Fragment>
  );
};

export default StartPage;
