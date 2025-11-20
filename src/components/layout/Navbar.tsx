"use client";

import { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ServerIcon,
  NewspaperIcon,
  LinkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "BERANDA", icon: HomeIcon, href: "/" },
  { name: "PROFIL", icon: UserGroupIcon, href: "/profil" },
  { name: "INFORMASI PUBLIK", icon: DocumentTextIcon, href: "/informasi-publik" },
  { name: "LAYANAN", icon: ServerIcon, href: "/layanan" },
  { name: "MEDIA", icon: NewspaperIcon, href: "/media" },
  { name: "TAUTAN", icon: LinkIcon, href: "/tautan" },
  { name: "KONTAK KAMI", icon: PhoneIcon, href: "/kontak" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("BERANDA");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center justify-center border-t border-gray-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.name);
                  }}
                  className={`
                    relative flex items-center gap-2 px-6 py-4 text-xs font-semibold transition-all duration-300
                    ${
                      activeItem === item.name
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {activeItem === item.name && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
                    ${
                      activeItem === item.name
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
