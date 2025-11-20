/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  const [selectedLang, setSelectedLang] = useState("ID");

  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo & Tagline */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-white p-2 rounded-lg transform transition-transform group-hover:scale-110">
                <img
                  src="https://kemkes.go.id/image/images/logo_kemkes_jadi.png"
                  alt="Logo Kementerian Kesehatan RI"
                  className="h-10 w-auto"
                />
              </div>
              <div className="hidden md:block">
                <h2 className="text-sm font-medium">Generasi Sehat, Masa Depan Hebat</h2>
              </div>
            </a>
          </div>

          {/* Right Side - Search, Language, Profile */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-64">
              <input
                type="search"
                placeholder="Pencarian..."
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder-white/70"
              />
              <button className="ml-2">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all">
                <span className="text-sm font-medium">{selectedLang}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Button */}
            <button className="bg-yellow-400 text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all transform hover:scale-110">
              <UserCircleIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
