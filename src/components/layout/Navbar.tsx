"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Mega menu content untuk setiap item navigasi (single column style)
const megaMenuContent = {
  PROFIL: [
    { name: "VISI DAN MISI", href: "/profil/visi-misi" },
    { name: "STRUKTUR ORGANISASI", href: "/profil/struktur" },
    { name: "TUGAS, FUNGSI DAN KEDUDUKAN", href: "/profil/tugas-fungsi" },
    { name: "UNIT KERJA DAN PEJABAT", href: "/profil/unit-kerja" },
    { name: "FILOSOFI LOGO KEMENTERIAN KESEHATAN", href: "/profil/filosofi-logo" },
  ],
  "INFORMASI PUBLIK": [
    { name: "INFORMASI BERKALA", href: "/informasi-publik/berkala" },
    { name: "INFORMASI SETIAP SAAT", href: "/informasi-publik/setiap-saat" },
    { name: "INFORMASI SERTA MERTA", href: "/informasi-publik/serta-merta" },
  ],
  LAYANAN: [
    { name: "UNIT PELAYANAN KESEHATAN (UPK)", href: "/layanan/upk" },
    { name: "UNIT LAYANAN TERPADU (ULT)", href: "/layanan/ult" },
  ],

  TAUTAN: [
    { name: "SEKRETARIAT JENDERAL", href: "/tautan/sekretariat" },
    { name: "DITJEN KESEHATAN PRIMER DAN KOMUNITAS", href: "/tautan/kesehatan-primer" },
    { name: "DITJEN PENANGGULANGAN PENYAKIT", href: "/tautan/penanggulangan-penyakit" },
    { name: "DITJEN KESEHATAN LANJUTAN", href: "/tautan/kesehatan-lanjutan" },
    { name: "DITJEN FARMASI DAN ALKES", href: "/tautan/farmasi" },
    { name: "DITJEN SDM KESEHATAN", href: "/tautan/sdm" },
    { name: "INSPEKTORAT JENDERAL", href: "/tautan/inspektorat" },
    { name: "BADAN KEBIJAKAN PEMBANGUNAN KESEHATAN", href: "/tautan/badan-kebijakan" },
  ],
  "KONTAK KAMI": [
    { name: "ALAMAT", href: "/kontak/alamat" },
    { name: "EMAIL", href: "/kontak/email" },
    { name: "TELEPON", href: "/kontak/telepon" },
  ],
};

const navItems = [
  { name: "BERANDA", img: "/MENU/beranda.svg", href: "/" },
  { name: "PROFIL", img: "/MENU/profil.svg", href: "/profil" },
  {
    name: "INFORMASI PUBLIK",
    img: "/MENU/informasi publik.svg",
    href: "/informasi-publik",
  },
  { name: "LAYANAN", img: "/MENU/layanan.svg", href: "/layanan" },
  { name: "MEDIA", img: "/MENU/media.svg", href: "/mediadownload" },
  { name: "TAUTAN", img: "/MENU/tautan.svg", href: "/tautan" },
  { name: "KONTAK KAMI", img: "/MENU/kontak.svg", href: "/kontak" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("BERANDA");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Handle mouse enter with delay
  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(itemName);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300);
  };

  // Handle click for mobile
  const handleClick = (itemName: string) => {
    if (megaMenuOpen === itemName) {
      setMegaMenuOpen(null);
    } else {
      setMegaMenuOpen(itemName);
      setActiveItem(itemName);
    }
  };

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-20">

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.name !== "BERANDA" && item.name !== "MEDIA" && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.name !== "BERANDA" && item.name !== "MEDIA") {
                      e.preventDefault();
                    }
                    setActiveItem(item.name);
                  }}
                  className={`
                    relative flex items-center gap-2 px-4 py-6 text-sm font-semibold transition-all duration-300
                    ${
                      activeItem === item.name || hoveredItem === item.name
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
                    className="w-5 h-5"
                  />
                  {item.name}
                  {item.name !== "BERANDA" && item.name !== "MEDIA" && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        hoveredItem === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  {activeItem === item.name && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
                  )}
                </a>

                {/* Desktop Mega Menu - Single Column Style */}
                {hoveredItem === item.name && item.name !== "BERANDA" && item.name !== "MEDIA" && megaMenuContent[item.name as keyof typeof megaMenuContent] && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-0"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-teal-500 rounded-lg shadow-2xl overflow-hidden animate-fadeIn min-w-[400px]">
                      <ul className="py-2">
                        {megaMenuContent[item.name as keyof typeof megaMenuContent]?.map((subItem, idx) => (
                          <li key={idx}>
                            <a
                              href={subItem.href}
                              className="block px-6 py-3 text-white font-semibold hover:bg-teal-600 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          ref={megaMenuRef}
          className="lg:hidden bg-white border-t border-gray-200 animate-slideDown"
        >
          <ul className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <li key={item.name} className="space-y-2">
                {item.name === "BERANDA" || item.name === "MEDIA" ? (
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 text-base font-semibold transition-colors rounded-lg
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
                      className="w-5 h-5"
                    />
                    {item.name}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => handleClick(item.name)}
                      className={`
                        w-full flex items-center justify-between gap-3 px-4 py-3 text-base font-semibold transition-colors rounded-lg
                        ${
                          activeItem === item.name
                            ? "text-primary bg-primary/5"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        {item.name}
                      </div>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          megaMenuOpen === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Mega Menu - Single Column */}
                    {megaMenuOpen === item.name && megaMenuContent[item.name as keyof typeof megaMenuContent] && (
                      <div className="bg-teal-500 rounded-lg overflow-hidden animate-fadeIn">
                        <ul className="py-2">
                          {megaMenuContent[item.name as keyof typeof megaMenuContent]?.map((subItem, idx) => (
                            <li key={idx}>
                              <a
                                href={subItem.href}
                                className="block px-6 py-3 text-white font-semibold hover:bg-teal-600 transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMegaMenuOpen(null);
                                }}
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}