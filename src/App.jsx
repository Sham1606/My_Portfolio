import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import { NAVIGATION_LINKS as links } from './constants';
import ScrollToTopButton from './components/ScrollToTopButton';
import MobileNavigation from './components/MobileNavigation';
import Experience from './components/Experience';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const NAVIGATION_LINKS = links.map(link => {
    switch (link.href) {
      case '#about':
        return { ...link, ref: aboutRef };
      case '#experience':
        return { ...link, ref: experienceRef };
      case '#projects':
        return { ...link, ref: projectsRef };
      case '#contacts':
        return { ...link, ref: contactsRef };
      default:
        return link;
    }
  });

  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MobileRoutes = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return (
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    );
  };

  const DesktopContent = () => (
    <>
      <Hero />
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="experience" ref={experienceRef}>
        <Experience />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="contacts" ref={contactsRef}>
        <ContactForm />
      </div>
    </>
  );

  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        {!isMobile && <Navbar handleScroll={handleScroll} navigationLinks={NAVIGATION_LINKS} />}
        <div className={`container mx-auto px-8 ${isMobile ? 'pb-20' : 'mt-20'}`}>
          {isMobile ? <MobileRoutes /> : <DesktopContent />}
        </div>
        {isMobile && <MobileNavigation />}
        {!isMobile && <ScrollToTopButton />}
      </div>
    </Router>
  );
};

export default App;
