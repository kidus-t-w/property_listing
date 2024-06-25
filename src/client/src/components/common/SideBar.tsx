import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="lg:hidden flex justify-between items-center p-4 bg-gray-900 text-white">
        <div className="text-2xl font-bold">RealEthio.com</div>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={`lg:flex flex-col bg-gray-900 text-white lg:w-64 min-h-[852px] lg:h-[800px] ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="p-4 text-2xl font-bold hidden lg:block">RealEthio.com</div>
        <nav className="flex-grow">
          <ul>
            <li className="p-4 hover:bg-gray-700">< Link to='/property_listing'>Properties</Link></li>
            <li className="p-4 hover:bg-gray-700">< Link to='/create_listing'>Create Listing</Link></li>
            <li className="p-4 hover:bg-gray-700">< Link to='/profile'>My Profile</Link></li>
          </ul>
        </nav>
        <div className="mt-auto p-4 hover:bg-gray-700">
          <a href="#">Log Out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
