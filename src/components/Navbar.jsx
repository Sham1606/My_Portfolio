import new_logo from './new_logo.png';
import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ handleScroll, navigationLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href, ref) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      handleScroll(ref);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="mb-20 flex items-center justify-between left-0 right-0 top-0 z-50 bg-transparent py-6 h-20">
        <div className="flex items-center justify-between w-full px-6">
          <motion.a 
            href="/" 
            onClick={() => window.location.reload()} 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={new_logo} alt="logo" className="logo left-1" />
          </motion.a>
          <div className="hidden lg:flex flex-grow justify-center">
            <ul className='flex items-center gap-8'>
              {navigationLinks.map((item, index) => (
                <li key={index}>
                  {item.href.startsWith('#') ? (
                    <a
                      className="text-sm hover:text-yellow-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href, item.ref)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="text-sm hover:text-yellow-400"
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex gap-4">
            <div className="group relative">
              <a href="https://www.linkedin.com/in/sham-ganesh-aids-922061302/" target="_blank" rel="noopener noreferrer">
                <button className="hover:text-blue-700">
                  <FaLinkedin className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />
                </button>
              </a>
              <span className="absolute top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-blue-400 bg-blue-700 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white">
                LinkedIn
              </span>
            </div>
            <div className="group relative">
              <a href="https://github.com/Sham1606" target="_blank" rel="noopener noreferrer">
                <button className="hover:text-black">
                  <FaGithub className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />
                </button>
              </a>
              <span className="absolute top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-400 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white">
                Github
              </span>
            </div>
            <div className="group relative">
              <a href="https://x.com/ShamGan160605?t=NZ0ccTbbW4sw0YH_VwRIyA&s=09" target="_blank" rel="noopener noreferrer">
                <button className="hover:text-white">
                  <FaXTwitter className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />
                </button>
              </a>
              <span className="absolute top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-black bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white">
                X
              </span>
            </div>
            <div className="group relative">
              <a href="https://www.instagram.com/sham_1606?igsh=NDJ1ZDV1NWNrdTUw" target="_blank" rel="noopener noreferrer">
                <button className="hover:text-pink-400">
                  <FaInstagram className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />
                </button>
              </a>
              <span className="absolute top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-pink-400 bg-pink-400 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white">
                Instagram
              </span>
            </div>
          </div>
          {/* Mobile menu button */}
          <button className='lg:hidden focus:outline-none' onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className='ms-auto h-7 w-7' />
            ) : (
              <FaBars className='m-2 h-7 w-7' />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }} 
              transition={{ duration: 0.5 }}
              className='lg:hidden fixed top-0 right-0 h-50 w-60 bg-gray-500 bg-opacity-25 z-50 flex flex-col items-center'
            >
              <div className='bg-transparent bg-opacity-90 h-full w-full flex flex-col items-center relative'>
                <button className='focus:outline-none absolute top-4 right-4 p-2 flex items-center justify-center' onClick={toggleMobileMenu}>
                  <FaTimes className='h-7 w-7 text-white' />
                </button>
                <ul className='flex flex-col items-center justify-center space-y-4 py-4 h-full'>
                  {navigationLinks.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.href.startsWith('#') ? (
                        <a
                          className='block text-xl font-semibold text-white'
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href, item.ref)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          className='block text-xl font-semibold text-white'
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="fixed top-1/2 transform -translate-y-1/2 left-0 p-4 z-50 flex flex-col space-y-4 bg-gray-700 bg-opacity-75 rounded-lg lg:hidden">
        <motion.div 
          className="group relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="https://www.linkedin.com/in/sham-ganesh-aids-922061302/" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-blue-800">
              <FaLinkedin className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />
            </button>
          </a>
        </motion.div>

        <motion.div 
          className="group relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://github.com/Sham1606" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-black">
              <FaGithub className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />
            </button>
          </a>
        </motion.div>

        <motion.div 
          className="group relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://x.com/ShamGan160605?t=NZ0ccTbbW4sw0YH_VwRIyA&s=09" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-white">
              <FaXTwitter className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />
            </button>
          </a>
        </motion.div>

        <motion.div 
          className="group relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://www.instagram.com/sham_1606?igsh=NDJ1ZDV1NWNrdTUw" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-pink-400">
              <FaInstagram className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />
            </button>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
