import { Card, CardContent } from "@/components/ui/card";
import { ArticleCard } from "@/components/common/Card";
import Image from "next/image";

const rilisData = {
  featured: {
    id: 1,
    image: "/rilis_1.webp",
    title: "Pelayanan Kesehatan untuk Masyarakat Daerah Terpencil",
    date: "10 Nov 2025",
  },
  items: [
    {
      id: 2,
      image: "/rilis_2.webp",
      title: "Konsultasi Kesehatan di Fasilitas Kesehatan",
      date: "10 Nov 2025",
    },
    {
      id: 3,
      image: "/rilis_3.webp",
      title: "Program Vaksinasi Ibu dan Anak di Puskesmas",
      date: "09 Nov 2025",
    },
    {
      id: 4,
      image: "/rilis_4.webp",
      title: "Pemeriksaan Produk Farmasi Nasional",
      date: "08 Nov 2025",
    },
  ],
};

export default function RilisCard() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 md:mb-8 lg:mb-12 gap-4">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-4">
            RILIS KEMENTERIAN KESEHATAN
          </h2>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
            Informasi resmi dan terkini dari Kementerian Kesehatan RI mengenai
            kebijakan serta perkembangan isu kesehatan nasional.
          </p>
        </div>
        <button className="md:ml-6 border-2 border-primary text-primary px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-xs md:text-sm font-semibold whitespace-nowrap flex items-center justify-center gap-2 w-full md:w-auto">
          Lihat Lainnya
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Featured Article */}
      <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 mb-3 md:mb-4 flex-grow min-h-[200px] md:min-h-[300px] group cursor-pointer">
        <Image
          src={rilisData.featured.image}
          alt={rilisData.featured.title}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="text-white text-base md:text-xl font-bold mb-1 md:mb-2 line-clamp-2">
            {rilisData.featured.title}
          </h3>
          <div className="flex items-center gap-1 text-xs md:text-sm text-white/90">
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
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
            {rilisData.featured.date}
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-12 lg:mt-16">
        {rilisData.items.map((item) => (
          <ArticleCard
            key={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}
