"use client";

const layananDigitalData = [
  {
    id: 1,
    image: "./DIGITAL KESEHATAN/edukasi sehat.png",
    title: "EDUKASI SEHAT",
    description: "Platform edukasi kesehatan untuk meningkatkan pengetahuan masyarakat tentang gaya hidup sehat",
  },
  {
    id: 2,
    image: "./DIGITAL KESEHATAN/lpse.png",
    title: "LAYANAN PENGADAAN SECARA ELEKTRONIK (LPSE)",
    description: "Sistem pengadaan barang dan jasa secara elektronik untuk transparansi dan efisiensi",
  },
  {
    id: 3,
    image: "./DIGITAL KESEHATAN/jdih.png",
    title: "JARINGAN DOKUMENTASI DAN INFORMASI HUKUM (JDIH)",
    description: "Portal dokumentasi dan informasi produk hukum kesehatan nasional",
  },
  {
    id: 4,
    image: "./DIGITAL KESEHATAN/perpustakaan.png",
    title: "PERPUSTAKAAN KEMENTERIAN KESEHATAN",
    description: "Akses koleksi digital buku dan jurnal kesehatan untuk referensi dan penelitian",
  },
];

export default function LayananDigitalSection() {
  return (
    <section className="bg-gray-100 py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4 gap-3">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
          LAYANAN DIGITAL KESEHATAN
        </h2>
        <button className="border-2 border-primary text-primary px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-xs md:text-sm font-semibold whitespace-nowrap flex items-center justify-center gap-2 w-full md:w-auto">
          Lihat Detail
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <p className="text-gray-600 mb-6 md:mb-8 lg:mb-12 max-w-4xl text-xs md:text-sm lg:text-base">
        Akses layanan kesehatan terbaik melalui aplikasi digital yang mudah
        digunakan atau mengakses website yang telah kami sediakan. Dapatkan
        kemudahan untuk kesehatan lebih baik.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {layananDigitalData.map((item, index) => (
          <div
            key={item.id}
            className="relative overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl mx-auto"
            style={{
              maxWidth: '340px',
              height: '380px',
              borderRadius: '20px',
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative h-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent group-hover:from-secondary/95 group-hover:via-secondary/60 transition-all duration-500" />

              {/* Animated Circle */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 border-2 border-white/50 rounded-full group-hover:scale-150 group-hover:border-yellow-400 transition-all duration-500" />

              {/* Icon Background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 flex items-center justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <div className="absolute inset-0 flex items-end p-4 md:p-5 transform transition-all duration-500 group-hover:translate-y-[-5px]">
                <div className="text-white">
                  <div className="w-10 md:w-12 h-1 bg-yellow-400 mb-2 md:mb-3 group-hover:w-16 md:group-hover:w-20 transition-all duration-500 rounded-full" />
                  <p className="font-bold text-sm md:text-base mb-1 md:mb-2 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-[10px] md:text-xs text-white/90 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Overlay Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id={`grid-${item.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#grid-${item.id})`} />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}