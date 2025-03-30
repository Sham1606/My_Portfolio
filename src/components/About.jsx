import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import { highlightWords } from "../utils/highlights";

const About = () => {
  const [activeCategory, setActiveCategory] = useState(null); // No default active category

  const wordsToHighlight = {
    "Front-End": "#A25CBF",
    "Machine Learning": "#4DE18B",
    "React": "#61DAFB",
    "Tailwind CSS": "#06B6D4",
    "MySQL": "#4479A1",
    "MongoDB": "#4DB33D",
    "Scikit-Learn": "#F7931E",
    "Tensorflow": "#FF6F00",
    "NLP": "#4DB33D",
    "Git": "#F05032",
  };

  const skills = {
    "Web Technology 💻": [
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Flask", icon: "🌶️" },
    ],
    "Data Science 🤖": [
      { name: "Scikit-Learn", icon: "🧠" },
      { name: "NLP", icon: "🗣️-> 🤖" },
    ],
    "Database 🗄️": [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
    ],
    "Version Control 🔄": [
      { name: "Git", icon: "🌿" },
    ]
  };

  const SkillCard = ({ skill }) => (
    <motion.div
      className="bg-neutral-800 p-4 rounded-xl shadow-md text-center flex flex-col items-center justify-center h-24 sm:h-28 border border-neutral-700 hover:border-neutral-500"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-3xl sm:text-4xl mb-2 sm:mb-3 block">{skill.icon}</span>
      <span className="text-xs sm:text-sm font-medium" style={{ color: wordsToHighlight[skill.name] || 'white' }}>
        {skill.name}
      </span>
    </motion.div>
  );

  const CategoryButton = ({ category, isActive, onClick }) => (
    <motion.button
      className={`text-left px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-neutral-700 to-neutral-800 shadow-md text-white' 
          : 'bg-neutral-900 text-neutral-400 hover:text-white'
      }`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {category}
    </motion.button>
  );

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <motion.div
        className="mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-neutral-400 to-neutral-700 mx-auto mt-4 sm:mt-6 mb-2 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:gap-12">
        {/* About Text Section */}
        <motion.div
          className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-neutral-700 inline-block">Who am I?</h2>
          <p className="text-base sm:text-lg leading-relaxed text-neutral-200">
            {highlightWords(ABOUT_TEXT, wordsToHighlight)}
          </p>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-neutral-700"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-neutral-700 inline-block">My Expertise</h2>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center sm:justify-start">
            {Object.entries(skills).map(([category, _]) => (
              <CategoryButton
                key={category}
                category={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              />
            ))}
          </div>
          
          <AnimatePresence>
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-2 pb-4">
                  <h3 className="text-lg sm:text-xl text-neutral-300 mb-4 font-medium">{activeCategory} Skills:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {skills[activeCategory].map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {!activeCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-neutral-400"
            >
              <p className="text-sm sm:text-base">Select a category to view my skills</p>
              <motion.div 
                className="mt-4 text-2xl"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ☝️
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default About;