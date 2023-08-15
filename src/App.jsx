import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import "./App.scss";
import Context from "./components/Context";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const [popup, setPopup] = useState(false);
  const contextValues = useMemo(() => ({ popup, setPopup }), [popup, setPopup]);
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
