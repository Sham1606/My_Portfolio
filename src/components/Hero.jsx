import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from "../constants";
import auro from "../assets/auro.jpg";
import { motion } from "framer-motion";
import { highlightWords } from "../utils/highlights";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wordsToHighlight = {
    "Front-End": "#A25CBF",
    "Machine Learning": "#4DE18B",
    "React": "#61DAFB",
    "Next.js": "#FFFFFF",
    "MySQL": "#4479A1",
    "MongoDB": "#4DB33D",
    "Scikit-Learn": "#F7931E",
    "Tensorflow": "#FF6F00",
  };

  const handleExplore = () => {
    navigate('/about');
  };

  // Social links with hover animation
  const SocialLink = ({ href, icon: Icon }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={18} />
    </motion.a>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-0 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30 z-0"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto"
        >
          <img
            src={auro}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-neutral-800 shadow-2xl"
          />
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-30"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="space-y-2"
        >
          <h2 className="text-neutral-400 text-lg font-light tracking-wider">Hello, I'm</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
            Sham Ganesh
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative"
        >
          <p className="max-w-2xl mx-auto text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            {highlightWords(HERO_CONTENT, wordsToHighlight)}
          </p>
        </motion.div>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <motion.button
            onClick={handleExplore}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>

        {/* Social links - shown on all devices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center space-x-4 pt-4"
        >
          <SocialLink href="https://github.com/Sham1606" icon={FaGithub} />
          <SocialLink href="https://www.linkedin.com/in/sham-ganesh-s-922061302/" icon={FaLinkedin} />
          <SocialLink href="https://www.instagram.com/sham_1606" icon={FaInstagram} />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-500"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0] 
        }}
        transition={{ 
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity
        }}
      >
        <HiOutlineChevronDown size={24} />
      </motion.div>
    </div>
  );
};

export default Hero;