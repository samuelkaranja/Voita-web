"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-[#f7faf8]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#0d2b1f] text-3xl font-extrabold tracking-tight"
        >
          Voita
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#1a1a1a]">
          <li>
            <Link
              href="/road-intelligence"
              className="relative pb-1 text-[15px] hover:text-[#0d6e4a] hover:underline"
            >
              Road Intelligence
            </Link>
          </li>
          <li>
            <Link
              href="/vetted-experts"
              className="text-[15px] hover:text-[#0d6e4a] transition-colors hover:underline"
            >
              Vetted Experts
            </Link>
          </li>
          <li>
            <Link
              href="/insurance"
              className="text-[15px] hover:text-[#0d6e4a] transition-colors hover:underline"
            >
              Insurance
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <Link
            href="/#download"
            className="hidden md:inline-block bg-[#0d2b1f] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0d6e4a] transition-colors"
          >
            Download App
          </Link>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#0d2b1f] rounded transition ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0d2b1f] rounded transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0d2b1f] rounded transition ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-white/90 backdrop-blur-md space-y-4">
          <Link
            href="/road-intelligence"
            className="block text-[#0d2b1f] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Road Intelligence
          </Link>

          <Link
            href="/vetted-experts"
            className="block text-[#0d2b1f] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Vetted Experts
          </Link>

          <Link
            href="/insurance"
            className="block text-[#0d2b1f] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Insurance
          </Link>

          <Link
            href="#download"
            className="block text-center bg-[#0d2b1f] text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Download App
          </Link>
        </div>
      </div>
    </header>
  );
}
