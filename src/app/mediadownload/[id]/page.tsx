"use client";

import { useParams } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import { SmallBanner } from "@/components/common/Banner";
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/common/Button/button";
import Image from "next/image";

// Sample data - ini bisa diganti dengan fetch dari API
const mediaDetailData = {
  1: {
    id: 1,
    title: "Warta - Ringkasan 2.5 Tahun Pandemi Covid-19",
    category: "Media Cetak",
    type: "Media Publikasi",
    image: "/media-3.png",
    description: "Sekretaris Jenderal Kementerian Kesehatan Kunta Wibawa Dasa Nugraha menekankan pentingnya menghapus stigma terhadap penderita...",
    fullDescription: "Indonesia sebagai negara kepulauan dengan jumlah penduduk yang besar sangat memerlukan pelayanan kesehatan dan tenaga kesehatan yang kompeten dengan jumlah memadai. Fasilitas pelayanan kesehatan rujukan yang belum merata hingga ke pelosok daerah mengab salah satu faktor penyebab rendahnya akses kesehatan di negeri ini.\n\nDokumen ini berisi ringkasan lengkap mengenai penanganan pandemi COVID-19 di Indonesia selama 2.5 tahun, termasuk kebijakan, program vaksinasi, dan dampak sosial ekonomi yang ditimbulkan.",
    publishDate: "24 Januari 2023",
    fileSize: "2.5 MB",
    fileType: "PDF",
    downloads: 1413,
    author: "Kementerian Kesehatan RI",
    tags: ["COVID-19", "Pandemi", "Vaksinasi", "Kesehatan Masyarakat"],
  },
  // Tambahkan data lain sesuai kebutuhan
};

export default function MediaDownloadDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  // Get media detail berdasarkan ID
  const media = mediaDetailData[id as unknown as keyof typeof mediaDetailData] || mediaDetailData[1];

  const handleDownload = () => {
    // Logic untuk download file
    console.log("Downloading:", media.title);
    // Implement actual download logic here
  };

  const handleShare = () => {
    // Logic untuk share
    if (navigator.share) {
      navigator.share({
        title: media.title,
        text: media.description,
        url: window.location.href,
      });
    }
  };

  return (
    <main>
      <TopBar />
      <Navbar />
      <MarqueeBar />

      <SmallBanner
        image="/hero.webp"
        title="DETAIL MEDIA DOWNLOAD"
        description="Unduh berbagai materi edukasi, infografis, dan publikasi kesehatan dari Kementerian Kesehatan RI."
        height="350px"
      />

      <PageLayout sidebar={
        <RightSidebar
          showAnnouncements={true}
          showCalendar={true}
          showSocialMedia={false}
          showRilis={false}
        />
      }>
        <div className="space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/mediadownload" className="hover:text-primary transition-colors">
              Media Download
            </a>
            <span>/</span>
            <span className="text-gray-800 font-medium">{media.title}</span>
          </nav>

          {/* Main Card */}
          <Card className="border border-gray-200 bg-white rounded-xl md:rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Image Preview */}
              <div className="relative w-full aspect-video bg-gray-100">
                <Image
                  src={media.image}
                  alt={media.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Category Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                    {media.category}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                    {media.type}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {media.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{media.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    <span>{media.downloads} Downloads</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{media.fileType} - {media.fileSize}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                    Deskripsi
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {media.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                {media.tags && media.tags.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {media.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Info */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Dipublikasikan oleh</p>
                      <p className="font-semibold text-gray-800">{media.author}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    className="flex-1 sm:flex-none"
                    onClick={handleDownload}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    }
                  >
                    Unduh File
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    }
                  >
                    Bagikan
                  </Button>
                  <Button
                    variant="outline"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    }
                  >
                    Print
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info Card
          <Card className="border border-gray-200 bg-blue-50 rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Informasi Penting</h3>
                  <p className="text-sm text-gray-700">
                    Materi ini disediakan secara gratis untuk keperluan edukasi dan sosialisasi kesehatan.
                    Dilarang menggunakan untuk kepentingan komersial tanpa izin dari Kementerian Kesehatan RI.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </PageLayout>

      <Footer />
    </main>
  );
}
