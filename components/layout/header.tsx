"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "website/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "../ui/design-system/theme-toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Praxis Note
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-1">
          <div className="relative group px-3 py-2">
            <Link
              href="/features"
              className="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              Features <ChevronDown className="h-4 w-4 opacity-70" />
            </Link>
            <div className="absolute left-0 top-full mt-1 w-64 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black/5 dark:ring-white/10 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1">
                <Link
                  href="/features/create-aba-notes"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Create ABA Notes
                </Link>
                <Link
                  href="/features/review-aba-notes"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Review & Enhance Notes
                </Link>
                <Link
                  href="/features/track-aba-progress"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Track Client Progress
                </Link>
                <Link
                  href="/features/hipaa-compliant-aba"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  HIPAA Compliance
                </Link>
                <div className="border-t border-gray-200 dark:border-gray-700 mt-1 pt-1">
                  <Link
                    href="/features"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                  >
                    View All Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex md:items-center md:space-x-3">
          <ThemeToggle />
          {/* 
          <Link href="/auth">
            <Button
              variant="outline"
              className="h-10 px-4 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
            >
              Log In
            </Button>
          </Link>
          <Link href="/auth?signup=true">
            <Button variant="gradient" className="h-10 px-5 font-medium">
              Sign Up Free
            </Button>
          </Link>
          */}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 border-t bg-white dark:bg-gray-900 shadow-lg absolute left-0 right-0">
          <nav className="flex flex-col space-y-4 container mx-auto max-w-7xl px-4">
            <div className="border-b border-gray-100 dark:border-gray-800">
              <Link
                href="/features"
                className="px-2 py-3 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <div className="ml-4 mt-1 space-y-1 pb-3">
                <Link
                  href="/features/create-aba-notes"
                  className="block px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create ABA Notes
                </Link>
                <Link
                  href="/features/review-aba-notes"
                  className="block px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Review & Enhance Notes
                </Link>
                <Link
                  href="/features/track-aba-progress"
                  className="block px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Track Client Progress
                </Link>
                <Link
                  href="/features/hipaa-compliant-aba"
                  className="block px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HIPAA Compliance
                </Link>
              </div>
            </div>
            <Link
              href="/pricing"
              className="px-2 py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className="px-2 py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="px-2 py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-2 py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/design-system"
              className="px-2 py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Design System
            </Link>
            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
            <div className="pt-4 flex flex-col space-y-3">
              <Link href="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </Link>
              <Link
                href="/auth?signup=true"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="gradient" className="w-full">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
