import "./App.css";
import NavBar from "./components/Navbar.tsx";
import AboutMe from "./components/AboutMe.tsx";
import StartPage from "./components/StartPage.tsx";
import ProjectCards from "./components/ProjectCards.tsx";
import image1 from "./assets/Hasbulla.jpeg";
import image2 from "./assets/Subject.png";
import image3 from "./assets/luffy.jpg";

function App() {
  return (
    <div>
      <NavBar />

      <section>
        <StartPage image={image2} />
      </section>

      <section id="AboutMe">
        <AboutMe imageSrc={image2} />
      </section>

      <section id="Projects" className="in-body header">
        <h2>Projects</h2>
        <ProjectCards image1={image1} image2={image2} image3={image3} />
      </section>

      <section id="Contact" className="in-body header">
        <h2>Contact</h2>
      </section>
    </div>
  );
}

export default App;
