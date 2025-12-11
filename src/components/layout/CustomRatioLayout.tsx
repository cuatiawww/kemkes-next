import { ReactNode } from "react";

interface CustomRatioLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  mainColumns?: number; // Jumlah kolom untuk konten utama (dari 12)
  sidebarColumns?: number; // Jumlah kolom untuk sidebar (dari 12)
  className?: string;
  mainClassName?: string;
  sidebarClassName?: string;
  stickyTop?: string; // Custom sticky top position
}

/**
 * Layout component dengan custom ratio yang fleksibel
 * @param children - Konten utama (sisi kiri yang scrollable)
 * @param sidebar - Konten sidebar (sisi kanan yang sticky)
 * @param mainColumns - Jumlah kolom untuk konten utama (default: 9 = 75%)
 * @param sidebarColumns - Jumlah kolom untuk sidebar (default: 3 = 25%)
 * @param className - Custom className untuk container
 * @param mainClassName - Custom className untuk konten utama
 * @param sidebarClassName - Custom className untuk sidebar
 * @param stickyTop - Custom sticky top position (default: "top-6")
 *
 * @example
 * // Layout 80-20
 * <CustomRatioLayout mainColumns={10} sidebarColumns={2} sidebar={<Sidebar />}>
 *   <Content />
 * </CustomRatioLayout>
 *
 * @example
 * // Layout 70-30
 * <CustomRatioLayout mainColumns={8} sidebarColumns={4} sidebar={<Sidebar />}>
 *   <Content />
 * </CustomRatioLayout>
 *
 * @example
 * // Layout 66-33 (default 2:1)
 * <CustomRatioLayout mainColumns={8} sidebarColumns={4} sidebar={<Sidebar />}>
 *   <Content />
 * </CustomRatioLayout>
 */
export default function CustomRatioLayout({
  children,
  sidebar,
  mainColumns = 9,
  sidebarColumns = 3,
  className = "",
  mainClassName = "",
  sidebarClassName = "",
  stickyTop = "top-6",
}: CustomRatioLayoutProps) {
  // Validasi total kolom tidak boleh lebih dari 12
  const totalColumns = mainColumns + sidebarColumns;
  if (totalColumns > 12) {
    console.warn(
      `Total columns (${totalColumns}) exceeds 12. Using default ratio (9:3).`
    );
    mainColumns = 9;
    sidebarColumns = 3;
  }

  return (
    <section className={`py-8 md:py-16 lg:py-20 bg-gray-100 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column - Main Content (Scrollable) */}
          <div className={`lg:col-span-${mainColumns} ${mainClassName}`}>
            {children}
          </div>

          {/* Right Column - Sidebar (Sticky) */}
          {sidebar && (
            <div className={`lg:col-span-${sidebarColumns} ${sidebarClassName}`}>
              <div className={`lg:sticky lg:${stickyTop} space-y-6 md:space-y-8`}>
                {sidebar}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Preset ratio layouts untuk kemudahan penggunaan
 */

interface PresetLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  className?: string;
  mainClassName?: string;
  sidebarClassName?: string;
}

/**
 * Layout dengan ratio 80-20 (konten utama 80%, sidebar 20%)
 */
export function Layout80_20({
  children,
  sidebar,
  className = "",
  mainClassName = "",
  sidebarClassName = "",
}: PresetLayoutProps) {
  return (
    <CustomRatioLayout
      mainColumns={10}
      sidebarColumns={2}
      sidebar={sidebar}
      className={className}
      mainClassName={mainClassName}
      sidebarClassName={sidebarClassName}
    >
      {children}
    </CustomRatioLayout>
  );
}

/**
 * Layout dengan ratio 75-25 (konten utama 75%, sidebar 25%) - DEFAULT
 */
export function Layout75_25({
  children,
  sidebar,
  className = "",
  mainClassName = "",
  sidebarClassName = "",
}: PresetLayoutProps) {
  return (
    <CustomRatioLayout
      mainColumns={9}
      sidebarColumns={3}
      sidebar={sidebar}
      className={className}
      mainClassName={mainClassName}
      sidebarClassName={sidebarClassName}
    >
      {children}
    </CustomRatioLayout>
  );
}

/**
 * Layout dengan ratio 70-30 (konten utama 70%, sidebar 30%)
 */
export function Layout70_30({
  children,
  sidebar,
  className = "",
  mainClassName = "",
  sidebarClassName = "",
}: PresetLayoutProps) {
  return (
    <CustomRatioLayout
      mainColumns={8}
      sidebarColumns={4}
      sidebar={sidebar}
      className={className}
      mainClassName={mainClassName}
      sidebarClassName={sidebarClassName}
    >
      {children}
    </CustomRatioLayout>
  );
}

/**
 * Layout dengan ratio 66-33 (konten utama 66%, sidebar 33%)
 */
export function Layout66_33({
  children,
  sidebar,
  className = "",
  mainClassName = "",
  sidebarClassName = "",
}: PresetLayoutProps) {
  return (
    <CustomRatioLayout
      mainColumns={8}
      sidebarColumns={4}
      sidebar={sidebar}
      className={className}
      mainClassName={mainClassName}
      sidebarClassName={sidebarClassName}
    >
      {children}
    </CustomRatioLayout>
  );
}
