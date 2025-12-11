import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import { SmallBanner } from "@/components/common/Banner";
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";
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

        {/* Small Banner */}
        <SmallBanner
          image="/hero.webp"
          title="TRANSFORMASI KESEHATAN INDONESIA"
          description="Program terintegrasi untuk melakukan transformasi kesehatan menuju Indonesia yang lebih sehat melalui 6 jenis transformasi: Layanan Primer, Layanan Rujukan, Sistem Ketahanan Kesehatan, Sistem Pembiayaan Kesehatan, SDM Kesehatan, dan Teknologi Kesehatan."
          height="350px"
        />

        <PageLayout
          sidebar={
            <RightSidebar
              showAnnouncements={true}
              showSocialMedia={true}
              showCalendar={true}
              showRilis={false}
            />
          }
          mainClassName="space-y-8 md:space-y-12"
        >
          <TransformasiContent />
        </PageLayout>

        <Footer />
      </main>
    </>
  );
}