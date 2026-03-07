import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import City from "./components/City";
import MainAttraction from "./components/MainAttraction";
import OtherAttractions from "./components/OtherAttractions";
import Gallery from "./components/Gallery";
import FeedbackForm from "./components/Feedback";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Про місто</Link>
        <Link to="/main-attraction">Головна пам'ятка</Link>
        <Link to="/other-attractions">Цікаві місця</Link>
        <Link to="/gallery">Галерея</Link>
        <Link to="/feedback">Відгук</Link>
      </nav>

      <div className="content-container">
        <Routes>
          <Route path="/" element={<City />} />
          <Route path="/main-attraction" element={<MainAttraction />} />
          <Route path="/other-attractions" element={<OtherAttractions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
