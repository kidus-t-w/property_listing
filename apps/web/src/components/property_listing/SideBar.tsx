import { CircleUserRound, ClipboardPlus, List, LogOut } from "lucide-react";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/");
  };

  const navItems = [
    { path: "/profile/listings", label: "Properties", icon: List },
    { path: "/profile/create_listing", label: "Create Listing", icon: ClipboardPlus },
    { path: "/profile", label: "My Profile", icon: CircleUserRound, exact: true },
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile header */}
      <div className="flex items-center justify-between border-b border-[#e3e8ee] bg-white p-4 lg:hidden">
        <Link to="/" className="text-xl font-light tracking-[-0.22px] text-[#0d253d]">
          Ethio Property
        </Link>
        <button
          onClick={toggleMenu}
          className="rounded-md p-2 text-[#64748d] hover:bg-[#f6f9fc] focus:outline-none"
        >
          <svg
            className="h-5 w-5"
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

      {/* Sidebar navigation */}
      <div
        className={`w-full rounded-xl border border-[#e3e8ee] bg-white shadow-[0_1px_3px_rgba(0,55,112,0.08)] lg:w-72 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        {/* Logo for desktop */}
        <Link
          to="/"
          className="hidden border-b border-[#e3e8ee] p-5 text-xl font-light tracking-[-0.22px] text-[#0d253d] lg:block"
        >
          Ethio Property
        </Link>

        <nav className="p-3">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path, item.exact);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 rounded-full px-4 py-2.5 text-[15px] font-light transition-all duration-200 ${
                      active
                        ? "bg-[#b9b9f9] text-[#4434d4]"
                        : "text-[#0d253d] hover:bg-[#f6f9fc]"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? "text-[#4434d4]" : "text-[#64748d]"}`} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={handleLogout}
                type="button"
                className="flex w-full items-center gap-3 rounded-full px-4 py-2.5 text-[15px] font-light text-[#0d253d] transition-all duration-200 hover:bg-[#f6f9fc]"
              >
                <LogOut className="h-4 w-4 text-[#64748d]" />
                <span>Log Out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;