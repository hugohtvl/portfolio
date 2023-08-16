import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import "./App.scss";
import Context from "./components/Context";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const [proExp, setProExp] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const contextValues = useMemo(
    () => ({ proExp, setProExp, education, setEducation, skills, setSkills }),
    [proExp, setProExp, education, setEducation, skills, setSkills]
  );
  return (
    <Context.Provider value={contextValues}>
      <Router>
        <div id="appContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
};

export default App;
