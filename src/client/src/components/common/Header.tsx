import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {Menu} from "lucide-react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 mb-4 flex items-center justify-between border-b-2 bg-gray-100 p-2 px-4">
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl font-bold">Ethio Property</h1>
      </Link>
      <nav className="hidden sm:flex gap-16 font-semibold">
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link to="/services" className="text-gray-700 hover:text-gray-900">
          Services
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">
          Contact
        </Link>
      </nav>
      <div className="hidden sm:flex items-center space-x-4">
        <Link to="/create_listing">
          <Button className="w-[100px] bg-blue-700" >Free Listing</Button>
        </Link>
        <Link to="/auth" className="text-gray-700 hover:text-gray-900">
          <Button className="w-[100px] bg-pink-500">Login</Button>
        </Link>
      </div>
      <div className="sm:hidden">
        <button onClick={() => setShowMenu(!showMenu)} className="text-gray-700 focus:outline-none">
          {showMenu ? <Menu/>: <Menu />}
        </button>
        {showMenu && (
          <nav className="absolute right-0 top-16 bg-white shadow-md rounded-lg p-4 w-full mx-auto flex flex-col items-center">
            <Link to="/" className="block w-full mb-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 p-2 rounded-md text-center">
              Home
            </Link>
            <Link to="/services" className="block w-full mb-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 p-2 rounded-md text-center">
              Services
            </Link>
            <Link to="/contact" className="block w-full mb-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 p-2 rounded-md text-center">
              Contact
            </Link>
            <Link to="/create_listing" className="block w-full mb-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 p-2 rounded-md text-center">
              Free Listing
            </Link>
            <Link to="/auth" className="block w-full mb-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 p-2 rounded-md text-center">
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
