"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import { SmallBanner } from "@/components/common/Banner";
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/common/Button/button";
import Image from "next/image";
import Link from "next/link";

const mediaData = [
  {
    id: 1,
    title: "Media Cetak Pedoman Kader Posyandu Peduli Kesehatan Reproduksi Remaja",
    category: "Media Cetak",
    type: "Media Publikasi",
    infographic: false,
    image: "/media-3.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 2,
    title: "Media Cetak LU Faktor Kausal TBC",
    category: "Media Cetak",
    type: "Media Publikasi",
    infographic: false,
    image: "/media-3.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 3,
    title: "Media Cetak Informasi Perpanjang Sertifikat KB",
    category: "Media Cetak",
    type: "Media Publikasi",
    infographic: false,
    image: "/media-3.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 4,
    title: "Media Cetak Buku Panduan Ibu Hamil (Bahasa Indonesia dan English)",
    category: "Media Cetak",
    type: "Media Publikasi",
    infographic: false,
    image: "/media-4.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 5,
    title: "Media Cetak Brosur Berpikir Positif Mengurangi Stres",
    category: "Media Cetak",
    type: "Media Publikasi",
    infographic: false,
    image: "/media-5.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 6,
    title: "Media Cetak Buku Senjang Panduan",
    category: "Media Cetak",
    type: "Media Publikasi",
    infographic: false,
    image: "/media-6.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 7,
    title: "Infografis 1st 1st Lamanya Anak Asi Asi",
    category: "Infografis",
    type: "Media Publikasi",
    infographic: true,
    image: "/media-7.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 8,
    title: "Infografis Vaksinasi Lansia 2021",
    category: "Infografis",
    type: "Media Publikasi",
    infographic: true,
    image: "/media-8.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 9,
    title: "Infografis Langkah untuk Penatalaksanaan Covid-Ringan",
    category: "Infografis",
    type: "Media Publikasi",
    infographic: true,
    image: "/media-9.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
  {
    id: 10,
    title: "Infografis PKPRS Pandai Kerusi Covid",
    category: "Infografis",
    type: "Media Publikasi",
    infographic: true,
    image: "/media-10.png",
    date: "24 Jan 2023",
    downloads: "1413 Downloads"
  },
];

export default function MediaDownloadPage() {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedInfograhic, setSelectedInfograhic] = useState<boolean | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"terbaru" | "terlama">("terbaru");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleReset = () => {
    setSelectedCategory([]);
    setSelectedType([]);
    setSelectedInfograhic(null);
    setSearchQuery("");
    setSortOrder("terbaru");
  };

  // Filter media
  let filteredMedia = mediaData.filter((media) => {
    const categoryMatch =
      selectedCategory.length === 0 || selectedCategory.includes(media.category);
    const typeMatch =
      selectedType.length === 0 || selectedType.includes(media.type);
    const infographicMatch =
      selectedInfograhic === null || media.infographic === selectedInfograhic;
    const searchMatch =
      searchQuery === "" ||
      media.title.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && typeMatch && infographicMatch && searchMatch;
  });

  // Sort media berdasarkan tanggal
  filteredMedia = [...filteredMedia].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (sortOrder === "terbaru") {
      return dateB - dateA; // Terbaru dulu
    } else {
      return dateA - dateB; // Terlama dulu
    }
  });

  return (
    <>
      <main role="main" itemScope itemType="https://schema.org/WebPage">
        <TopBar />
        <Navbar />
        <MarqueeBar />

        <SmallBanner
          image="/hero.webp"
          title="MEDIA DOWNLOAD"
          description="Unduh berbagai materi edukasi, infografis, dan publikasi kesehatan dari Kementerian Kesehatan RI untuk mendukung program kesehatan masyarakat."
          height="350px"
        />

        <PageLayout sidebar={
          <RightSidebar
            showAnnouncements={true}
            showCalendar={true}
            showSocialMedia={true}
            showRilis={false}
          />
        }>
          <div>
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    MEDIA DOWNLOAD
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Unduh berbagai materi edukasi, infografis, dan publikasi kesehatan dari
                    Kementerian Kesehatan RI untuk mendukung program kesehatan masyarakat.
                    Semua materi dapat diunduh secara gratis untuk keperluan edukasi dan
                    sosialisasi kesehatan.
                  </p>
                </div>

                {/* Filters Section */}
                <Card className="border border-gray-200 bg-white rounded-xl mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-800">Pencarian Media Download</h3>
                      <button
                        onClick={handleReset}
                        className="text-sm text-primary hover:underline"
                      >
                        Reset
                      </button>
                    </div>

                    {/* Search */}
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Cari media..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    {/* Filter Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Media Cetak */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Media Cetak</h4>
                        <div className="space-y-2">
                          {["Booklet", "Leaflet", "Buku Saku", "Guideline"].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedCategory.includes(item)}
                                onChange={() => handleCategoryChange(item)}
                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                              />
                              <span className="text-sm text-gray-700">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Media Publikasi */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Media Publikasi</h4>
                        <div className="space-y-2">
                          {["Pedoman", "Perka Permenkes", "Buku", "Manual"].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedType.includes(item)}
                                onChange={() => handleTypeChange(item)}
                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                              />
                              <span className="text-sm text-gray-700">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Infografis */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Infografis</h4>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedInfograhic === true}
                              onChange={() =>
                                setSelectedInfograhic(
                                  selectedInfograhic === true ? null : true
                                )
                              }
                              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <span className="text-sm text-gray-700">
                              Infografis Kesehatan Masyarakat
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sorting */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <p className="text-sm text-gray-600">
                    Menampilkan {filteredMedia.length} media
                  </p>

                  {/* Sortir Dropdown */}
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Sortir</span>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-4 py-2 border-2 border-primary rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 min-w-[140px] justify-between"
                      >
                        <span className="capitalize text-sm">{sortOrder}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
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
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-[140px] bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                        <button
                          onClick={() => {
                            setSortOrder("terbaru");
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors ${
                            sortOrder === "terbaru"
                              ? "bg-primary text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          Terbaru
                        </button>
                        <button
                          onClick={() => {
                            setSortOrder("terlama");
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors ${
                            sortOrder === "terlama"
                              ? "bg-primary text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          Terlama
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMedia.map((media) => (
                    <Link key={media.id} href={`/mediadownload/${media.id}`}>
                      <Card className="border border-gray-200 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                        <div className="relative aspect-video bg-gray-200 overflow-hidden">
                          <Image
                            src={media.image}
                            alt={media.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-5">
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-primary rounded-full">
                              {media.category}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {media.title}
                          </h3>
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <span>{media.date}</span>
                            <span>{media.downloads}</span>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                            <span>Lihat Detail</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
        </PageLayout>

        <Footer />
      </main>
    </>
  );
}