"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const layananData = [
  {
    id: 1,
    icon: DocumentTextIcon,
    title: "SATUSEHAT",
    description: "Sistem data kesehatan terpadu",
  },
  {
    id: 2,
    icon: ShieldCheckIcon,
    title: "PENANGGULANGAN PENYAKIT",
    description: "Layanan kesehatan preventif",
  },
  {
    id: 3,
    icon: BeakerIcon,
    title: "FARMASI DAN ALAT KESEHATAN",
    description: "Pengelolaan farmasi nasional",
  },
  {
    id: 4,
    icon: HeartIcon,
    title: "KEBIJAKAN KESEHATAN",
    description: "Program kesehatan keluarga",
  },
  {
    id: 5,
    icon: UserGroupIcon,
    title: "PANTAUAN KEJADIAN KRISIS KESEHATAN",
    description: "Dukungan program kesehatan",
  },
   {
    id: 5,
    icon: UserGroupIcon,
    title: "PANTAUAN KEJADIAN KRISIS KESEHATAN",
    description: "Dukungan program kesehatan",
  },
   {
    id: 5,
    icon: UserGroupIcon,
    title: "PANTAUAN KEJADIAN KRISIS KESEHATAN",
    description: "Dukungan program kesehatan",
  },
   {
    id: 5,
    icon: UserGroupIcon,
    title: "PANTAUAN KEJADIAN KRISIS KESEHATAN",
    description: "Dukungan program kesehatan",
  },
];

export default function LayananSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pencarian..."
                  className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-8 py-2 rounded-full hover:bg-primary-dark transition-all">
                  Cari
                </button>
              </div>
            </div>
          </div>

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
