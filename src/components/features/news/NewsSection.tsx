import SectionHeader from "@/components/common/SectionHeader";
import { ArticleCard } from "@/components/common/Card";

const rilisData = {
  featured: {
    id: 1,
    image: "/rilis_1.webp",
    title: "Pelayanan Kesehatan untuk Masyarakat Daerah Terpencil",
    date: "10 Nov 2025",
  },
  items: [
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
  ],
};

export default function NewsSection() {
  return (
    <div className="h-full flex flex-col">
      <SectionHeader
        title="RILIS KEMENTERIAN KESEHATAN"
        description="Informasi resmi dan terkini dari Kementerian Kesehatan RI mengenai kebijakan serta perkembangan isu kesehatan nasional."
        buttonText="Lihat Lainnya"
      />

      {/* Featured Article */}
      <ArticleCard
        image={rilisData.featured.image}
        title={rilisData.featured.title}
        date={rilisData.featured.date}
        variant="featured"
        className="mb-3 md:mb-4 flex-grow"
      />

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-12 lg:mt-16">
        {rilisData.items.map((item) => (
          <ArticleCard
            key={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            variant="default"
          />
        ))}
      </div>
    </div>
  );
}

// Re-export sidebar components for backward compatibility
export { default as AnnouncementsSidebar } from "@/components/features/sidebar/AnnouncementsSidebar";
export { default as CalendarHealthCard } from "@/components/features/sidebar/CalendarSidebar";