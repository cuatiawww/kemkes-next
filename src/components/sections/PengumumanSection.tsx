"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DocumentTextIcon, BellIcon } from "@heroicons/react/24/outline";

const pengumumanData = [
  {
    id: 1,
    icon: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=100&q=80",
    title: "Buku Panduan dan Logo HKN ke-61",
    type: "dokumen",
  },
  {
    id: 2,
    icon: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=100&q=80",
    title: "Selamat Kepada Tim Terpilih di Grand Final Indonesia Healthcare AI Hackathon 2025",
    type: "pengumuman",
  },
  {
    id: 3,
    icon: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=100&q=80",
    title: "Bersama Lawan TB: RSUP Persahabatan Hadirkan i-ECHO Tuberkulosis 2025",
    type: "pengumuman",
  },
  {
    id: 4,
    icon: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&q=80",
    title: "Pemilihan Direktur Politeknik Kesehatan di Lingkungan Kementerian Kesehatan Tahun 2025",
    type: "dokumen",
  },
];

export default function PengumumanSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pengumuman List */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-primary">PENGUMUMAN</h2>
              <button className="border-2 border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all font-semibold text-sm">
                Lihat Lainnya
              </button>
            </div>

            <div className="space-y-4">
              {pengumumanData.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="w-20 h-20 rounded-lg bg-cover bg-center"
                          style={{ backgroundImage: `url('${item.icon}')` }}
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {item.type === "dokumen" ? (
                            <>
                              <DocumentTextIcon className="w-3 h-3 mr-1" />
                              Dokumen
                            </>
                          ) : (
                            <>
                              <BellIcon className="w-3 h-3 mr-1" />
                              Pengumuman
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Sosial */}
          <div className="lg:col-span-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-primary">MEDIA SOSIAL</h2>
              <button className="border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all font-semibold text-xs">
                Lihat Lainnya
              </button>
            </div>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl mx-auto flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    EMBED INSTAGRAM KEMKES
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Ikuti update terbaru dari Kementerian Kesehatan RI
                  </p>
                  <a
                    href="https://instagram.com/kemenkes_ri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-semibold"
                  >
                    Follow @kemenkes_ri
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
