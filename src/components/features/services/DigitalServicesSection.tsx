"use client";

import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";

const layananDigitalData = [
  {
    id: 1,
    image: "/DIGITAL KESEHATAN/edukasi sehat.png",
    title: "EDUKASI SEHAT",
    description:
      "Platform edukasi kesehatan untuk meningkatkan pengetahuan masyarakat tentang gaya hidup sehat",
  },
  {
    id: 2,
    image: "/DIGITAL KESEHATAN/lpse.png",
    title: "LAYANAN PENGADAAN SECARA ELEKTRONIK (LPSE)",
    description:
      "Sistem pengadaan barang dan jasa secara elektronik untuk transparansi dan efisiensi",
  },
  {
    id: 3,
    image: "/DIGITAL KESEHATAN/jdih.png",
    title: "JARINGAN DOKUMENTASI DAN INFORMASI HUKUM (JDIH)",
    description: "Portal dokumentasi dan informasi produk hukum kesehatan nasional",
  },
  {
    id: 4,
    image: "/DIGITAL KESEHATAN/perpustakaan.png",
    title: "PERPUSTAKAAN KEMENTERIAN KESEHATAN",
    description:
      "Akses koleksi digital buku dan jurnal kesehatan untuk referensi dan penelitian",
  },
];

interface DigitalServiceCardProps {
  item: typeof layananDigitalData[0];
  index: number;
}

function DigitalServiceCard({ item, index }: DigitalServiceCardProps) {
  return (
    <div
      className="relative overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      style={{
        maxWidth: "340px",
        height: "460px",
        borderRadius: "24px",
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative h-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="340px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent group-hover:from-secondary/95 group-hover:via-secondary/60 transition-all duration-500" />

        {/* Animated Circle */}
        <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/50 rounded-full group-hover:scale-150 group-hover:border-yellow-400 transition-all duration-500" />

        {/* Icon Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>

        <div className="absolute inset-0 flex items-end p-5 transform transition-all duration-500 group-hover:translate-y-[-5px]">
          <div className="text-white">
            <div className="w-12 h-1 bg-yellow-400 mb-3 group-hover:w-20 transition-all duration-500 rounded-full" />
            <p className="font-bold text-base mb-2 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
              {item.title}
            </p>
            <p className="text-xs text-white/90 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 line-clamp-3">
              {item.description}
            </p>
          </div>
        </div>

        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id={`grid-${item.id}`}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#grid-${item.id})`} />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function DigitalServicesSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="LAYANAN DIGITAL KESEHATAN"
          description="Akses layanan kesehatan terbaik melalui aplikasi digital yang mudah digunakan atau mengakses website yang telah kami sediakan. Dapatkan kemudahan untuk kesehatan lebih baik."
          buttonText="Lihat Detail"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {layananDigitalData.map((item, index) => (
            <DigitalServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}