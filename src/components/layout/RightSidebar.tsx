import { ReactNode } from "react";
import { AnnouncementsSidebar, CalendarSidebar, RilisSidebar } from "@/components/features/sidebar";
import SocialMediaSection from "@/components/features/news/SocialMediaSection";

interface RightSidebarProps {
  showAnnouncements?: boolean;
  showSocialMedia?: boolean;
  showCalendar?: boolean;
  showRilis?: boolean;
  customContent?: ReactNode;
  className?: string;
}

/**
 * Reusable sidebar kanan yang sticky
 * @param showAnnouncements - Tampilkan bagian pengumuman (default: true)
 * @param showSocialMedia - Tampilkan bagian social media (default: true)
 * @param showCalendar - Tampilkan kalender kesehatan (default: true)
 * @param showRilis - Tampilkan rilis kesehatan (default: false)
 * @param customContent - Konten custom tambahan
 * @param className - Custom className
 */
export default function RightSidebar({
  showAnnouncements = true,
  showSocialMedia = true,
  showCalendar = true,
  // showRilis = false,
  customContent,
  className = "",
}: RightSidebarProps) {
  return (
    <div className={`space-y-6 md:space-y-8 ${className}`}>
      {showAnnouncements && <AnnouncementsSidebar />}
     
      {showSocialMedia && <SocialMediaSection />}
      {showCalendar && <CalendarSidebar />}
       {/* {showRilis && <RilisSidebar />} */}
      {customContent}
    </div>
  );
}
