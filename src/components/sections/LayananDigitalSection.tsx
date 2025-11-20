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
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-primary">
          LAYANAN DIGITAL KESEHATAN
        </h2>
        <button className=" border-2 border-primary text-primary px-6 py-2.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold whitespace-nowrap flex items-center gap-2">
          Lihat Detail
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <p className="text-gray-600 mb-12 max-w-4xl">
        Akses layanan kesehatan terbaik melalui aplikasi digital yang mudah
        digunakan atau mengakses website yang telah kami sediakan. Dapatkan
        kemudahan untuk kesehatan lebih baik.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {layananDigitalData.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105 p-4"
            style={{
              maxWidth: '340px',
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Size Badge */}
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                313 × 238
              </div>
            </div>

            {/* Content */}
            <div className="px-2">
              <h3 className="text-gray-800 font-bold text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>10 Nov 2025</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}