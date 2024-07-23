import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import { NAVIGATION_LINKS as links } from './constants';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const NAVIGATION_LINKS = links.map(link => {
    switch (link.href) {
      case '#about':
        return { ...link, ref: aboutRef };
      case '#technologies':
        return { ...link, ref: technologiesRef };
      case '#projects':
        return { ...link, ref: projectsRef };
      case '#contacts':
        return { ...link, ref: contactsRef };
      default:
        return link;
    }
  });

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <Navbar handleScroll={handleScroll} navigationLinks={NAVIGATION_LINKS} />
        <div className="container mx-auto px-8 mt-20"> {/* Adjusted margin for Navbar */}
          <Hero />
          <div id="about" ref={aboutRef}>
            <About />
          </div>
          <div id="technologies" ref={technologiesRef}>
            <Technologies />
          </div>
          <div id="projects" ref={projectsRef}>
            <Projects />
          </div>
          <div id="contacts" ref={contactsRef}>
            <ContactForm />
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
