"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const layananData = [
  {
    id: 1,
    icon: "./layanan/1.svg",
    title: "SATUSEHAT",
    description: "Sistem data kesehatan terpadu untuk integrasi informasi kesehatan nasional",
    category: "Digital",
    keywords: ["data", "kesehatan", "sistem", "digital", "integrasi"]
  },
  {
    id: 2,
    icon: "./layanan/2.svg",
    title: "PENANGGULANGAN PENYAKIT",
    description: "Layanan kesehatan preventif dan penanggulangan penyakit menular",
    category: "Kesehatan",
    keywords: ["pencegahan", "penyakit", "preventif", "vaksin"]
  },
  {
    id: 3,
    icon: "./layanan/3.svg",
    title: "FARMASI DAN ALAT KESEHATAN",
    description: "Pengelolaan farmasi nasional dan distribusi alat kesehatan",
    category: "Farmasi",
    keywords: ["obat", "farmasi", "alkes", "apotek"]
  },
  {
    id: 4,
    icon: "./layanan/4.svg",
    title: "KEBIJAKAN KESEHATAN",
    description: "Program kesehatan keluarga dan kebijakan kesehatan masyarakat",
    category: "Kebijakan",
    keywords: ["kebijakan", "program", "keluarga", "masyarakat"]
  },
  {
    id: 5,
    icon: "./layanan/5.svg",
    title: "PELAYANAN KESEHATAN RUJUKAN",
    description: "Layanan rujukan kesehatan untuk fasilitas kesehatan tingkat lanjut",
    category: "Kesehatan",
    keywords: ["rujukan", "rumah sakit", "pelayanan", "kesehatan"]
  },
  {
    id: 6,
    icon: "./layanan/6.svg",
    title: "SERTIFIKASI KESEHATAN",
    description: "Penerbitan sertifikat dan izin praktik tenaga kesehatan",
    category: "Administrasi",
    keywords: ["sertifikat", "izin", "tenaga", "kesehatan"]
  },
  {
    id: 7,
    icon: "./layanan/7.svg",
    title: "DATA INFORMASI KESEHATAN",
    description: "Portal data dan informasi kesehatan nasional",
    category: "Digital",
    keywords: ["data", "informasi", "statistik", "kesehatan"]
  },
];

export default function LayananSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof layananData>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const itemsPerView = 5;

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < layananData.length - itemsPerView;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filtered = layananData.filter(
        (layanan) =>
          layanan.title.toLowerCase().includes(query.toLowerCase()) ||
          layanan.description.toLowerCase().includes(query.toLowerCase()) ||
          layanan.category.toLowerCase().includes(query.toLowerCase()) ||
          layanan.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(filtered);
      setShowSuggestions(true);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (layanan: typeof layananData[0]) => {
    setSearchQuery(layanan.title);
    setSearchResults([layanan]);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              LAYANAN KEMENTERIAN KESEHATAN
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Akses berbagai layanan resmi Kementerian Kesehatan RI untuk
              mendukung kebutuhan informasi dan pelayanan kesehatan masyarakat.
            </p>

            {/* Search Section */}
            <div className="mt-8 max-w-2xl mx-auto" ref={searchRef}>
              <div className="relative">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari layanan kesehatan..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery && setShowSuggestions(true)}
                    className="w-full pl-14 pr-24 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={handleClearSearch}
                      className="absolute right-28 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    onClick={() => searchQuery && setShowSuggestions(false)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-8 py-2 rounded-full hover:bg-primary/90 transition-all"
                  >
                    Cari
                  </button>
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && searchResults.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
                    <div className="p-2">
                      <p className="text-xs text-gray-500 px-4 py-2 font-semibold">
                        {searchResults.length} hasil ditemukan
                      </p>
                      {searchResults.slice(0, 5).map((layanan) => {
                        return (
                          <button
                            key={layanan.id}
                            onClick={() => handleSelectSuggestion(layanan)}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-3"
                          >
                            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                              <img
                                src={layanan.icon}
                                alt={layanan.title}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-800 truncate">
                                {layanan.title}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {layanan.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* No Results */}
                {showSuggestions && searchQuery && searchResults.length === 0 && (
                  <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl p-6 z-50">
                    <p className="text-gray-500 text-center">
                      Tidak ada layanan yang ditemukan untuk &quot;{searchQuery}&quot;
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search Results Section */}
          {searchResults.length > 0 && !showSuggestions && (
            <div className="mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Hasil Pencarian ({searchResults.length})
                  </h3>
                  <button
                    onClick={handleClearSearch}
                    className="text-white/80 hover:text-white text-sm flex items-center gap-2"
                  >
                    <XMarkIcon className="w-4 h-4" />
                    Tutup
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {searchResults.map((layanan) => {
                    return (
                      <div
                        key={layanan.id}
                        className="bg-white rounded-[30px] cursor-pointer flex items-center justify-center mx-auto"
                        style={{ width: '246px', height: '263px', paddingTop: '57px', paddingRight: '43px', paddingBottom: '57px', paddingLeft: '43px' }}
                      >
                        <div className="flex flex-col items-center text-center" style={{ gap: '29px' }}>
                          <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <img
                              src={layanan.icon}
                              alt={layanan.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="text-sm font-semibold uppercase leading-tight line-clamp-2 w-full" style={{ color: '#666666' }}>
                            {layanan.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          <div className="relative">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg transition-all",
                canScrollLeft
                  ? "hover:scale-110 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronLeftIcon className="w-6 h-6 text-secondary" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {layananData.map((layanan) => {
                  return (
                    <div
                      key={layanan.id}
                      className="flex-shrink-0 w-1/5 min-w-[246px]"
                    >
                      <div className="bg-white rounded-[30px] cursor-pointer flex items-center justify-center" style={{ width: '246px', height: '263px', paddingTop: '57px', paddingRight: '43px', paddingBottom: '57px', paddingLeft: '43px' }}>
                        <div className="flex flex-col items-center text-center" style={{ gap: '29px' }}>
                          <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <img
                              src={layanan.icon}
                              alt={layanan.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h3 className="text-sm font-semibold uppercase leading-tight line-clamp-2 w-full" style={{ color: '#666666' }}>
                            {layanan.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg transition-all",
                canScrollRight
                  ? "hover:scale-110 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronRightIcon className="w-6 h-6 text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
