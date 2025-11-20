"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const inovasiData = {
  featured: {
    id: 1,
    image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800",
    title: "Teknologi AI dalam Diagnosa Medis",
    description: "Implementasi kecerdasan buatan untuk diagnosis penyakit yang lebih akurat dan cepat"
  },
  items: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200",
      title: "LABORATORIUM",
      description: "Fasilitas laboratorium kesehatan modern untuk diagnosis akurat dan penelitian kesehatan"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=200",
      title: "ROBOTIKA AND REMOTE SURGERY",
      description: "Teknologi robotika untuk operasi jarak jauh dan prosedur medis presisi tinggi"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=200",
      title: "KESEHATAN BERBASIS E-HEALTH",
      description: "Platform digital untuk kemudahan akses layanan kesehatan dan informasi medis"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200",
      title: "TELEMEDICINE",
      description: "Konsultasi kesehatan jarak jauh dengan teknologi video conference"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200",
      title: "MEDICAL IMAGING",
      description: "Teknologi pencitraan medis canggih untuk diagnosis lebih presisi"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=200",
      title: "BIOSENSOR TECHNOLOGY",
      description: "Sensor biologis untuk monitoring kesehatan real-time"
    },
  ]
};

export default function InovasiKesehatanSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + itemsPerPage < inovasiData.items.length;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const visibleItems = inovasiData.items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-primary">INOVASI KESEHATAN</h2>
        <button className="text-primary hover:underline font-semibold">
          Lihat Detail →
        </button>
      </div>
      <p className="text-gray-600 mb-8">
        Kumpulan teknologi dan pengembangan inovasi kesehatan yang berpengaruh
        terhadap kualitas dan mutu dalam kesehatan di Indonesia
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Featured */}
        <div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer h-full min-h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              style={{ backgroundImage: `url('${inovasiData.featured.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-24 h-24 border-4 border-white/30 rounded-full group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute bottom-20 left-6 w-16 h-16 border-4 border-white/20 rotate-45 group-hover:rotate-90 transition-all duration-700" />

            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
              <div className="inline-block px-4 py-2 bg-secondary rounded-full text-white text-xs font-bold mb-4 group-hover:bg-yellow-400 group-hover:text-primary transition-all duration-300">
                FEATURED
              </div>
              <h3 className="text-white text-3xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                {inovasiData.featured.title}
              </h3>
              <p className="text-white/90 text-sm max-w-xl">
                {inovasiData.featured.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - List with Navigation */}
        <div className="space-y-6 relative">
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mb-4">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`p-2 rounded-lg border-2 border-primary transition-all ${
                canScrollLeft
                  ? "bg-primary text-white hover:bg-primary-dark cursor-pointer"
                  : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`p-2 rounded-lg border-2 border-primary transition-all ${
                canScrollRight
                  ? "bg-primary text-white hover:bg-primary-dark cursor-pointer"
                  : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
              }`}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="space-y-5">
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer animate-fadeIn p-5"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex gap-5">
                  <div className="relative flex-shrink-0 w-36 h-36 rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/30 transition-colors duration-300" />

                    {/* Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h4 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 pt-4">
            {Array.from({ length: Math.ceil(inovasiData.items.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index * itemsPerPage
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}