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
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "JANGAN TUNGGU DATANG: DETEKSI KANKER PAYUDARA SEKARANG!",
  },
  {
    id: 2,
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "Program Kesehatan Ibu dan Anak",
  },
  {
    id: 3,
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "Vaksinasi COVID-19 Dosis Booster",
  },
  {
    id: 4,
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "Gerakan Hidup Sehat Masyarakat",
  },
];

const fotoKegiatanData = [
  {
    id: 1,
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "Pembukaan Pameran Karya Foto",
    date: "5 Maret 2025",
  },
  {
    id: 2,
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "Kunjungan Kerja ke Puskesmas",
    date: "10 Maret 2025",
  },
  {
    id: 3,
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "Sosialisasi Program Kesehatan",
    date: "15 Maret 2025",
  },
  {
    id: 4,
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "Rapat Koordinasi Dinas Kesehatan",
    date: "20 Maret 2025",
  },
];

export default function MediaFotoSection() {
  const mediaPublikasiSwiperRef = useRef<SwiperType | null>(null);
  const fotoKegiatanSwiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Media Publikasi */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">
              MEDIA PUBLIKASI
            </h2>

            <div className="relative">
              {/* Custom Navigation Buttons */}
              <button
                onClick={() => mediaPublikasiSwiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-6 h-6 text-primary" />
              </button>

              <button
                onClick={() => mediaPublikasiSwiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-6 h-6 text-primary" />
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
            <h2 className="text-2xl font-bold text-primary mb-6">
              FOTO KEGIATAN
            </h2>

            <div className="relative">
              {/* Custom Navigation Buttons */}
              <button
                onClick={() => fotoKegiatanSwiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-6 h-6 text-primary" />
              </button>

              <button
                onClick={() => fotoKegiatanSwiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-6 h-6 text-primary" />
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
