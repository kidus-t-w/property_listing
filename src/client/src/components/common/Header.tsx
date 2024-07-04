import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, CircleUserRound, Menu } from "lucide-react";
import { isAuthenticated } from "@/lib/utils";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const isAuth = isAuthenticated();

  return (
    <header className="sticky top-0 z-50 mb-4 flex h-16 items-center justify-between border-b-2 bg-gray-100 px-4 py-2 font-poppins">
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl font-bold">Ethio Property</h1>
      </Link>
      <nav className="hidden gap-16 font-semibold sm:flex">
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
      <div className="hidden items-center space-x-6 sm:flex">
        {isAuth && (
          <Link className="text-md font-semibold" to="/profile">
            <CircleUserRound className="scale-150  rounded-full mr-8"/>
          </Link>
        )}
        {!isAuth && (
          <>
            <Link className="text-md font-semibold" to="/login">
              Login
            </Link>
            <Button
              asChild
              className="text-md w-40 bg-blue-700 hover:bg-blue-500"
            >
              <Link className="inline-block" to="/profile">
                Free Listing
              </Link>
            </Button>
          </>
        )}
      </div>
      <div className="sm:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-700 focus:outline-none"
        >
          {showMenu ? <Menu /> : <Menu />}
        </button>
        {showMenu && (
          <nav className="absolute right-0 top-16 mx-auto flex w-full flex-col items-center rounded-lg bg-white p-4 shadow-md">
            <Link
              to="/"
              className="mb-2 block w-full rounded-md p-2 text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="mb-2 block w-full rounded-md p-2 text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="mb-2 block w-full rounded-md p-2 text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Contact
            </Link>
            <Link
              to="/profile"
              className="mb-2 block w-full rounded-md p-2 text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Free Listing
            </Link>
            <Link
              to="/login"
              className="mb-2 block w-full rounded-md p-2 text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
