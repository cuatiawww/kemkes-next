import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  className?: string;
  mainClassName?: string;
  sidebarClassName?: string;
}

/**
 * Layout component untuk halaman dengan sidebar kanan yang sticky
 * @param children - Konten utama (sisi kiri yang scrollable)
 * @param sidebar - Konten sidebar (sisi kanan yang sticky)
 * @param className - Custom className untuk container
 * @param mainClassName - Custom className untuk konten utama
 * @param sidebarClassName - Custom className untuk sidebar
 */
export default function PageLayout({
  children,
  sidebar,
  className = "",
  mainClassName = "",
  sidebarClassName = "",
}: PageLayoutProps) {
  return (
    <section className={`py-8 md:py-16 lg:py-20 bg-gray-100 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column - Main Content (Scrollable) - 80% */}
          <div className={`lg:col-span-9 ${mainClassName}`}>
            {children}
          </div>

          {/* Right Column - Sidebar (Sticky) - 20% */}
          {sidebar && (
            <div className={`lg:col-span-3 ${sidebarClassName}`}>
              <div className="lg:sticky lg:top-6 space-y-6 md:space-y-8">
                {sidebar}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
