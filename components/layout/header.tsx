"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "website/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

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
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-blue-200"
          : "bg-gradient-to-r from-blue-50/80 via-yellow-50/60 to-orange-50/80 backdrop-blur-sm"
      }`}
    >
      {/* Very subtle background decorations */}
      {!scrolled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-20 top-2 h-2 w-2 rounded-full bg-blue-300 opacity-40 hidden lg:block"></div>
          <div className="absolute left-32 top-3 h-1.5 w-1.5 rounded-full bg-orange-300 opacity-30 hidden lg:block"></div>
        </div>
      )}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex h-20 items-center justify-between relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo/praxis-note-logo-main.png"
                alt="Praxis Notes Logo"
                width={45}
                height={45}
              />
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-1">
          <div className="relative group px-3 py-2">
            <Link
              href="/features"
              className="text-sm font-nunito font-medium text-gray-700 group-hover:text-blue-500 transition-colors flex items-center gap-1"
            >
              Features{" "}
              <ChevronDown className="h-4 w-4 opacity-70 transition-transform group-hover:rotate-180" />
            </Link>
            {/* Hand-drawn dropdown */}
            <div
              className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl ring-1 ring-blue-200 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50 border-2 border-blue-200"
              style={{
                borderRadius: "22px 28px 18px 32px",
              }}
            >
              <div className="p-2">
                <Link
                  href="/features/create-aba-notes"
                  className="block px-4 py-3 text-sm font-nunito text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                >
                  Create ABA Notes
                </Link>
                <Link
                  href="/features/review-aba-notes"
                  className="block px-4 py-3 text-sm font-nunito text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors rounded-lg"
                >
                  Review & Enhance Notes
                </Link>
                <Link
                  href="/features/track-aba-progress"
                  className="block px-4 py-3 text-sm font-nunito text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-lg"
                >
                  Track Client Progress
                </Link>
                <Link
                  href="/features/hipaa-compliant-aba"
                  className="block px-4 py-3 text-sm font-nunito text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors rounded-lg"
                >
                  HIPAA Compliance
                </Link>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <Link
                    href="/features"
                    className="block px-4 py-3 text-sm font-nunito font-semibold text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
                  >
                    View All Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/pricing"
            className="text-sm font-nunito font-medium text-gray-700 hover:text-green-500 transition-colors px-3 py-2"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="text-sm font-nunito font-medium text-gray-700 hover:text-orange-500 transition-colors px-3 py-2"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="text-sm font-nunito font-medium text-gray-700 hover:text-blue-500 transition-colors px-3 py-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-nunito font-medium text-gray-700 hover:text-yellow-600 transition-colors px-3 py-2"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="https://app.praxisnotes.com/auth/log-in"
          className="hidden md:inline-flex"
        >
          <Button
            className="bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 border-0"
            style={{
              borderRadius: "12px 14px 12px 16px",
            }}
            size="sm"
          >
            Sign In
          </Button>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t-2 border-blue-200 bg-white shadow-xl absolute left-0 right-0"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <nav className="flex flex-col container mx-auto max-w-7xl px-4 py-4">
            <div className="border-b border-gray-100">
              <Link
                href="/features"
                className="flex items-center justify-between px-2 py-3 text-sm font-nunito font-medium text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
                <ChevronDown className="h-4 w-4 opacity-70" />
              </Link>
              <div className="ml-4 mt-1 space-y-1 pb-3">
                <Link
                  href="/features/create-aba-notes"
                  className="block px-3 py-2 text-sm font-nunito text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create ABA Notes
                </Link>
                <Link
                  href="/features/review-aba-notes"
                  className="block px-3 py-2 text-sm font-nunito text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Review & Enhance Notes
                </Link>
                <Link
                  href="/features/track-aba-progress"
                  className="block px-3 py-2 text-sm font-nunito text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Track Client Progress
                </Link>
                <Link
                  href="/features/hipaa-compliant-aba"
                  className="block px-3 py-2 text-sm font-nunito text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition-colors rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HIPAA Compliance
                </Link>
              </div>
            </div>
            <Link
              href="/pricing"
              className="px-2 py-3 text-sm font-nunito font-medium text-gray-700 border-b border-gray-100 hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className="px-2 py-3 text-sm font-nunito font-medium text-gray-700 border-b border-gray-100 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="px-2 py-3 text-sm font-nunito font-medium text-gray-700 border-b border-gray-100 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-2 py-3 text-sm font-nunito font-medium text-gray-700 border-b border-gray-100 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4">
              <Link
                href="https://app.praxisnotes.com/auth/log-in"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-md border-0"
                  style={{
                    borderRadius: "12px 14px 12px 16px",
                  }}
                >
                  Sign In
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
