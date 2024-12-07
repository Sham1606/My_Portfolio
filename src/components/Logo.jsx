import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="fixed top-4 left-4 z-50">
      <div className="bg-transparent rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src="/src/components/new_logo.png" alt="Logo" className="w-8 h-8" />
      </div>
    </Link>
  );
};

export default Logo;
