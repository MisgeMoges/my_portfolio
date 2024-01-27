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

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<AboutMe />}></Route>
            <Route path="/portfolio" element={<MyPortfolio />}></Route>
            <Route path="/testimonial" element={<Testimonial />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
            <Route path="/skills" element={<MySkills />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
