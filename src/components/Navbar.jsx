import new_logo from './new_logo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center">
         <img src={new_logo} alt="logo" className="logo" />
       </div>
       <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
         <a href="https://www.linkedin.com/in/sham-ganesh-aids-922061302/" target="_blank" rel="noopener noreferrer">
           <FaLinkedin />
         </a>
         <a href="https://github.com/Sham1606" target="_blank" rel="noopener noreferrer">
           <FaGithub />
         </a>
         <a href="https://x.com/ShamGan160605?t=NZ0ccTbbW4sw0YH_VwRIyA&s=09" target="_blank" rel="noopener noreferrer">
           <FaSquareXTwitter />
         </a>
         <a href="https://www.instagram.com/sham_1606?igsh=NDJ1ZDV1NWNrdTUw" target="_blank" rel="noopener noreferrer">
           <FaInstagram />
         </a>
       </div>
    </nav>
  );
};

export default Navbar;
