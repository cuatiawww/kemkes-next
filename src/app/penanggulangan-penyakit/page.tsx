import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import { SmallBanner } from "@/components/common/Banner";
import PenanggulanganPenyakitContent from "./PenanggulanganPenyakitContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penanggulangan Penyakit - Kementerian Kesehatan RI",
  description:
    "Program penanggulangan penyakit Kementerian Kesehatan RI meliputi pencegahan dan pengendalian penyakit menular dan tidak menular sesuai RPJMN 2020-2024.",
  keywords: [
    "Penanggulangan Penyakit",
    "Kementerian Kesehatan",
    "Penyakit Menular",
    "Penyakit Tidak Menular",
    "Surveilans Kesehatan",
    "Pencegahan Penyakit",
  ],
};

export default function PenanggulanganPenyakitPage() {
  return (
    <>
      <main role="main" itemScope itemType="https://schema.org/WebPage">
        <meta
          itemProp="name"
          content="Penanggulangan Penyakit - Kementerian Kesehatan RI"
        />
        <meta
          itemProp="description"
          content="Program penanggulangan penyakit untuk meningkatkan derajat kesehatan masyarakat Indonesia"
        />

        <TopBar />
        <Navbar />
        <MarqueeBar />

        <SmallBanner
          image="/hero.webp"
          title="PENANGGULANGAN PENYAKIT"
          description="Program berikut merupakan upaya peningkatan pengendalian pengendalian penyakit yang sesuai dengan RPJMN 2020-2024 yaitu pada penyakit jantung, stroke, hipertensi, diabetes, kanker, tuberkulosis, malaria, HIV/AIDS, emerging diseases, penyakit yang berpotensi menimbulkan kejadian luar biasa, penyakit tropis terabaikan (kusta, filariasis, schistosomiasis), gangguan jiwa, cedera, gangguan penglihatan, dan penyakit gigi dan mulut."
          height="350px"
        />

        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <PenanggulanganPenyakitContent />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}