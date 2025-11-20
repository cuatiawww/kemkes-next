"use client";

import { useState } from "react";
import Image from "next/image";


const navItems = [
  { name: "BERANDA", img: "/MENU/beranda.svg", href: "/" },
  { name: "PROFIL", img: "/MENU/profil.svg", href: "/profil" },
  { name: "INFORMASI PUBLIK", img: "/MENU/informasi publik.svg", href: "/informasi-publik" },
  { name: "LAYANAN", img: "/MENU/layanan.svg", href: "/layanan" },
  { name: "MEDIA", img: "/MENU/media.svg", href: "/media" },
  { name: "TAUTAN", img: "/MENU/tautan.svg", href: "/tautan" },
  { name: "KONTAK KAMI", img: "/MENU/kontak.svg", href: "/kontak" },
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
            const Icon = item.img;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.name);
                  }}
                  className={`
                    relative flex items-center gap-2 px-6 py-4 text-lg font-semibold
transition-all duration-300
                    ${
                      activeItem === item.name
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }
                  `}
                >
                  <Image
  src={item.img}
  alt={item.name}
  width={20}
  height={20}
  className="object-contain"
/>

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
        <div className="lg:hidden flex items-center justify-end py-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => {
              const Icon = item.img;
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
                    flex items-center gap-3 px-4 py-3 text-lg font-semibold
transition-colors
                    ${
                      activeItem === item.name
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }
                  `}
                >
                  <Image
  src={item.img}
  alt={item.name}
  width={28}
  height={28}
  className="object-contain"
/>

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
