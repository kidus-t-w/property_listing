import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="hidden items-center justify-between gap-4 font-semibold sm:flex">
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link to="/services" className="text-gray-700 hover:text-gray-900">
          Our Services
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">
          Contact
        </Link>
      </nav>
      <nav className="flex flex-col items-end gap-1 font-semibold sm:hidden">
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? "Menu" : <Menu />}
        </button>
        {showMenu && (
          <>
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900">
              Our Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/listing" >
              Free Listing
            </Link>
            <Link
              to="/login"
              className=" text-gray-700 hover:text-gray-900 md:block"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" text-gray-700 hover:text-gray-900 md:block"
            >
              Signup
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
