import { Card, CardContent } from "@/components/ui/card";
import { ArticleCard } from "@/components/common/Card";
import Image from "next/image";

interface RilisItem {
  id: number;
  image: string;
  title: string;
  date: string;
}

interface RilisSidebarProps {
  title?: string;
  description?: string;
  featuredArticle?: RilisItem;
  relatedArticles?: RilisItem[];
  className?: string;
}

const defaultFeaturedArticle: RilisItem = {
  id: 1,
  image: "/rilis_1.webp",
  title: "Hapus Stigma, Dukung Penderita TBC untuk Sembuh",
  date: "193 + 203",
};

const defaultRelatedArticles: RilisItem[] = [
  {
    id: 2,
    image: "/rilis_2.webp",
    title: "Konsultasi Kesehatan di Fasilitas Kesehatan",
    date: "10 Nov 2025",
  },
  {
    id: 3,
    image: "/rilis_3.webp",
    title: "Program Vaksinasi Ibu dan Anak di Puskesmas",
    date: "09 Nov 2025",
  },
  {
    id: 4,
    image: "/rilis_4.webp",
    title: "Pemeriksaan Produk Farmasi Nasional",
    date: "08 Nov 2025",
  },
];

/**
 * Sidebar Rilis Kementerian Kesehatan yang reusable
 * Menampilkan 1 featured article besar + beberapa artikel terkait di bawahnya
 * @param title - Judul section (default: "RILIS KEMENTERIAN KESEHATAN")
 * @param description - Deskripsi section
 * @param featuredArticle - Artikel utama (featured)
 * @param relatedArticles - Artikel-artikel terkait
 * @param className - Custom className
 */
export default function RilisSidebar({
  title = "RILIS KEMENTERIAN KESEHATAN",
  description = "Sekretaris Jenderal Kementerian Kesehatan Kunta Wibawa Dasa Nugraha menekankan pentingnya menghapus stigma terhadap penderita...",
  featuredArticle = defaultFeaturedArticle,
  relatedArticles = defaultRelatedArticles,
  className = "",
}: RilisSidebarProps) {
  return (
    <div className={className}>
      <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
        {title}
      </h3>
      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
        {description}
      </p>

      <Card className="border border-gray-200 bg-white rounded-xl md:rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          {/* Featured Article - Large */}
          <div className="relative w-full aspect-video overflow-hidden group cursor-pointer">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h4 className="text-white text-sm md:text-base font-bold mb-1 line-clamp-2">
                {featuredArticle.title}
              </h4>
              <div className="flex items-center gap-1 text-xs text-white/90">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {featuredArticle.date}
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="p-4 md:p-6">
            <h5 className="text-sm md:text-base font-bold text-gray-800 mb-3 md:mb-4">
              Artikel Terkait
            </h5>
            <div className="space-y-0">
              {relatedArticles.map((item, index) => (
                <div
                  key={item.id}
                  className={`${
                    index !== relatedArticles.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <ArticleCard
                    image={item.image}
                    title={item.title}
                    date={item.date}
                    variant="compact"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
