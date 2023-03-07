import "./App.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Edu from "./screens/Edu";
import Hero from "./screens/Hero";
import NavBar from "./screens/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Edu />
      <Contact />
    </>
  );
}

export default App;
