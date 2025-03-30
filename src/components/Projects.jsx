import React, { useState, useEffect } from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Extract unique categories from projects and filter out any "other" category
  const uniqueCategories = [...new Set(PROJECTS.flatMap(project => 
    project.categories ? project.categories.filter(cat => cat.toLowerCase() !== 'other') : []
  ))];
  
  // Set initial filter state
  useEffect(() => {
    // Start with no filter (show all projects)
    setFilter('');
  }, []);
  
  // Filter projects based on selected category
  const filteredProjects = filter === '' 
    ? PROJECTS 
    : PROJECTS.filter(project => 
        project.categories && project.categories.includes(filter)
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 " id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            My Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Explore my creative works showcasing problem-solving skills and technical expertise
          </p>
        </motion.div>

        {/* Filter Buttons - Only show if there are categories */}
        {uniqueCategories.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            <motion.button
              onClick={() => setFilter('')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === '' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </motion.button>
            
            {uniqueCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Projects Grid with improved responsiveness */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      console.error(`Failed to load image for ${project.title}`);
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x250?text=Project+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  
                  {/* Overlay with action buttons */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-4">
                      {project.repositoryUrl && (
                        <motion.a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 sm:p-3 bg-gray-800 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View Repository"
                        >
                          <FaGithub className="text-base sm:text-lg" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 sm:p-3 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View Live Site"
                        >
                          <FaExternalLinkAlt className="text-base sm:text-lg" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                    {project.year && (
                      <div className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                        {project.year}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-3 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies && project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-gray-700 bg-opacity-50 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.liveUrl || project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-xs sm:text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Explore Project <FaArrowRight className="ml-1.5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg sm:text-xl text-gray-400">No projects found in this category.</p>
            <button 
              onClick={() => setFilter('')}
              className="mt-4 px-5 sm:px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
            >
              View All Projects
            </button>
          </motion.div>
        )}
        
        {/* Show "View All Projects" button only if we're showing a filtered view and there are more projects available */}
        {filter !== '' && PROJECTS.length > filteredProjects.length && (
          <motion.div 
            className="text-center mt-10 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setFilter('')}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full inline-flex items-center text-sm sm:text-base font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;