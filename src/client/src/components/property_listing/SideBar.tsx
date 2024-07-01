import { CircleUserRound, ClipboardPlus, List, LogOut } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
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
      <div
        className={`min-h-[852px] flex-col bg-gray-900 text-white lg:flex lg:h-screen lg:w-64 ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        <Link to="/" className="hidden p-4 text-2xl font-bold lg:block">
          Ethio Property
        </Link>
        <nav className="flex-grow">
          <ul>
            <Link to="/property_listing">
              <li className="flex p-4 hover:bg-gray-700">
                <div className="flex">
                  {" "}
                  <List className="mr-4" /> <p>Properties</p>
                </div>
              </li>
            </Link>
            <Link to="/create_listing">
              <li className="flex p-4 hover:bg-gray-700">
                <ClipboardPlus className="mr-4" />
                <p>Create Listing</p>
              </li>
            </Link>
            <Link to="/profile">
              <li className="flex p-4 hover:bg-gray-700">
                <CircleUserRound className="mr-4" />
                <p>My Profile</p>
              </li>
            </Link>
          </ul>
        </nav>
        <div className="mt-auto p-4 hover:bg-gray-700">
          <a href="#" className="flex">
            <LogOut className="mr-4" />
            <p>Log Out</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
