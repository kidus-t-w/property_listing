import { Fragment } from 'react';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  CircleUserRound,
  Menu,
  Home,
  Phone,
  Briefcase,
  LogIn,
  Sparkles,
} from "lucide-react";
import { isAuthenticated } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAuth = isAuthenticated();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <Fragment>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white shadow-[0_1px_3px_rgba(0,55,112,0.08)] border-b border-[#e3e8ee]"
            : "bg-white border-b border-[#e3e8ee]"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 select-none"
            aria-label="Ethio Property – home"
          >
            <span className="relative bg-[#0d253d] flex h-9 w-9 shrink-0 items-center justify-center rounded-md overflow-hidden transition-transform duration-75 group-hover:scale-105">
              <Sparkles
                className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover:rotate-12"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(115deg,transparent 40%,rgba(255,255,255,0.18) 50%,transparent 60%)",
                }}
              />
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-[22px] font-light tracking-[-0.26px] text-[#0d253d]">
                Ethio Property
              </span>
              <span className="text-[10px] tracking-[0.1px] uppercase text-[#64748d] font-light">
                Real Estate
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 sm:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = isActiveLink(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative flex items-center text-[15px] font-light gap-1.5 text-[#0d253d] transition-colors duration-200",
                    isActive ? "text-[#533afd]" : "hover:text-[#533afd]"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110",
                      isActive ? "text-[#533afd]" : "text-[#64748d]"
                    )}
                    aria-hidden="true"
                  />
                  {link.name}

                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="absolute -bottom-[26px] left-0 right-0 h-[2px] rounded-full bg-[#533afd]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-6 sm:flex">
            {isAuth ? (
              <Link
                to="/profile"
                className="group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:bg-[#f6f9fc] border border-[#e3e8ee]"
                aria-label="My profile"
              >
                <CircleUserRound
                  className="h-[18px] w-[18px] text-[#64748d] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 text-[15px] font-light text-[#533afd] transition-colors duration-200 hover:text-[#4434d4]"
                >
                  <LogIn className="h-[13px] w-[13px]" aria-hidden="true" />
                  Login
                </Link>

                <Button
                  asChild
                  className="h-auto rounded-full bg-[#533afd] px-4 py-2 text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4] focus-visible:ring-2 focus-visible:ring-[#533afd] focus-visible:ring-offset-2"
                  style={{ lineHeight: 1 }}
                >
                  <Link to="/profile" className="flex items-center gap-2">
                    <Sparkles
                      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
                      aria-hidden="true"
                    />
                    Free Listing
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-md border border-[#e3e8ee] transition-colors duration-200 hover:bg-[#f6f9fc] sm:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5 text-[#64748d]" aria-hidden="true" />
              </Button>
            </SheetTrigger>

            {/* Mobile Drawer */}
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[340px] flex flex-col bg-white border-l border-[#e3e8ee] p-0"
            >
              {/* Drawer header */}
              <div className="flex items-center gap-3 border-b border-[#e3e8ee] px-6 py-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0d253d]">
                  <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
                </span>
                <span className="text-[19px] font-light tracking-[-0.22px] text-[#0d253d]">
                  Ethio Property
                </span>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 pt-6" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = isActiveLink(link.path);
                  return (
                    <SheetClose key={link.path} asChild>
                      <Link
                        to={link.path}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-4 py-3 text-[15px] font-light transition-all duration-200",
                          isActive
                            ? "bg-[#f6f9fc] text-[#533afd]"
                            : "text-[#0d253d] hover:bg-[#f6f9fc] hover:text-[#533afd]"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-[14px] w-[14px] shrink-0",
                            isActive ? "text-[#533afd]" : "text-[#64748d]"
                          )}
                          aria-hidden="true"
                        />
                        {link.name}
                        {isActive && (
                          <span
                            className="ml-auto h-1.5 w-1.5 rounded-full bg-[#533afd]"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="mx-4 my-4 h-px bg-[#e3e8ee]" />

              {/* Auth actions */}
              <div className="flex flex-col gap-2 px-4">
                {isAuth ? (
                  <SheetClose asChild>
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 rounded-md px-4 py-3 text-[15px] font-light text-[#0d253d] transition-all duration-200 hover:bg-[#f6f9fc]"
                    >
                      <CircleUserRound
                        className="h-[14px] w-[14px] text-[#64748d]"
                        aria-hidden="true"
                      />
                      Profile
                    </Link>
                  </SheetClose>
                ) : (
                  <>
                    <SheetClose asChild>
                      <Link
                        to="/login"
                        className="flex items-center gap-3 rounded-md px-4 py-3 text-[15px] font-light text-[#533afd] transition-all duration-200 hover:bg-[#f6f9fc]"
                      >
                        <LogIn
                          className="h-[14px] w-[14px] text-[#533afd]"
                          aria-hidden="true"
                        />
                        Login
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Button
                        asChild
                        className="mt-2 h-auto w-full rounded-full bg-[#533afd] px-4 py-2 text-[16px] font-normal text-white transition-all duration-200 hover:bg-[#4434d4]"
                        style={{ lineHeight: 1 }}
                      >
                        <Link to="/profile" className="flex items-center justify-center gap-2">
                          <Sparkles
                            className="h-[13px] w-[13px] transition-transform duration-300 group-hover:rotate-12"
                            aria-hidden="true"
                          />
                          Free Listing
                        </Link>
                      </Button>
                    </SheetClose>
                  </>
                )}
              </div>

              {/* Footer note */}
              <div className="mt-auto px-6 pb-6 pt-8">
                <p className="text-[11px] font-light leading-relaxed text-[#64748d]">
                  Ethiopia&apos;s premier real estate marketplace — connecting people with
                  property since 2020.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </Fragment>
  );
}