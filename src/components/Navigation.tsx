"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavbarProps {
  lenis?: {
    scrollTo: (target: number, options?: { immediate?: boolean }) => void;
  };
}

const Navbar: React.FC<NavbarProps> = ({ lenis }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Simple scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero");
      if (!heroSection) {
        setIsDarkMode(false);
        return;
      }

      const rect = heroSection.getBoundingClientRect();
      const isHeroVisible = rect.top <= 0 && rect.bottom >= 0;
      setIsDarkMode(isHeroVisible);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (path: string) => {
    if (pathname === path) {
      lenis?.scrollTo(0, { immediate: true });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
  ];

  const allNavItems = [...navItems, { name: "Contact", path: "/contact" }];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-18 px-4 transition-all duration-300 select-none md:px-10 font-NHD ${
          isDarkMode ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="flex h-16 items-center"
          >
            <Image
              src="/coannav.svg"
              alt="Company Logo"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 md:flex">
            <div className="flex space-x-6">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  onClick={() => handleNavClick(path)}
                  className={`transition-colors duration-200 hover:text-orange-500 ${
                    isDarkMode ? "text-white" : "text-black"
                  } ${pathname === path ? "text-orange-500" : ""}`}
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              onClick={() => handleNavClick("/contact")}
              className={`rounded-md px-4 py-1.5 transition-colors duration-200 hover:text-orange-500 ${
                isDarkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"
              } ${pathname === "/contact" ? "text-orange-500" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-[7px] focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-[2px] w-7 transition-all duration-300 ${
                  isDarkMode ? "bg-white" : "bg-black"
                } ${
                  isMenuOpen
                    ? i === 0
                      ? "translate-y-[9px] rotate-45"
                      : i === 1
                      ? "opacity-0"
                      : "-translate-y-[9px] -rotate-45"
                    : ""
                }`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-60 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="font-NHD h-full w-full bg-orange-400">
          {/* Overlay Header with Logo and Close Button */}
          <div className="flex h-18 items-center justify-between px-4 md:px-10">
            {/* Logo - White version */}
            <Link
              href="/"
              onClick={() => handleNavClick("/")}
              className="flex h-16 items-center"
            >
              <Image
                src="/coannav.svg"
                alt="Company Logo"
                width={120}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Close Button (X) */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex flex-col gap-[7px] focus:outline-none"
              aria-label="Close Menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-[2px] w-7 bg-white transition-all duration-300 ${
                    i === 0
                      ? "translate-y-[9px] -rotate-45"
                      : i === 1
                      ? "opacity-0"
                      : "-translate-y-[9px] rotate-45"
                  }`}
                />
              ))}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 px-4 pt-20">
            {allNavItems.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                onClick={() => handleNavClick(path)}
                className={`text-4xl text-white transition-colors duration-200 hover:text-orange-500 ${
                  pathname === path ? "text-orange-500" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-4 w-full px-4">
            <div className="line mx-auto h-0.5 bg-white/30 px-4"></div>
            <p className="mt-4 text-white/30 sm:text-left">
              &copy; {new Date().getFullYear()} COAN West Africa Limited.
              <span className="hidden sm:inline"> All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
