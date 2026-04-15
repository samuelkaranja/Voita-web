"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-[#f0f4f0]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#0d2b1f] text-2xl font-extrabold tracking-tight select-none"
        >
          Voita
        </Link>

        {/* Nav Links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#1a1a1a]">
          <li>
            <Link
              href="/"
              className="relative pb-1 text-[#0d6e4a] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#0d6e4a] after:rounded-full transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-[#0d6e4a] transition-colors">
              Pricing
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="bg-[#0d2b1f] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0d6e4a] transition-colors duration-200 whitespace-nowrap"
          >
            Download App
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-[#0d2b1f] rounded" />
            <span className="block w-5 h-0.5 bg-[#0d2b1f] rounded" />
            <span className="block w-3.5 h-0.5 bg-[#0d2b1f] rounded" />
          </button>
        </div>
      </nav>
    </header>
  );
}
