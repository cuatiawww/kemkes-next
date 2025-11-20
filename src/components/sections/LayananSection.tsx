"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import Image from "next/image";

const layananData = [
  {
    id: 1,
    icon: "/LAYANAN/1.svg",
    title: "SATUSEHAT",
    description: "Sistem data kesehatan terpadu untuk integrasi informasi kesehatan nasional",
    category: "Digital",
    keywords: ["data", "kesehatan", "sistem", "digital", "integrasi"]
  },
  {
    id: 2,
    icon: "/LAYANAN/2.svg",
    title: "PENANGGULANGAN PENYAKIT",
    description: "Layanan kesehatan preventif dan penanggulangan penyakit menular",
    category: "Kesehatan",
    keywords: ["pencegahan", "penyakit", "preventif", "vaksin"]
  },
  {
    id: 3,
    icon: "/LAYANAN/3.svg",
    title: "FARMASI DAN ALAT KESEHATAN",
    description: "Pengelolaan farmasi nasional dan distribusi alat kesehatan",
    category: "Farmasi",
    keywords: ["obat", "farmasi", "alkes", "apotek"]
  },
  {
    id: 4,
    icon: "/LAYANAN/4.svg",
    title: "KEBIJAKAN KESEHATAN",
    description: "Program kesehatan keluarga dan kebijakan kesehatan masyarakat",
    category: "Kebijakan",
    keywords: ["kebijakan", "program", "keluarga", "masyarakat"]
  },
  {
    id: 5,
    icon: "/LAYANAN/5.svg",
    title: "PELAYANAN KESEHATAN RUJUKAN",
    description: "Layanan rujukan kesehatan untuk fasilitas kesehatan tingkat lanjut",
    category: "Kesehatan",
    keywords: ["rujukan", "rumah sakit", "pelayanan", "kesehatan"]
  },
  {
    id: 6,
    icon: "/LAYANAN/6.svg",
    title: "SERTIFIKASI KESEHATAN",
    description: "Penerbitan sertifikat dan izin praktik tenaga kesehatan",
    category: "Administrasi",
    keywords: ["sertifikat", "izin", "tenaga", "kesehatan"]
  },
  {
    id: 7,
    icon: "/LAYANAN/7.svg",
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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerView = isMobile ? 1 : 5;

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeftPos(currentIndex);
  }, [currentIndex]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const diff = startX - x;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && canScrollRight) {
        setCurrentIndex(prev => prev + 1);
        setIsDragging(false);
      } else if (diff < 0 && canScrollLeft) {
        setCurrentIndex(prev => prev - 1);
        setIsDragging(false);
      }
    }
  }, [isDragging, startX, canScrollLeft, canScrollRight]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX);
    setScrollLeftPos(currentIndex);
  }, [currentIndex]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const x = e.touches[0].pageX;
    const diff = startX - x;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && canScrollRight) {
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && canScrollLeft) {
        setCurrentIndex(prev => prev - 1);
      }
    }
  }, [startX, canScrollLeft, canScrollRight]);

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
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
              LAYANAN KEMENTERIAN KESEHATAN
            </h2>
            <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-2">
              Akses berbagai layanan resmi Kementerian Kesehatan RI untuk
              mendukung kebutuhan informasi dan pelayanan kesehatan masyarakat.
            </p>

            {/* Search Section */}
            <div className="mt-4 md:mt-6 max-w-2xl mx-auto px-2 md:px-0" ref={searchRef}>
              <div className="relative">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari layanan kesehatan..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery && setShowSuggestions(true)}
                    className="w-full pl-10 md:pl-12 pr-20 md:pr-28 py-3 md:py-3.5 rounded-full text-sm md:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={handleClearSearch}
                      className="absolute right-16 md:right-24 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <XMarkIcon className="w-4 md:w-5 h-4 md:h-5" />
                    </button>
                  )}
                  <button
                    onClick={() => searchQuery && setShowSuggestions(false)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full hover:bg-primary/90 transition-all text-xs md:text-sm font-medium"
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
                            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 relative">
                              <Image
                                src={layanan.icon}
                                alt={layanan.title}
                                fill
                                sizes="40px"
                                className="object-contain"
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

          <div className="relative px-2 md:px-0">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={cn(
                "absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-xl transition-all",
                canScrollLeft
                  ? "hover:scale-110 hover:shadow-2xl cursor-pointer opacity-100"
                  : "opacity-0 pointer-events-none"
              )}
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
            </button>

            <div
              ref={sliderRef}
              className="overflow-hidden cursor-grab active:cursor-grabbing mx-8 md:mx-0"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  gap: isMobile ? '16px' : '29px'
                }}
              >
                {layananData.map((layanan) => {
                  return (
                    <div
                      key={layanan.id}
                      className={cn(
                        "flex-shrink-0",
                        isMobile ? "w-full" : "w-1/5 min-w-[246px]"
                      )}
                    >
                      <div
                        className="bg-white cursor-pointer flex flex-col items-center justify-center mx-auto"
                        style={{
                          width: isMobile ? '220px' : '246px',
                          height: isMobile ? '240px' : '263px',
                          borderRadius: '30px',
                          paddingTop: isMobile ? '45px' : '57px',
                          paddingRight: isMobile ? '30px' : '43px',
                          paddingBottom: isMobile ? '45px' : '57px',
                          paddingLeft: isMobile ? '30px' : '43px'
                        }}
                      >
                        <div className="flex flex-col items-center text-center" style={{ gap: isMobile ? '20px' : '29px' }}>
                          <div className={cn(
                            "flex items-center justify-center flex-shrink-0",
                            isMobile ? "w-12 h-12" : "w-16 h-16"
                          )}>
                            <img
                              src={layanan.icon}
                              alt={layanan.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h3 className={cn(
                            "font-semibold uppercase leading-tight line-clamp-2 w-full",
                            isMobile ? "text-xs" : "text-sm"
                          )} style={{ color: '#666666' }}>
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
                "absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-xl transition-all",
                canScrollRight
                  ? "hover:scale-110 hover:shadow-2xl cursor-pointer opacity-100"
                  : "opacity-0 pointer-events-none"
              )}
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
            {Array.from({ length: layananData.length - itemsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  currentIndex === index
                    ? isMobile ? "w-6 h-1.5 bg-white" : "w-8 h-2 bg-white"
                    : isMobile ? "w-1.5 h-1.5 bg-white/40" : "w-2 h-2 bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
