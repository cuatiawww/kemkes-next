"use client";

const layananDigitalData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400",
    title: "FASILITAS ONLINE",
    description: "Akses fasilitas kesehatan secara online",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400",
    title: "KONSULTASI ONLINE",
    description: "Konsultasi dengan dokter via online",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400",
    title: "REKAM MEDIS ELEKTRONIK",
    description: "Akses rekam medis Anda kapan saja",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
    title: "ADMINISTRASI KESEHATAN",
    description: "Urus administrasi kesehatan mudah",
  },
];

export default function LayananDigitalSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-primary">
          LAYANAN DIGITAL KESEHATAN
        </h2>
        <button className="text-primary hover:underline font-semibold">
          Lihat Detail →
        </button>
      </div>
      <p className="text-gray-600 mb-8">
        Akses layanan kesehatan terbaik melalui aplikasi digital yang mudah
        digunakan atau mengakses website yang telah kami sediakan. Dapatkan
        kemudahan untuk kesehatan lebih baik.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {layananDigitalData.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative h-64 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent group-hover:from-secondary/95 group-hover:via-secondary/60 transition-all duration-500" />

              {/* Animated Circle */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/50 rounded-full group-hover:scale-150 group-hover:border-yellow-400 transition-all duration-500" />

              {/* Icon Background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <div className="absolute inset-0 flex items-end p-6 transform transition-all duration-500 group-hover:translate-y-[-5px]">
                <div className="text-white">
                  <div className="w-12 h-1 bg-yellow-400 mb-4 group-hover:w-20 transition-all duration-500 rounded-full" />
                  <p className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {item.title}
                  </p>
                  <p className="text-sm text-white/90 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
    </section>
  );
}
