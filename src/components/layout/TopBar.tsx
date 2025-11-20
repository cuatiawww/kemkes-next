/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon, UserCircleIcon, ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const languages = [
  { code: "ID", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "EN", name: "English", flag: "🇬🇧" },
  { code: "AR", name: "العربية", flag: "🇸🇦" },
  { code: "ZH", name: "中文", flag: "🇨🇳" },
];

export default function TopBar() {
  const [selectedLang, setSelectedLang] = useState("ID");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
    setLangDropdownOpen(false);
    // Here you can add logic to actually change the language
    console.log(`Language changed to: ${langCode}`);
  };

  const currentLanguage = languages.find((lang) => lang.code === selectedLang);

  return (
    <div className="bg-cover bg-center text-white" style={{ backgroundImage: 'url(/bg_kemkes.webp)' }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo & Tagline */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/kemkes.png"
                alt="Logo Kementerian Kesehatan RI"
                className="h-20 w-auto transform transition-transform group-hover:scale-110"
              />
            </a>
          </div>

          {/* Right Side - Search, Language, Profile */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden md:block">
                <h1 className="text-lg font-medium italic">Generasi Sehat, Masa Depan Hebat</h1>
              </div>
            <div className="hidden md:flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-64">
              <input
                type="search"
                placeholder="Pencarian..."
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder-white/70"
              />
              <button className="ml-2" aria-label="Search">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all"
                aria-label="Select language"
              >
                <GlobeAltIcon className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">
                  {currentLanguage?.flag} {selectedLang}
                </span>
                <span className="text-sm font-medium sm:hidden">{currentLanguage?.flag}</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-[100] min-w-[220px] border border-gray-100">
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                          selectedLang === lang.code
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-2xl flex-shrink-0">{lang.flag}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold truncate">{lang.name}</p>
                          <p className="text-xs text-gray-500 uppercase">{lang.code}</p>
                        </div>
                        {selectedLang === lang.code && (
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Button
            <button className="bg-yellow-400 text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all transform hover:scale-110" aria-label="Profile">
              <UserCircleIcon className="w-6 h-6" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
