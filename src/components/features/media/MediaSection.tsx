"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { NavigationArrows } from "@/components/common/Navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const mediaPublikasiData = [
  {
    id: 1,
    image: "/publikasi_1.webp",
    title: "JANGAN TUNGGU DATANG: DETEKSI KANKER PAYUDARA SEKARANG!",
  },
  {
    id: 2,
    image: "/publikasi_2.webp",
    title: "Program Kesehatan Ibu dan Anak",
  },
  {
    id: 3,
    image: "/publikasi_3.webp",
    title: "Vaksinasi COVID-19 Dosis Booster",
  },
  {
    id: 4,
    image: "/publikasi_4.webp",
    title: "Gerakan Hidup Sehat Masyarakat",
  },
];

const fotoKegiatanData = [
  {
    id: 1,
    image: "/kegiatan_1.webp",
    title: "Pembukaan Pameran Karya Foto",
    date: "5 Maret 2025",
  },
  {
    id: 2,
    image: "/kegiatan_2.webp",
    title: "Kunjungan Kerja ke Puskesmas",
    date: "10 Maret 2025",
  },
  {
    id: 3,
    image: "/kegiatan_3.webp",
    title: "Sosialisasi Program Kesehatan",
    date: "15 Maret 2025",
  },
  {
    id: 4,
    image: "/kegiatan_4.webp",
    title: "Rapat Koordinasi Dinas Kesehatan",
    date: "20 Maret 2025",
  },
];

interface MediaSwiperProps {
  data: typeof mediaPublikasiData | typeof fotoKegiatanData;
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

function MediaSwiper({ data, swiperRef }: MediaSwiperProps) {
  return (
    <div className="relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none rounded-l-xl" />
      <NavigationArrows
        onPrev={() => swiperRef.current?.slidePrev()}
        onNext={() => swiperRef.current?.slideNext()}
        canScrollLeft={true}
        canScrollRight={true}
        variant="floating"
        className="z-20"
      />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none rounded-r-xl" />

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
          swiperRef.current = swiper;
        }}
        className="rounded-xl shadow-lg"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[400px] overflow-hidden rounded-xl group cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>
                {'date' in item && item.date && (
                  <p className="text-white/80 text-sm mt-2">{item.date as string}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function MediaSection() {
  const mediaPublikasiSwiperRef = useRef<SwiperType | null>(null);
  const fotoKegiatanSwiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Media Publikasi */}
          <div>
            <SectionHeader
              title="MEDIA PUBLIKASI"
              description="Kumpulan materi publikasi dan kampanye kesehatan masyarakat dari Kementerian Kesehatan RI"
              buttonText="Lihat Lainnya"
            />
            <MediaSwiper data={mediaPublikasiData} swiperRef={mediaPublikasiSwiperRef} />
          </div>

          {/* Foto Kegiatan */}
          <div>
            <SectionHeader
              title="FOTO KEGIATAN"
              description="Dokumentasi berbagai kegiatan dan program Kementerian Kesehatan dalam upaya meningkatkan kesehatan masyarakat"
              buttonText="Lihat Lainnya"
            />
            <MediaSwiper data={fotoKegiatanData} swiperRef={fotoKegiatanSwiperRef} />
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