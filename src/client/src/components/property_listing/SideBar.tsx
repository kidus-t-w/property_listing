import { CircleUserRound, ClipboardPlus, List, LogOut } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-gray-900 p-4 text-white lg:hidden">
        <Link to="/" className="text-2xl font-bold">
          Ethio Property
        </Link>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="h-6 w-6"
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
      <div className="min-w-80 bg-gray-900 text-white">
        <Link to="/" className="hidden p-4 text-2xl font-bold lg:block">
          Ethio Property
        </Link>
        <nav>
          <ul className="flex flex-col items-start">
            <li className="hover:bg-gray-700 w-full pl-4 py-4">
              <Link to="/profile/listings" className="flex gap-2">
                <List /> <p>Properties</p>
              </Link>
            </li>
            <li className="hover:bg-gray-700 w-full pl-4 py-4">
              <Link to="/profile/create_listing" className="flex gap-2">
                <ClipboardPlus />
                <p>Create Listing</p>
              </Link>
            </li>
            <li className="hover:bg-gray-700 w-full pl-4 py-4">
              <Link to="/profile" className="flex gap-2">
                <CircleUserRound />
                <p>My Profile</p>
              </Link>
            </li>
            <li className="hover:bg-gray-700 w-full pl-4 py-4">
              <Link to="/" className="flex gap-2">
                <LogOut />
                <p>Log Out</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 hover:bg-gray-700">
          <a href="#" className="flex gap-2"></a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
