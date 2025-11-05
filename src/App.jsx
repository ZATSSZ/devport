import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Add a state to manage dark/light mode
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div className={`min-h-screen ${darkMode ? "animated-bg-dark" : "animated-bg-light"}`}>
        {/* Pass darkMode toggle to Navbar (optional, if you want the theme switch there) */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
