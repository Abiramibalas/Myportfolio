import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
// Future pages:
import Resume from "./components/Resume";
import Projects from "./components/projects";
import Internship from "./components/internship";
import Contact from "./components/contact";


export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Poppins, Segoe UI, sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}