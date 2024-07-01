import card from "@/assets/img/front.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {

    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);

  };

  useEffect(() => {

    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12 px-6 lg:px-24 text-white mb-8">
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Find Your Dream Home: Explore, Compare, and Secure Properties with Ease!</h1>
        <p className="mb-6">
        "Discover Your Perfect Home"
        </p>
        {/* Search bar */}
        <form onSubmit={handleSubmit} className="mb-6 bg-slate-100 p-3 rounded-lg flex items-center justify-between text-black">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

          />
          <button>
          <FaSearch className="text-slate-600" />

          </button>
        </form>
        <div className="flex space-x-8">
          <div>
            <h2 className="text-2xl font-bold">200</h2>
            <p>Properties Listed</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">30</h2>
            <p>Realtors</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">10</h2>
            <p>Properties Sold</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 justify-center lg:justify-end mt-8 lg:mt-0 hidden lg:flex">
        <div className="relative">
          <img
            className="rounded-lg shadow-lg w-32 h-32 lg:w-full lg:h-[350px]"
            src={card}
            alt="Student 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
