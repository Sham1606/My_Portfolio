import new_logo from './new_logo.png';
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ handleScroll, navigationLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position to change navbar appearance
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <nav className={`relative w-full left-0 right-0 top-0 z-50 transition-all duration-300 py-3 px-4 ${
      scrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'
    }`}>  
      <div className="container mx-auto flex items-center justify-between">
        <motion.a 
          href="/" 
          onClick={() => window.location.reload()} 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={new_logo} alt="logo" className="h-12 w-auto" />
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <ul className='flex items-center gap-6'>
            {navigationLinks.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href.startsWith('#') ? (
                  <a
                    className="text-sm font-medium text-white hover:text-purple-400 transition-colors"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href, item.ref)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    className="text-sm font-medium text-white hover:text-purple-400 transition-colors"
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
        
        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex gap-4">
          {[{
            href: "https://www.linkedin.com/in/sham-ganesh-s-922061302/",
            icon: <FaLinkedin className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />,
            color: "bg-blue-700",
            label: "LinkedIn"
          }, {
            href: "https://github.com/Sham1606",
            icon: <FaGithub className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />,
            color: "bg-gray-800",
            label: "Github"
          }, {
            href: "https://x.com/ShamGan160605?t=NZ0ccTbbW4sw0YH_VwRIyA&s=09",
            icon: <FaXTwitter className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />,
            color: "bg-black border border-black",
            label: "X"
          }, {
            href: "https://www.instagram.com/sham_1606?igsh=NDJ1ZDV1NWNrdTUw",
            icon: <FaInstagram className="w-10 h-6 transition duration-200 ease-in-out group-hover:scale-125" />,
            color: "bg-pink-400 border border-pink-400",
            label: "Instagram"
          }].map((social, index) => (
            <div key={index} className="group relative">
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <button className="hover:text-white">
                  {social.icon}
                </button>
              </a>
              <span className={`absolute top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg ${social.color} py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white`}>
                {social.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className='md:hidden focus:outline-none text-white' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3 }}
            className='md:hidden fixed top-16 left-0 right-0 bg-gray-900 bg-opacity-95 z-50 overflow-hidden'
          >
            <div className='container mx-auto py-4'>
              <ul className='flex flex-col items-center space-y-4'>
                {navigationLinks.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full text-center"
                  >
                    {item.href.startsWith('#') ? (
                      <a
                        className='block py-2 text-lg font-medium text-white hover:text-purple-400 transition-colors'
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href, item.ref)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        className='block py-2 text-lg font-medium text-white hover:text-purple-400 transition-colors'
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
  );
};

export default Navbar;
