import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kemkes.go.id"),
  title: {
    default: "Kemenkes RI - Generasi Sehat, Masa Depan Hebat",
    template: "%s | Kemenkes RI",
  },
  description:
    "Kementerian Kesehatan Republik Indonesia - Portal resmi informasi kesehatan, layanan publik, program kesehatan nasional, dan inovasi kesehatan berbasis AI untuk Indonesia yang lebih sehat.",
  keywords: [
    "Kementerian Kesehatan",
    "Kemenkes",
    "Kesehatan Indonesia",
    "Layanan Kesehatan",
    "Program Kesehatan",
    "Healthcare Indonesia",
    "AI Healthcare",
    "Indonesia Healthcare AI Hackathon",
    "Inovasi Kesehatan",
    "Pelayanan Kesehatan",
  ],
  authors: [{ name: "Kementerian Kesehatan Republik Indonesia" }],
  creator: "Kementerian Kesehatan Republik Indonesia",
  publisher: "Kementerian Kesehatan Republik Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kemkes.go.id",
    title: "Kemenkes RI - Generasi Sehat, Masa Depan Hebat",
    description:
      "Portal resmi Kementerian Kesehatan Republik Indonesia - Informasi kesehatan, layanan publik, dan program kesehatan nasional.",
    siteName: "Kementerian Kesehatan RI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kementerian Kesehatan Republik Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemenkes RI - Generasi Sehat, Masa Depan Hebat",
    description:
      "Portal resmi Kementerian Kesehatan Republik Indonesia - Informasi kesehatan, layanan publik, dan program kesehatan nasional.",
    images: ["/twitter-image.jpg"],
    creator: "@KemenkesRI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://kemkes.go.id",
    languages: {
      "id-ID": "https://kemkes.go.id",
      "en-US": "https://kemkes.go.id/en",
    },
  },
  category: "Health & Government",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#047D78" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kemenkes RI" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Kementerian Kesehatan Republik Indonesia",
              alternateName: "Kemenkes RI",
              url: "https://kemkes.go.id",
              logo: "https://kemkes.go.id/logo.png",
              description:
                "Kementerian Kesehatan Republik Indonesia bertanggung jawab atas kesehatan masyarakat Indonesia",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. HR. Rasuna Said Blok X5 Kav. 4-9",
                addressLocality: "Jakarta Selatan",
                addressRegion: "DKI Jakarta",
                postalCode: "12950",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-21-5201590",
                contactType: "Customer Service",
                areaServed: "ID",
                availableLanguage: ["Indonesian", "English"],
              },
              sameAs: [
                "https://www.facebook.com/KemenkesRI",
                "https://twitter.com/KemenkesRI",
                "https://www.instagram.com/kemenkes_ri",
                "https://www.youtube.com/KementerianKesehatanRI",
              ],
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kementerian Kesehatan Republik Indonesia",
              url: "https://kemkes.go.id",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://kemkes.go.id/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}