import { ArticleCard } from "@/components/common/Card";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/common/Button/button";
import Image from "next/image";

interface AnnouncementItem {
  id: number;
  image: string;
  title: string;
  date: string;
  isNew?: boolean;
}

interface AnnouncementsSidebarProps {
  title?: string;
  description?: string;
  items?: AnnouncementItem[];
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const defaultPengumumanData: AnnouncementItem[] = [
  {
    id: 1,
    image: "/img1.png",
    title: "Buku Panduan dan Logo HKN ke-61",
    date: "07 Januari 2026",
    isNew: true,
  },
  {
    id: 2,
    image: "/img2.png",
    title: "Selamat Kepada Tim Terpilih di Grand Final Indonesia Healthcare AI Hackathon 2025",
    date: "07 Januari 2026",
  },
  {
    id: 3,
    image: "/img3.png",
    title: "Bersama Lawan TB: RSUP Persahabatan Hadirkan i-ECHO Tuberkulosis 2025",
    date: "07 Januari 2026",
  },
];

/**
 * Sidebar Pengumuman yang reusable
 * @param title - Judul section (default: "PENGUMUMAN")
 * @param description - Deskripsi section
 * @param items - Array data pengumuman
 * @param showButton - Tampilkan tombol "Lihat Lainnya" (default: true)
 * @param buttonText - Text tombol (default: "Lihat Lainnya")
 * @param onButtonClick - Handler saat tombol diklik
 * @param className - Custom className
 */
export default function AnnouncementsSidebar({
  title = "PENGUMUMAN",
  description = "Informasi resmi terbaru terkait pemberitahuan, panduan, dan agenda penting dari Kementerian Kesehatan RI.",
  items = defaultPengumumanData,
  showButton = true,
  buttonText = "Lihat Lainnya",
  onButtonClick,
  className = "",
}: AnnouncementsSidebarProps) {
  return (
    <div className={className}>
      <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
        {title}
      </h3>
      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
        {description}
      </p>

      <Card className="border border-gray-200 bg-white rounded-xl md:rounded-2xl">
        <CardContent className="p-4 md:p-6 flex flex-col">
          <div className="space-y-0 flex-grow mb-4 md:mb-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`relative ${
                  index !== items.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <ArticleCard
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  variant="compact"
                />
                {item.isNew && (
                  <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 animate-blink">
                    <Image
                      src="/new.png"
                      alt="New"
                      width={48}
                      height={48}
                      className="w-8 h-8 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {showButton && (
            <Button variant="outline" className="w-full" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
