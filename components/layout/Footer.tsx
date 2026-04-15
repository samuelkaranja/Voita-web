"use client";

import { Globe, MessageSquare, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#022f26] text-white px-6 md:px-12 py-14">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Column */}
          <div>
            <h2 className="text-xl font-semibold text-green-300">Voita</h2>

            <p className="mt-6 text-sm text-gray-300 leading-relaxed max-w-xs">
              ELEVATING THE DRIVING EXPERIENCE THROUGH INTELLIGENCE AND TRUST.
            </p>

            {/* Icons */}
            <div className="flex items-center gap-5 mt-6 text-green-300">
              <Globe className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
              <MessageSquare className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
              <Share2 className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-400">
              PLATFORM
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer transition">
                Services
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Pricing
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-400">
              COMPANY
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-400">
              LEGAL
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer transition">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-xs text-gray-400">
            © 2026 VOITA DRIVING PLATFORM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
