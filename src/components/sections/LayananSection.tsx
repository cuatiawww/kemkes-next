"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const layananData = [
  {
    id: 1,
    icon: DocumentTextIcon,
    title: "SATUSEHAT",
    description: "Sistem data kesehatan terpadu untuk integrasi informasi kesehatan nasional",
    category: "Digital",
    keywords: ["data", "kesehatan", "sistem", "digital", "integrasi"]
  },
  {
    id: 2,
    icon: ShieldCheckIcon,
    title: "PENANGGULANGAN PENYAKIT",
    description: "Layanan kesehatan preventif dan penanggulangan penyakit menular",
    category: "Kesehatan",
    keywords: ["pencegahan", "penyakit", "preventif", "vaksin"]
  },
  {
    id: 3,
    icon: BeakerIcon,
    title: "FARMASI DAN ALAT KESEHATAN",
    description: "Pengelolaan farmasi nasional dan distribusi alat kesehatan",
    category: "Farmasi",
    keywords: ["obat", "farmasi", "alkes", "apotek"]
  },
  {
    id: 4,
    icon: HeartIcon,
    title: "KEBIJAKAN KESEHATAN",
    description: "Program kesehatan keluarga dan kebijakan kesehatan masyarakat",
    category: "Kebijakan",
    keywords: ["kebijakan", "program", "keluarga", "masyarakat"]
  },
  {
    id: 5,
    icon: UserGroupIcon,
    title: "PANTAUAN KEJADIAN KRISIS KESEHATAN",
    description: "Monitoring dan dukungan program kesehatan darurat",
    category: "Kesehatan",
    keywords: ["krisis", "darurat", "monitoring", "pantauan"]
  },
  {
    id: 6,
    icon: BuildingOffice2Icon,
    title: "PELAYANAN KESEHATAN RUJUKAN",
    description: "Sistem rujukan dan pelayanan kesehatan tingkat lanjut",
    category: "Pelayanan",
    keywords: ["rujukan", "rumah sakit", "pelayanan", "kesehatan"]
  },
  {
    id: 7,
    icon: ClipboardDocumentCheckIcon,
    title: "SERTIFIKASI KESEHATAN",
    description: "Layanan sertifikasi dan perizinan kesehatan",
    category: "Administrasi",
    keywords: ["sertifikat", "izin", "perizinan", "legalisir"]
  },
  {
    id: 8,
    icon: ChartBarIcon,
    title: "DATA DAN INFORMASI KESEHATAN",
    description: "Pusat data dan informasi kesehatan nasional",
    category: "Digital",
    keywords: ["data", "informasi", "statistik", "laporan"]
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              LAYANAN KEMENTERIAN KESEHATAN
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Akses berbagai layanan resmi Kementerian Kesehatan RI untuk
              mendukung kebutuhan informasi dan pelayanan kesehatan masyarakat
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
                        const Icon = layanan.icon;
                        return (
                          <button
                            key={layanan.id}
                            onClick={() => handleSelectSuggestion(layanan)}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-3"
                          >
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-800 truncate">
                                {layanan.title}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {layanan.description}
                              </p>
                            </div>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {layanan.category}
                            </span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {searchResults.map((layanan) => {
                    const Icon = layanan.icon;
                    return (
                      <div
                        key={layanan.id}
                        className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2 uppercase">
                            {layanan.title}
                          </h4>
                          <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                            {layanan.description}
                          </p>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {layanan.category}
                          </span>
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
              <ChevronLeftIcon className="w-6 h-6 text-primary" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {layananData.map((layanan) => {
                  const Icon = layanan.icon;
                  return (
                    <div
                      key={layanan.id}
                      className="flex-shrink-0 w-1/5 min-w-[200px]"
                    >
                      <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <h3 className="text-sm font-bold text-gray-800 mb-2 uppercase">
                            {layanan.title}
                          </h3>
                          {/* <p className="text-xs text-gray-600">
                            {layanan.description}
                          </p> */}
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
              <ChevronRightIcon className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
