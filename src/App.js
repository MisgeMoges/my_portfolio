import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Homescreen";
import Footer from "./Components/Footer";
import AboutMe from "./Pages/AboutMe";
import MyPortfolio from "./Pages/MyPortfolio";
import Testimonial from "./Pages/Testimonials";
import ContactMe from "./Pages/ContactMe";
import MySkills from "./Pages/Skills/MySkills";
import Resume from "./Pages/Resume";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/skills" element={<MySkills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
