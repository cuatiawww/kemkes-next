"use client";

export default function MarqueeBar() {
  const newsItems = [
    "Surat Edaran Nomor: HK.02.02/C/4022/2025 tentang Pencegahan Penularan Sertifikasi Lak Ujione Sanitasi untuk Siangan Pelayanan Penerima Gie pada Program Makan Bergizi Gratis",
    "Buku Panduan Uji Kesehatan Neonatal (neorl)",
    "Pedoman Nasional Peraturan Perundangan",
  ];

  return (
    <div className="bg-primary/10 text-primary py-2 overflow-hidden border-b border-primary/20">
      <div className="animate-marquee whitespace-nowrap text-sm">
        <span className="inline-block px-4">
          <span className="font-bold mr-4">📢 INFORMASI TERKINI:</span>
          {newsItems.map((item, index) => (
            <span key={index} className="mx-8">
              • {item}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
