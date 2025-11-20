"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const mediaPublikasiData = [
  {
    id: 1,
    image: "./publikasi_1.webp",
    title: "JANGAN TUNGGU DATANG: DETEKSI KANKER PAYUDARA SEKARANG!",
  },
  {
    id: 2,
    image: "./publikasi_2.webp",
    title: "Program Kesehatan Ibu dan Anak",
  },
  {
    id: 3,
    image: "./publikasi_3.webp",
    title: "Vaksinasi COVID-19 Dosis Booster",
  },
  {
    id: 4,
    image: "./publikasi_4.webp",
    title: "Gerakan Hidup Sehat Masyarakat",
  },
];

const fotoKegiatanData = [
  {
    id: 1,
    image: "./kegiatan_1.webp",
    title: "Pembukaan Pameran Karya Foto",
    date: "5 Maret 2025",
  },
  {
    id: 2,
    image: "./kegiatan_2.webp",
    title: "Kunjungan Kerja ke Puskesmas",
    date: "10 Maret 2025",
  },
  {
    id: 3,
    image: "./kegiatan_3.webp",
    title: "Sosialisasi Program Kesehatan",
    date: "15 Maret 2025",
  },
  {
    id: 4,
    image: "./kegiatan_4.webp",
    title: "Rapat Koordinasi Dinas Kesehatan",
    date: "20 Maret 2025",
  },
];

export default function MediaFotoSection() {
  const mediaPublikasiSwiperRef = useRef<SwiperType | null>(null);
  const fotoKegiatanSwiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Media Publikasi */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              MEDIA PUBLIKASI
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed h-10">
              Kumpulan materi publikasi dan kampanye kesehatan<br />masyarakat dari Kementerian Kesehatan RI
            </p>

            <div className="relative">
              {/* Custom Navigation Buttons with Gradient Background */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none rounded-l-xl" />
              <button
                onClick={() => mediaPublikasiSwiperRef.current?.slidePrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </button>

              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none rounded-r-xl" />
              <button
                onClick={() => mediaPublikasiSwiperRef.current?.slideNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </button>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => {
                  mediaPublikasiSwiperRef.current = swiper;
                }}
                className="rounded-xl shadow-lg"
              >
                {mediaPublikasiData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative h-[400px] overflow-hidden rounded-xl group cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Foto Kegiatan */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              FOTO KEGIATAN
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed h-10">
              Dokumentasi berbagai kegiatan dan program Kementerian<br />Kesehatan dalam upaya meningkatkan kesehatan masyarakat
            </p>

            <div className="relative">
              {/* Custom Navigation Buttons with Gradient Background */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none rounded-l-xl" />
              <button
                onClick={() => fotoKegiatanSwiperRef.current?.slidePrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </button>

              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none rounded-r-xl" />
              <button
                onClick={() => fotoKegiatanSwiperRef.current?.slideNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </button>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => {
                  fotoKegiatanSwiperRef.current = swiper;
                }}
                className="rounded-xl shadow-lg"
              >
                {fotoKegiatanData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative h-[400px] overflow-hidden rounded-xl group cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">{item.date}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 10px !important;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }
      `}</style>
    </section>
  );
}