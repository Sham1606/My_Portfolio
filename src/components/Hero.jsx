import React from 'react';
import { HERO_CONTENT } from "../constants";
import auro from "../assets/auro.jpg";
import { motion } from "framer-motion";
import { highlightWords } from "../utils/highlights";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;

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

  return (
    <div className="flex flex-col items-center pt-10 md:pt-20 lg:pt-10 lg:h-screen lg:justify-start pb-24">
      <div className="max-w-3xl mx-auto text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-32 h-32 mx-auto"
        >
          <img
            src={auro}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-2 border-neutral-700"
          />
          <div className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-20"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-gray-400 text-lg font-light">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl font-light text-white">
            Sham Ganesh
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed font-light"
        >
          {highlightWords(HERO_CONTENT, wordsToHighlight)}
        </motion.p>

        {/* Social links - only shown on mobile */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-8 pt-8"
          >
            <a
              href="https://github.com/Sham1606"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sham-ganesh-s-922061302/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/sham_1606"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;
