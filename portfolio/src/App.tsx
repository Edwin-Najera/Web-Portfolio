import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <h1 id="Maintenance">This Site is Under Maintenance</h1>
    </Fragment>
  );
};

export default App;
