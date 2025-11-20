import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MainContentSection from "@/components/sections/MainContentSection";
import LayananSection from "@/components/sections/LayananSection";
import InovasiKesehatanSection from "@/components/sections/InovasiKesehatanSection";
import LayananDigitalSection from "@/components/sections/LayananDigitalSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Selamat kepada tim terpilih di Grand Final Indonesia Healthcare AI Hackathon 2025. Tim terpilih yang berhasil menghadirkan ide dan solusi layanan kesehatan berbasis AI untuk Indonesia.",
  openGraph: {
    title: "Indonesia Healthcare AI Hackathon 2025 - Kemenkes RI",
    description:
      "Selamat kepada tim terpilih di Grand Final Indonesia Healthcare AI Hackathon 2025",
    images: ["/og-hackathon.jpg"],
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Event */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Indonesia Healthcare AI Hackathon 2025 - Grand Final",
            description:
              "Kompetisi inovasi kesehatan berbasis kecerdasan buatan untuk meningkatkan layanan kesehatan di Indonesia",
            startDate: "2025-03-15",
            endDate: "2025-03-17",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Kementerian Kesehatan RI",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. HR. Rasuna Said Blok X5 Kav. 4-9",
                addressLocality: "Jakarta Selatan",
                addressRegion: "DKI Jakarta",
                postalCode: "12950",
                addressCountry: "ID",
              },
            },
            organizer: {
              "@type": "GovernmentOrganization",
              name: "Kementerian Kesehatan Republik Indonesia",
              url: "https://kemkes.go.id",
            },
            image: ["https://kemkes.go.id/event-hackathon-2025.jpg"],
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
                item: "https://kemkes.go.id",
              },
            ],
          }),
        }}
      />

      <main role="main" itemScope itemType="https://schema.org/WebPage">
        <TopBar />
        <Navbar />
        <MarqueeBar />

        <article itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="Indonesia Healthcare AI Hackathon 2025 Grand Final" />
          <meta
            itemProp="description"
            content="Selamat kepada tim terpilih di Grand Final Indonesia Healthcare AI Hackathon 2025"
          />
          <meta itemProp="datePublished" content="2025-01-15" />
          <meta itemProp="author" content="Kementerian Kesehatan RI" />
          
          <HeroSection />
        </article>

        <MainContentSection />
        <LayananSection />
        <InovasiKesehatanSection />
        <LayananDigitalSection />

        <Footer />
      </main>
    </>
  );
}