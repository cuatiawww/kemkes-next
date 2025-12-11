import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import { SmallBanner } from "@/components/common/Banner";
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";
import RilisCardSection from "@/components/features/rilis/RilisCardSection";

export default function RilisPage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <MarqueeBar />

      <SmallBanner
        image="/hero.webp"
        title="RILIS KEMENTERIAN KESEHATAN"
        description="Informasi resmi dan terkini dari Kementerian Kesehatan RI mengenai kebijakan serta perkembangan isu kesehatan nasional."
        height="350px"
      />

      <PageLayout sidebar={<RightSidebar showRilis={true} />}>
        <RilisCardSection />
      </PageLayout>

      <Footer />
    </main>
  );
}
