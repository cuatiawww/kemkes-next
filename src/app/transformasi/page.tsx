import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import { SmallBanner } from "@/components/common/Banner";
import TransformasiContent from "./TransformasiContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transformasi Kesehatan Indonesia - Kementerian Kesehatan RI",
  description:
    "Program transformasi kesehatan Indonesia yang mencakup 6 jenis transformasi: Layanan Primer, Layanan Rujukan, Sistem Ketahanan Kesehatan, Sistem Pembiayaan Kesehatan, SDM Kesehatan, dan Teknologi Kesehatan.",
  keywords: [
    "Transformasi Kesehatan",
    "Kementerian Kesehatan",
    "Layanan Primer",
    "Layanan Rujukan",
    "Sistem Kesehatan",
    "SDM Kesehatan",
    "Teknologi Kesehatan",
  ],
};

export default function TransformasiPage() {
  return (
    <>
      <main role="main" itemScope itemType="https://schema.org/WebPage">
        <meta
          itemProp="name"
          content="Transformasi Kesehatan Indonesia - Kementerian Kesehatan RI"
        />
        <meta
          itemProp="description"
          content="Program transformasi kesehatan Indonesia untuk menciptakan Indonesia sehat"
        />

        <TopBar />
        <Navbar />
        <MarqueeBar />

        <SmallBanner
          image="/hero.webp"
          title="TRANSFORMASI KESEHATAN INDONESIA"
          description="Program terintegrasi untuk melakukan transformasi kesehatan menuju Indonesia yang lebih sehat melalui 6 jenis transformasi: Layanan Primer, Layanan Rujukan, Sistem Ketahanan Kesehatan, Sistem Pembiayaan Kesehatan, SDM Kesehatan, dan Teknologi Kesehatan."
          height="350px"
        />

        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <TransformasiContent />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}