import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          My Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          A showcase of my journey, highlighting impactful roles and experiences.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-8 max-w-7xl border-gray-800 "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800 border  rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300  w-full sm:w-96"
            >
              <div className="p-4 flex-grow flex flex-col justify-between ">
                <div>
                <div className="flex items-center mb-2">
                    <img
                      src={exp.logo} // Directly use the logo imported in EXPERIENCES
                      alt={`${exp.company} logo`}
                      className="h-10 w-10 rounded-full mr-3"
                    />
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-2">{exp.position}</p>
                  <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {exp.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                        +{exp.skills.length - 3}
                      </span>
                    )}
                  </div>
                  {/* <motion.a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <FaArrowRight className="ml-2" size={12} />
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
