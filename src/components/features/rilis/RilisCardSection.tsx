"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface RilisItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  dateTimestamp: number; // untuk sorting
}

interface RilisCardSectionProps {
  title?: string;
  items?: RilisItem[];
  itemsPerPage?: number;
  className?: string;
}

// Data dummy - bisa diganti dengan data dari API
const defaultRilisData: RilisItem[] = [
  {
    id: 1,
    image: "/rilis_1.webp",
    title: "Hapus Stigma, Dukung Penderita TBC untuk Sembuh",
    description: "Sekretaris Jenderal Kementerian Kesehatan Kunta Wibawa Dasa Nugraha menekankan pentingnya menghapus stigma terhadap penderita...",
    date: "10 Januari 2026",
    dateTimestamp: new Date("2026-01-10").getTime(),
  },
  {
    id: 2,
    image: "/rilis_2.webp",
    title: "Pelayanan Kesehatan untuk Masyarakat Daerah Terpencil",
    description: "Kementerian Kesehatan terus berkomitmen untuk meningkatkan akses pelayanan kesehatan di daerah terpencil...",
    date: "09 Januari 2026",
    dateTimestamp: new Date("2026-01-09").getTime(),
  },
  {
    id: 3,
    image: "/rilis_3.webp",
    title: "Program Vaksinasi Ibu dan Anak di Puskesmas",
    description: "Program vaksinasi untuk ibu dan anak terus digalakkan di seluruh puskesmas Indonesia...",
    date: "08 Januari 2026",
    dateTimestamp: new Date("2026-01-08").getTime(),
  },
  {
    id: 4,
    image: "/rilis_4.webp",
    title: "Pemeriksaan Produk Farmasi Nasional",
    description: "Kementerian Kesehatan melakukan pemeriksaan rutin terhadap produk farmasi untuk memastikan kualitas...",
    date: "07 Januari 2026",
    dateTimestamp: new Date("2026-01-07").getTime(),
  },
];

export default function RilisCardSection({
  title = "RILIS KEMENTERIAN KESEHATAN",
  items = defaultRilisData,
  itemsPerPage = 4,
  className = "",
}: RilisCardSectionProps) {
  const [sortOrder, setSortOrder] = useState<"terbaru" | "terlama">("terbaru");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sort items based on selected order
  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "terbaru") {
      return b.dateTimestamp - a.dateTimestamp;
    } else {
      return a.dateTimestamp - b.dateTimestamp;
    }
  });

  const displayedItems = sortedItems.slice(0, itemsPerPage);

  return (
    <div className={`w-full ${className}`}>
      {/* Header with Title and Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
          {title}
        </h2>

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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {displayedItems.map((item) => (
          <Card
            key={item.id}
            className="border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {item.date}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
