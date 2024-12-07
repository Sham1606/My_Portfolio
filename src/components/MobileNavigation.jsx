import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const MobileNavigation = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/about', label: 'About', icon: FaUser },
    { path: '/experience', label: 'Experience', icon: FaBriefcase },
    { path: '/projects', label: 'Projects', icon: FaProjectDiagram },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="mx-4 rounded-full bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 px-6 py-4 shadow-lg"
      >
        <ul className="flex justify-around items-center gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="relative group"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="flex flex-col items-center"
                >
                  <div className={`p-2 rounded-full transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-purple-500'
                      : 'text-gray-400 group-hover:text-gray-200'
                  }`}>
                    <link.icon className="w-5 h-5" />
                  </div>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="indicator"
                      className="absolute -bottom-1 w-1 h-1 bg-purple-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default MobileNavigation;

