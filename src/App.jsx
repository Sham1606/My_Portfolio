import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
const App = () => {
  return (
    <HashRouter>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />  {/* Ensure the correct component is used */}
          </Routes>
          <div id="about">
            <About />
          </div>
          <Technologies />
          <Projects />
          <Contacts />
          
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
