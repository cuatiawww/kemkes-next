"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const programData = [
  {
    id: 1,
    icon: "/DIGITAL KESEHATAN/edukasi sehat.png",
    title: "INFORMASI PROGRAM SURVEILANS DAN KARANTINA KESEHATAN",
    description: "Program Surveilans dan Karantina Kesehatan adalah Program Kementerian Kesehatan RI yang bertanggung jawab dalam hal surveilans dan karantina kesehatan. Berperan...",
    fullDescription: "Program Surveilans dan Karantina Kesehatan adalah Program Kementerian Kesehatan RI yang bertanggung jawab dalam hal surveilans dan karantina kesehatan. Program ini berperan penting dalam deteksi dini, pencegahan, dan pengendalian penyebaran penyakit menular melalui monitoring ketat di pintu masuk negara dan sistem surveilans terintegrasi.",
    category: "Surveilans",
    link: "#"
  },
  {
    id: 2,
    icon: "/DIGITAL KESEHATAN/lpse.png",
    title: "INFORMASI SURVEILANS SENTINEL INFLUENZA LIKE ILLNESS (ILI) DAN SEVERE ACUTE RESPIRATORY INFECTION (SARI)",
    description: "Informasi Surveilans Sentinel Influenza Like Illness (ILI) dan Severe Acute Respiratory Infection (SARI) Penyelenggaraan Surveilans Sentinel ILI-SARI yang dilaksanakan oleh Kementeri...",
    fullDescription: "Penyelenggaraan Surveilans Sentinel ILI-SARI merupakan sistem monitoring penyakit pernapasan akut yang dilaksanakan oleh Kementerian Kesehatan untuk mendeteksi dini potensi wabah influenza dan infeksi pernapasan berat. Sistem ini melibatkan rumah sakit sentinel di seluruh Indonesia untuk pengumpulan data dan sampel secara berkala.",
    category: "Surveilans",
    link: "#"
  },
  {
    id: 3,
    icon: "/DIGITAL KESEHATAN/jdih.png",
    title: "INFORMASI PROGRAM TOSS-TB INDONESIA",
    description: "Program ini merupakan upaya pendekatan yang dilakukan oleh Kementerian Kesehatan dalam menemukan, mendiagnosis, serta menyembuhkan masyarakat yang terpapai dan...",
    fullDescription: "Program TOSS-TB (Temukan Obati Sampai Sembuh Tuberkulosis) adalah upaya komprehensif Kementerian Kesehatan dalam menemukan, mendiagnosis, mengobati, dan menyembuhkan pasien TB. Program ini melibatkan active case finding, pemeriksaan GeneXpert gratis, pengobatan lengkap, dan pendampingan hingga pasien sembuh.",
    category: "Program Khusus",
    link: "#"
  },
  {
    id: 4,
    icon: "/DIGITAL KESEHATAN/perpustakaan.png",
    title: "KERANGKA KERJA PENCEGAHAN DAN PENGENDALIAN KANKER",
    description: "Kanker merupakan penyebab kematian ketiga terbesar di Indonesia. Berdasarkan data Riset Kesehatan Dasar atau Riskesdas dari Riau Globoscan, terdapat lebih dari 408.661 kasus...",
    fullDescription: "Kanker menjadi salah satu penyebab kematian terbesar di Indonesia dengan lebih dari 408.661 kasus baru setiap tahunnya. Kerangka kerja pencegahan dan pengendalian kanker dirancang untuk deteksi dini, pengobatan tepat waktu, dan peningkatan kualitas hidup pasien melalui pendekatan holistik yang melibatkan promotif, preventif, kuratif, dan rehabilitatif.",
    category: "Penyakit Tidak Menular",
    link: "#"
  },
  {
    id: 5,
    icon: "/DIGITAL KESEHATAN/edukasi sehat.png",
    title: "LAPORAN PENGAWASAN KASUS INFLUENZA DAN COVID-19 TAHUN 2025",
    description: "Statistik Resmi Kementerian Kesehatan Laporan Pengawasan Kasus Influenza dan COVID-19 Tahun 2025 Ringkasan laporan dari sistem surveilans penyakit Laporan surveilans penyakit pembapasan...",
    fullDescription: "Laporan pengawasan kasus Influenza dan COVID-19 merupakan publikasi berkala yang menyajikan data terkini mengenai penyebaran, tren, dan penanganan kedua penyakit ini di Indonesia. Laporan ini mencakup statistik kasus, tingkat kesembuhan, vaksinasi, dan langkah-langkah pengendalian yang telah dilakukan oleh pemerintah.",
    category: "Laporan",
    link: "#"
  },
  {
    id: 6,
    icon: "/DIGITAL KESEHATAN/lpse.png",
    title: "PEDOMAN DESA / KELURAHAN SEHAT IKLIM (DEKSI)",
    description: "Tantangan global dalam upaya pengurangan dampak risiko perubahan iklim merupakan salah satu agenda prioritas dunia untuk menyelamatkan kehidupan makhluk hidup...",
    fullDescription: "Program Desa/Kelurahan Sehat Iklim (DEKSI) adalah inisiatif untuk membangun ketahanan masyarakat terhadap dampak perubahan iklim. Program ini fokus pada adaptasi dan mitigasi perubahan iklim di tingkat desa melalui penguatan sistem kesehatan berbasis masyarakat, pengelolaan lingkungan, dan peningkatan kesadaran tentang risiko kesehatan akibat perubahan iklim.",
    category: "Program Khusus",
    link: "#"
  },
  {
    id: 7,
    icon: "/DIGITAL KESEHATAN/jdih.png",
    title: "PEDOMAN PENILAIAN FASILITAS KESEHATAN BERKETAHANAN IKLIM DAN LESTARI LINGKUNGAN DI INDONESIA",
    description: "Perubahan iklim memberikan dampak yang sangat berpengaruh terhadap sektor kesehatan, khususnya di negara kepulauan seperti Indonesia. Pemerintah Indonesia melaui Kementeri...",
    fullDescription: "Pedoman ini dirancang untuk menilai dan meningkatkan ketahanan fasilitas kesehatan terhadap dampak perubahan iklim serta memastikan keberlanjutan lingkungan. Penilaian mencakup aspek infrastruktur hijau, efisiensi energi, pengelolaan limbah ramah lingkungan, dan kesiapsiagaan menghadapi bencana terkait iklim.",
    category: "Pedoman",
    link: "#"
  },
  {
    id: 8,
    icon: "/DIGITAL KESEHATAN/perpustakaan.png",
    title: "ENVIRONMENTAL AND SOCIAL COMMITMENT PLAN (ESCP) – COLLABORATIVE APPROACH FOR RESILIENT SURVEILLANCE AND PANDEMIC PREPAREDNESS IN INDONESIA (CARE-1) PROJECT",
    description: "Proyek Collaborative Approach for Resilient Surveillance and Pandemic Preparedness in Indonesia (CARE-1) merupakan kerjasama Pemerintah Indonesia dengan Bank Dunia yang...",
    fullDescription: "Proyek CARE-1 (Collaborative Approach for Resilient Surveillance and Pandemic Preparedness in Indonesia) adalah kerjasama strategis antara Pemerintah Indonesia dan Bank Dunia untuk memperkuat sistem surveilans dan kesiapsiagaan menghadapi pandemi. Proyek ini mencakup peningkatan kapasitas laboratorium, penguatan sistem early warning, dan pengembangan jejaring surveilans terintegrasi.",
    category: "Program Internasional",
    link: "#"
  }
];

const categories = [
  "Semua Program",
  "Surveilans",
  "Program Khusus",
  "Penyakit Tidak Menular",
  "Laporan",
  "Pedoman",
  "Program Internasional"
];

export default function PenanggulanganPenyakitContent() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Program");
  const [selectedProgram, setSelectedProgram] = useState(programData[0]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const filteredPrograms = selectedCategory === "Semua Program"
    ? programData
    : programData.filter(program => program.category === selectedCategory);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setCanScrollUp(scrollTop > 0);
      setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10);
    }
  };

  const scrollTo = (direction: 'up' | 'down') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        top: direction === 'down' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all ${
              selectedCategory === category
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Left: Program List */}
        <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Daftar Program ({filteredPrograms.length})
              </h2>
              
              {/* Scroll Indicators */}
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => scrollTo('up')}
                  disabled={!canScrollUp}
                  className={`p-1 rounded transition-all ${
                    canScrollUp 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ChevronUpIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollTo('down')}
                  disabled={!canScrollDown}
                  className={`p-1 rounded transition-all ${
                    canScrollDown 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ChevronDownIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="space-y-4 h-[600px] overflow-y-auto pr-2"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {filteredPrograms.map((program) => (
                <Card
                  key={program.id}
                  onClick={() => setSelectedProgram(program)}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl mx-1 ${
                    selectedProgram.id === program.id
                      ? "border-2 border-primary shadow-lg scale-[1.02]"
                      : "border border-gray-200 hover:border-primary"
                  }`}
                >
                  <CardContent className="p-4 md:p-5">
                    <div className="flex gap-4">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                        <Image
                          src={program.icon}
                          alt={program.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-2">
                              {program.title}
                            </h3>
                          <ChevronRightIcon className={`w-5 h-5 flex-shrink-0 transition-transform ${
                            selectedProgram.id === program.id ? "text-primary rotate-90" : "text-gray-400"
                          }`} />
                        </div>
                        
                        <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-2">
                          {program.description}
                        </p>
                        
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {program.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>



        {/* Right: Program Detail */}
        <div className="lg:sticky lg:top-8 h-[750px]">
          <Card className="border-2 border-primary shadow-xl h-full">
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src={selectedProgram.icon}
                      alt={selectedProgram.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="flex justify-center">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full">
                    {selectedProgram.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-primary text-center">
                  {selectedProgram.title}
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>

                {/* Full Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                  {selectedProgram.fullDescription}
                </p>

                {/* Action Button */}
                <div className="pt-4">
                  <a
                    href={selectedProgram.link}
                    className="block w-full bg-primary hover:bg-primary/90 text-white text-center font-semibold py-3 rounded-lg transition-all hover:shadow-lg"
                  >
                    Selengkapnya
                    <ChevronRightIcon className="w-5 h-5 inline-block ml-2" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}