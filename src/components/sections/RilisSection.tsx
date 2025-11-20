/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CalendarIcon } from "@heroicons/react/24/outline";

const rilisData = {
  featured: {
    id: 1,
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
    title: "Pelayanan Kesehatan untuk Masyarakat Daerah Terpencil",
  },
  items: [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=200&fit=crop",
      title: "Konsultasi Kesehatan di Fasilitas Kesehatan",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=200&fit=crop",
      title: "Program Vaksinasi Ibu dan Anak di Puskesmas",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=200&fit=crop",
      title: "Pemeriksaan Produk Farmasi Nasional",
    },
  ],
};

export default function RilisSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-primary">
              RILIS KEMENTERIAN KESEHATAN
            </h2>
            <button className="text-primary hover:underline text-sm font-semibold">
              Lihat Lainnya →
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Kementerian Kesehatan RI membagikan beberapa berita terkait seputar
            kesehatan dan upaya perkembangan bagi kesehatan nasional
          </p>

          {/* Featured Article */}
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-6 flex-grow min-h-[300px] group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url('${rilisData.featured.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold group-hover:text-yellow-300 transition-colors">
                {rilisData.featured.title}
              </h3>
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rilisData.items.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 group-hover:text-primary transition-colors font-medium">
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
