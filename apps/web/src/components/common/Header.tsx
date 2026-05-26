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
          "sticky top-0 z-50 w-full transition-all duration-300 mb-4",
          scrolled
            ? "shadow-[0_2px_24px_rgba(44,31,20,0.10)] bg-gray-200 backdrop-blur-md border-b border-blue-800/30"
            : "bg-white border-b border-blue-800/20"
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group flex items-center gap-3 select-none"
            aria-label="Ethio Property – home"
          >
            <span className="relative bg-gray-700 flex h-9 w-9 shrink-0 items-center justify-center rounded-md overflow-hidden transition-transform duration-75 group-hover:scale-105" >
              <Sparkles
                className="h-4 w-4 text-gray-300 transition-transform duration-300 group-hover:rotate-12"
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

            <span className="font-light flex flex-col leading-none">
              <span
                className="text-[22px] font-[500] tracking-tight text-gray-800 sm:text-lg"
              >
                Ethio Property
              </span>
              <span
                className="text-[10px] tracking-[0.18em] uppercase text-gray-400 font-[300]"
              >
                Real Estate
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 sm:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = isActiveLink(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "group relative flex items-center text-sm gap-1.5 tracking-wide uppercase font-[400] transition-colors duration-[var(--ep-dur)]",
                    isActive
                      ? "text-gray-800"
                      : "text-gray-800/90 hover:text-[var(--ep-ink)]"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110",
                      isActive ? "text-gray-800" : "text-gray-800/80"
                    )}
                    aria-hidden="true"
                  />
                  {link.name}

                  {/* Active underline — drawn like a wax seal stroke */}
                  <span
                    className={cn(
                      "absolute bg-gray-800 -bottom-[22px] left-0 right-0 h-[1.5px] rounded-full transition-transform duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden items-center gap-5 sm:flex">
            {isAuth ? (
              <Link
                to="/profile"
                className="group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-[var(--ep-dur)] hover:bg-[var(--ep-linen)]"
                style={{ border: "1px solid var(--ep-stone)" }}
                aria-label="My profile"
              >
                <CircleUserRound
                  className="h-[18px] w-[18px] text-[var(--ep-earth)] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 text-[13px] tracking-[0.06em] uppercase font-[400] text-[var(--ep-ink)]/70 transition-colors duration-[var(--ep-dur)] hover:text-[var(--ep-ink)]"
                >
                  <LogIn className="h-[13px] w-[13px]" aria-hidden="true" />
                  Login
                </Link>

                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="group relative h-9 overflow-hidden rounded-md px-5 text-sm tracking-tight uppercase font-[400] transition-all duration-[var(--ep-dur)] hover:opacity-90 focus-visible:ring-[var(--ep-terra)]"
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

          {/* ── Mobile Menu Trigger ── */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-[var(--ep-radius)] transition-colors duration-[var(--ep-dur)] hover:bg-[var(--ep-linen)] sm:hidden"
                style={{ border: "1px solid var(--ep-stone)/60" }}
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5 text-[var(--ep-earth)]" aria-hidden="true" />
              </Button>
            </SheetTrigger>

            {/* ── Mobile Drawer ── */}
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[340px] flex flex-col border-l"
              style={{
                background: "var(--ep-sand)",
                borderColor: "var(--ep-stone)",
                fontFamily: "var(--ep-sans)",
              }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center gap-3 border-b py-5 px-2"
                style={{ borderColor: "var(--ep-linen)" }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--ep-radius)]"
                  style={{ background: "var(--ep-earth)" }}
                >
                  <Sparkles className="h-4 w-4 text-[var(--ep-sand)]" aria-hidden="true" />
                </span>
                <span
                  className="text-[19px] font-[500] text-[var(--ep-ink)] leading-none"
                  style={{ fontFamily: "var(--ep-serif)" }}
                >
                  Ethio Property
                </span>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 pt-4 px-1" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = isActiveLink(link.path);
                  return (
                    <SheetClose key={link.path} asChild>
                      <Link
                        to={link.path}
                        className={cn(
                          "flex items-center gap-3 rounded-[var(--ep-radius)] px-4 py-3 text-[13px] tracking-[0.06em] uppercase transition-all duration-[var(--ep-dur)]",
                          isActive
                            ? "bg-[var(--ep-linen)] text-[var(--ep-earth)]"
                            : "text-[var(--ep-ink)]/70 hover:bg-[var(--ep-linen)] hover:text-[var(--ep-ink)]"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-[14px] w-[14px] shrink-0",
                            isActive ? "text-[var(--ep-terra)]" : "text-[var(--ep-stone)]"
                          )}
                          aria-hidden="true"
                        />
                        {link.name}
                        {isActive && (
                          <span
                            className="ml-auto h-1.5 w-1.5 rounded-full"
                            style={{ background: "var(--ep-terra)" }}
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              {/* Divider */}
              <div
                className="mx-4 my-4 h-px"
                style={{ background: "var(--ep-stone)/40" }}
              />

              {/* Auth actions */}
              <div className="flex flex-col gap-2 px-1">
                {isAuth ? (
                  <SheetClose asChild>
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 rounded-[var(--ep-radius)] px-4 py-3 text-[13px] tracking-[0.06em] uppercase text-[var(--ep-ink)]/70 transition-all duration-[var(--ep-dur)] hover:bg-[var(--ep-linen)] hover:text-[var(--ep-ink)]"
                    >
                      <CircleUserRound
                        className="h-[14px] w-[14px] text-[var(--ep-stone)]"
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
                        className="flex items-center gap-3 rounded-[var(--ep-radius)] px-4 py-3 text-[13px] tracking-[0.06em] uppercase text-[var(--ep-ink)]/70 transition-all duration-[var(--ep-dur)] hover:bg-[var(--ep-linen)] hover:text-[var(--ep-ink)]"
                      >
                        <LogIn
                          className="h-[14px] w-[14px] text-[var(--ep-stone)]"
                          aria-hidden="true"
                        />
                        Login
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Button
                        asChild
                        className="group mt-1 h-10 w-full rounded-[var(--ep-radius)] text-[12px] tracking-[0.1em] uppercase font-[400] text-[var(--ep-sand)] transition-all duration-[var(--ep-dur)] hover:opacity-90"
                        style={{
                          background: "var(--ep-earth)",
                          fontFamily: "var(--ep-sans)",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                        }}
                      >
                        <Link
                          to="/profile"
                          className="flex items-center justify-center gap-2"
                        >
                          <Sparkles
                            className="h-[13px] w-[13px] text-[var(--ep-stone)] transition-transform duration-300 group-hover:rotate-12"
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
              <div className="mt-auto px-4 pb-6 pt-4">
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: "var(--ep-stone)", fontFamily: "var(--ep-sans)" }}
                >
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