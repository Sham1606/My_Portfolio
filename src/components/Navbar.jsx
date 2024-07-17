import new_logo from './new_logo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/"> {/* Use an anchor tag for navigation */}
          <img src={new_logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div className="group relative">
          <a href="https://www.linkedin.com/in/sham-ganesh-aids-922061302/" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-blue-700">
              <FaLinkedin className="w-8 transition duration-200 ease-in-out group-hover:scale-125" />
            </button>
          </a>
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-blue-700 bg-blue-700 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white">
            LinkedIn
          </span>
        </div>
        <div className="group relative">
          <a href="https://github.com/Sham1606" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-black">
              <FaGithub className="w-8 transition duration-200 ease-in-out group-hover:scale-125" />
            </button>
          </a>
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-neutral-800 bg-neutral-800 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white">
            Github
          </span>
        </div>
        <div className="group relative">
          <a href="https://x.com/ShamGan160605?t=NZ0ccTbbW4sw0YH_VwRIyA&s=09" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-white">
              <FaXTwitter className="w-8 transition duration-200 ease-in-out group-hover:scale-125" />
            </button>
          </a>
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-black bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white">
            X
          </span>
        </div>
        <div className="group relative">
          <a href="https://www.instagram.com/sham_1606?igsh=NDJ1ZDV1NWNrdTUw" target="_blank" rel="noopener noreferrer">
            <button className="hover:text-pink-400">
              <FaInstagram className="w-8 transition duration-200 ease-in-out group-hover:scale-125" />
            </button>
          </a>
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-pink-400 bg-pink-400 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-white">
            Instagram
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
