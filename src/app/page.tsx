import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/hero/HeroSection";
import NewsSection from "@/components/features/news/NewsSection";
import { AnnouncementsSidebar } from "@/components/features/news/NewsSection";
import SocialMediaSection from "@/components/features/news/SocialMediaSection";
import MediaSection from "@/components/features/media/MediaSection";
import ServicesSection from "@/components/features/services/ServicesSection";
import InnovationSection from "@/components/features/innovation/InnovationSection";
import DigitalServicesSection from "@/components/features/services/DigitalServicesSection";
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

        {/* News & Announcements Section */}
        <section className="py-8 md:py-16 lg:py-20 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Left Column - News/Rilis */}
              <div className="lg:col-span-2">
                <NewsSection />
              </div>

              {/* Right Column - Announcements & Social Media */}
              <div className="lg:col-span-1 space-y-6 md:space-y-8">
                <AnnouncementsSidebar />
                <SocialMediaSection />
              </div>
            </div>
          </div>
        </section>

        <MediaSection />
        <ServicesSection />
        <InnovationSection />
        <DigitalServicesSection />

        <Footer />
      </main>
    </>
  );
}