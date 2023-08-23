import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import "./App.scss";
import Context from "./components/Context";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import projectsList from "./assets/ProjectsList.jsx";
import Contact from "./pages/Contact";

const App = () => {
  const [proExp, setProExp] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(projectsList);
  const contextValues = useMemo(
    () => ({
      proExp,
      setProExp,
      education,
      setEducation,
      skills,
      setSkills,
      projects,
      setProjects,
    }),
    [
      proExp,
      setProExp,
      education,
      setEducation,
      skills,
      setSkills,
      projects,
      setProjects,
    ]
  );
  return (
    <Context.Provider value={contextValues}>
      <Router>
        <div id="appContainer">
          <div id="navbarApp">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Context.Provider>
  );
};

export default App;
