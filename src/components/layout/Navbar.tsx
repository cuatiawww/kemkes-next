"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Mega menu content untuk setiap item navigasi (Beranda tidak perlu mega menu)
const megaMenuContent = {
  PROFIL: {
    sections: [
      {
        title: "Tentang Kami",
        items: [
          { name: "Sejarah", href: "/profil/sejarah" },
          { name: "Struktur Organisasi", href: "/profil/struktur" },
          { name: "Tugas & Fungsi", href: "/profil/tugas-fungsi" },
        ],
      },
      {
        title: "Pimpinan",
        items: [
          { name: "Kepala Dinas", href: "/profil/kepala-dinas" },
          { name: "Sekretaris", href: "/profil/sekretaris" },
          { name: "Kepala Bidang", href: "/profil/kepala-bidang" },
        ],
      },
    ],
  },
  "INFORMASI PUBLIK": {
    sections: [
      {
        title: "Rilis Kementerian Kesehatan",
        items: [
          { name: "Rilis Terbaru", href: "/informasi-publik/rilis" },
          { name: "Berita Kesehatan", href: "/informasi-publik/berita" },
          { name: "Artikel Kesehatan", href: "/informasi-publik/artikel" },
        ],
      },
      {
        title: "Pengumuman",
        items: [
          { name: "Pengumuman Resmi", href: "/informasi-publik/pengumuman" },
          { name: "Buku Panduan", href: "/informasi-publik/panduan" },
          { name: "Agenda Kegiatan", href: "/informasi-publik/agenda" },
        ],
      },
    ],
  },
  LAYANAN: {
    sections: [
      {
        title: "Layanan Kesehatan",
        items: [
          { name: "SATUSEHAT", href: "/layanan/satusehat" },
          { name: "Penanggulangan Penyakit", href: "/layanan/penanggulangan-penyakit" },
          { name: "Pelayanan Kesehatan Rujukan", href: "/layanan/rujukan" },
          { name: "Sertifikasi Kesehatan", href: "/layanan/sertifikasi" },
        ],
      },
      {
        title: "Layanan Digital",
        items: [
          { name: "Farmasi dan Alat Kesehatan", href: "/layanan/farmasi" },
          { name: "Kebijakan Kesehatan", href: "/layanan/kebijakan" },
          { name: "Data Informasi Kesehatan", href: "/layanan/data-informasi" },
        ],
      },
    ],
  },
  MEDIA: {
    sections: [
      {
        title: "Media Publikasi",
        items: [
          { name: "Publikasi Terbaru", href: "/media/publikasi" },
          { name: "Infografis Kesehatan", href: "/media/infografis" },
          { name: "Video Edukasi", href: "/media/video" },
        ],
      },
      {
        title: "Foto Kegiatan",
        items: [
          { name: "Galeri Foto", href: "/media/foto" },
          { name: "Dokumentasi Kegiatan", href: "/media/dokumentasi" },
          { name: "Album Foto", href: "/media/album" },
        ],
      },
    ],
  },
  TAUTAN: {
    sections: [
      {
        title: "Link Terkait",
        items: [
          { name: "Website Pemerintah", href: "/tautan/pemerintah" },
          { name: "Instansi Terkait", href: "/tautan/instansi" },
          { name: "Partner Kami", href: "/tautan/partner" },
        ],
      },
      {
        title: "Social Media",
        items: [
          { name: "Instagram", href: "https://www.instagram.com/ayosehat.kemkes" },
          { name: "Twitter", href: "https://twitter.com/KemenkesRI" },
          { name: "TikTok", href: "https://www.tiktok.com/@kemenkesri" },
        ],
      },
    ],
  },
  "KONTAK KAMI": {
    sections: [
      {
        title: "Hubungi Kami",
        items: [
          { name: "Alamat Kantor", href: "/kontak/alamat" },
          { name: "Email & Telepon", href: "/kontak/email-telepon" },
          { name: "Jam Layanan", href: "/kontak/jam-layanan" },
        ],
      },
      {
        title: "Feedback",
        items: [
          { name: "Form Kontak", href: "/kontak/form" },
          { name: "Kritik & Saran", href: "/kontak/kritik-saran" },
          { name: "FAQ", href: "/kontak/faq" },
        ],
      },
    ],
  },
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
  { name: "MEDIA", img: "/MENU/media.svg", href: "/media" },
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
                onMouseEnter={() => item.name !== "BERANDA" && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.name !== "BERANDA") {
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
                  {item.name !== "BERANDA" && (
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

                {/* Desktop Mega Menu */}
                {hoveredItem === item.name && item.name !== "BERANDA" && megaMenuContent[item.name as keyof typeof megaMenuContent] && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
                        {megaMenuContent[
                          item.name as keyof typeof megaMenuContent
                        ]?.sections.map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 border-b-2 border-primary pb-2">
                              {section.title}
                            </h3>
                            <ul className="space-y-2">
                              {section.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <a
                                    href={subItem.href}
                                    className="flex items-center gap-2 text-gray-600 hover:text-primary hover:translate-x-2 transition-all duration-300 group"
                                  >
                                    <svg
                                      className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                    <span className="text-sm font-medium">
                                      {subItem.name}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* Decorative Element */}
                      <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-8 py-4">
                        <p className="text-sm text-gray-600 text-center">
                          Klik item untuk informasi lebih lanjut
                        </p>
                      </div>
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
                {item.name === "BERANDA" ? (
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

                    {/* Mobile Mega Menu */}
                    {megaMenuOpen === item.name && megaMenuContent[item.name as keyof typeof megaMenuContent] && (
                      <div className="pl-4 space-y-4 animate-fadeIn">
                        {megaMenuContent[
                          item.name as keyof typeof megaMenuContent
                        ]?.sections.map((section, idx) => (
                          <div key={idx} className="space-y-2">
                            <h3 className="text-sm font-bold text-gray-900 px-4 py-2 bg-gray-50 rounded">
                              {section.title}
                            </h3>
                            <ul className="space-y-1">
                              {section.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <a
                                    href={subItem.href}
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded transition-colors"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMegaMenuOpen(null);
                                    }}
                                  >
                                    <svg
                                      className="w-3 h-3 text-primary"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                    {subItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
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