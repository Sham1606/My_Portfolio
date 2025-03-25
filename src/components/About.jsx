import React, { useState } from 'react';
import my_img from "../assets/projects/my_img.png";
import { ABOUT_TEXT } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { highlightWords } from "../utils/highlights";
import new_logo from './new_logo.png';

const About = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const wordsToHighlight = {
    "Front-End": "#A25CBF",
    "Machine Learning": "#4DE18B",
    "React": "#61DAFB",
    "Tailwind CSS": "#06B6D4",
    "MySQL": "#4479A1",
    "MongoDB": "#4DB33D",
    "Scikit-Learn": "#F7931E",
    "Tensorflow": "#FF6F00",
    "NLP" : "#4DB33D",
  };

  const skills = {
    "Web Technology 💻": [
      // { name: "Front-End", icon: "💻" },
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Flask" , icon: "🌶️" },
    ],
    "Machine Learning 🤖": [
      // { name: "Machine Learning", icon: "🤖" },
      { name: "Scikit-Learn", icon: "🧠" },
      { name: "NLP", icon: "🗣️-> 🤖" },
    ],
    "Database 🗄️": [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
    ],
  };

  const SkillCard = ({ skill }) => (
    <motion.div
      className="bg-neutral-700 p-3 rounded-lg text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-2xl mb-2 block">{skill.icon}</span>
      <span className="text-sm" style={{ color: wordsToHighlight[skill.name] || 'white' }}>
        {skill.name}
      </span>
    </motion.div>
  );

  const CategoryButton = ({ category, isActive, onClick }) => (
    <motion.button
      className={`w-full text-left p-4 rounded-lg mb-2 font-semibold text-lg ${
        isActive ? 'bg-neutral-800' : 'bg-neutral-900'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {category}
      <span className="float-right">{isActive ? '▼' : '▶'}</span>
    </motion.button>
  );

  return (
    <div className="border-b border-neutral-900 pb-12">
      <div className="lg:hidden fixed top-6 left-6 z-10">
        <motion.a 
          href="/"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          {/* <img src={new_logo} alt="Logo" className="w-16 h-16 " /> */}
        </motion.a>
      </div>
      <motion.h1 
        className="my-20 text-center text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap items-start justify-center">
        <motion.div 
          className="w-full lg:w-1/3 p-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={my_img} alt="about" className="w-full h-auto rounded-xl shadow-lg" />
        </motion.div>
        <motion.div 
          className="w-full lg:w-2/3 p-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-xl p-6 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Who am I?</h2>
            <p className="text-lg mb-6">
              {highlightWords(ABOUT_TEXT, wordsToHighlight)}
            </p>
            <h3 className="text-xl font-bold mb-4">My Expertise</h3>
            {Object.entries(skills).map(([category, categorySkills], index) => (
              <div key={category} className="mb-4">
                <CategoryButton
                  category={category}
                  isActive={activeCategory === category}
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                />
                <AnimatePresence>
                  {activeCategory === category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                        {categorySkills.map((skill) => (
                          <SkillCard key={skill.name} skill={skill} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

