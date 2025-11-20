import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MainContentSection from "@/components/sections/MainContentSection";
import LayananSection from "@/components/sections/LayananSection";
import InovasiKesehatanSection from "@/components/sections/InovasiKesehatanSection";
import LayananDigitalSection from "@/components/sections/LayananDigitalSection";
import MediaFotoSection from "@/components/sections/MediaFotoSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda - Portal Resmi Kementerian Kesehatan RI",
  description:
    "Portal resmi Kementerian Kesehatan Republik Indonesia. Akses informasi kesehatan, layanan publik, berita terkini, dan inovasi kesehatan untuk masyarakat Indonesia.",
  keywords: [
    "Kementerian Kesehatan",
    "Portal Kemenkes",
    "Layanan Kesehatan",
    "SATUSEHAT",
    "Penanggulangan Penyakit",
    "Farmasi dan Alat Kesehatan",
    "Berita Kesehatan",
    "Rilis Kemenkes",
    "Program Kesehatan",
    "Pelayanan Kesehatan Rujukan",
  ],
  openGraph: {
    title: "Beranda - Kementerian Kesehatan RI",
    description:
      "Portal resmi Kementerian Kesehatan RI. Informasi kesehatan, layanan publik, dan program kesehatan nasional untuk Indonesia yang lebih sehat.",
    images: ["/og-image.jpg"],
    url: "https://kemkes-next.vercel.app",
  },
  alternates: {
    canonical: "https://kemkes-next.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Government Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentService",
            name: "Layanan Kementerian Kesehatan RI",
            description:
              "Layanan publik dan informasi kesehatan dari Kementerian Kesehatan Republik Indonesia termasuk SATUSEHAT, Penanggulangan Penyakit, Farmasi dan Alat Kesehatan, serta berbagai program kesehatan nasional",
            provider: {
              "@type": "GovernmentOrganization",
              name: "Kementerian Kesehatan Republik Indonesia",
              url: "https://kemkes-next.vercel.app",
            },
            areaServed: {
              "@type": "Country",
              name: "Indonesia",
            },
            audience: {
              "@type": "Audience",
              audienceType: "General Public",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://kemkes-next.vercel.app",
              servicePhone: "+62-21-5201590",
              availableLanguage: ["id", "en"],
            },
          }),
        }}
      />

      {/* Structured Data for Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Beranda",
                item: "https://kemkes-next.vercel.app",
              },
            ],
          }),
        }}
      />

      {/* Structured Data for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Apa itu SATUSEHAT?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SATUSEHAT adalah sistem data kesehatan terpadu untuk integrasi informasi kesehatan nasional yang dikembangkan oleh Kementerian Kesehatan RI.",
                },
              },
              {
                "@type": "Question",
                name: "Layanan apa saja yang tersedia di Kemenkes RI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kemenkes RI menyediakan berbagai layanan seperti SATUSEHAT, Penanggulangan Penyakit, Farmasi dan Alat Kesehatan, Kebijakan Kesehatan, Pelayanan Kesehatan Rujukan, Sertifikasi Kesehatan, dan Data Informasi Kesehatan.",
                },
              },
            ],
          }),
        }}
      />

      <main role="main" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Beranda - Kementerian Kesehatan RI" />
        <meta
          itemProp="description"
          content="Portal resmi Kementerian Kesehatan RI untuk layanan publik dan informasi kesehatan masyarakat Indonesia"
        />
        <meta itemProp="url" content="https://kemkes-next.vercel.app" />

        <TopBar />
        <Navbar />
        <MarqueeBar />
        <HeroSection />

        <MainContentSection />
        <MediaFotoSection />
        <LayananSection />
        <InovasiKesehatanSection />
        <LayananDigitalSection />
        

        <Footer />
      </main>
    </>
  );
}