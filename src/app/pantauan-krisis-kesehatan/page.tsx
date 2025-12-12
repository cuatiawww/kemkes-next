import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import { SmallBanner } from "@/components/common/Banner";
import PantauanKrisisContent from "./PantauanKrisisContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pantauan Kejadian Krisis Kesehatan - Kementerian Kesehatan RI",
  description:
    "Dashboard pantauan kejadian krisis kesehatan di Indonesia dengan peta persebaran, data statistik, dan informasi real-time.",
  keywords: [
    "Krisis Kesehatan",
    "Pantauan Kesehatan",
    "Dashboard Kesehatan",
    "Bencana Kesehatan",
    "Kementerian Kesehatan",
  ],
};

export default function PantauanKrisisKesehatanPage() {
  return (
    <>
      <main role="main" itemScope itemType="https://schema.org/WebPage">
        <meta
          itemProp="name"
          content="Pantauan Kejadian Krisis Kesehatan - Kementerian Kesehatan RI"
        />
        <meta
          itemProp="description"
          content="Dashboard informasi krisis kesehatan Indonesia"
        />

        <TopBar />
        <Navbar />
        <MarqueeBar />

        <SmallBanner
          image="/hero.webp"
          title="DASHBOARD INFORMASI KRISIS KESEHATAN"
          description="Data diambil dari Sistem Informasi Pusat Krisis Kesehatan untuk Data Bencana. Pantau kejadian krisis kesehatan di Indonesia secara real-time dengan peta persebaran dan statistik terkini."
          height="350px"
        />

        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <PantauanKrisisContent />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}