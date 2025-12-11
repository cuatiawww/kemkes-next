# Layout Components

Komponen layout reusable untuk halaman dengan sidebar kanan yang sticky.

## PageLayout

Layout utama dengan kolom kiri (konten utama yang scrollable) dan kolom kanan (sidebar yang sticky).

### Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `children` | ReactNode | - | Konten utama (sisi kiri) |
| `sidebar` | ReactNode | - | Konten sidebar (sisi kanan) |
| `className` | string | "" | Custom className untuk container |
| `mainClassName` | string | "" | Custom className untuk konten utama |
| `sidebarClassName` | string | "" | Custom className untuk sidebar |

### Rasio Layout
- **Desktop**: Main content 75% (9 kolom) / Sidebar 25% (3 kolom)
- **Mobile**: Full width, sidebar di bawah konten

### Contoh Penggunaan

```tsx
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";

export default function MyPage() {
  return (
    <PageLayout sidebar={<RightSidebar />}>
      {/* Konten utama di sini */}
      <div>
        <h1>Main Content</h1>
      </div>
    </PageLayout>
  );
}
```

## RightSidebar

Komponen sidebar kanan yang reusable dengan konten default (Pengumuman, Social Media, Kalender).

### Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `showAnnouncements` | boolean | true | Tampilkan bagian pengumuman |
| `showSocialMedia` | boolean | true | Tampilkan bagian social media |
| `showCalendar` | boolean | true | Tampilkan kalender kesehatan |
| `customContent` | ReactNode | - | Konten custom tambahan |
| `className` | string | "" | Custom className |

### Contoh Penggunaan

#### Default (semua konten ditampilkan)
```tsx
<RightSidebar />
```

#### Custom - hanya tampilkan pengumuman dan kalender
```tsx
<RightSidebar
  showSocialMedia={false}
/>
```

#### Dengan konten custom
```tsx
<RightSidebar
  customContent={
    <div>
      <h3>Konten Custom</h3>
      <p>Tambahan konten di sidebar</p>
    </div>
  }
/>
```

## Contoh Lengkap

### Halaman dengan Layout Default

```tsx
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import MarqueeBar from "@/components/layout/MarqueeBar";
import Footer from "@/components/layout/Footer";
import { SmallBanner } from "@/components/common/Banner";
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";

export default function MyPage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <MarqueeBar />

      <SmallBanner
        image="/hero.webp"
        title="JUDUL HALAMAN"
        description="Deskripsi halaman"
        height="350px"
      />

      <PageLayout sidebar={<RightSidebar />}>
        {/* Konten utama */}
        <div className="space-y-8">
          <h1>Konten Halaman</h1>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </PageLayout>

      <Footer />
    </main>
  );
}
```

### Halaman dengan Custom Sidebar

```tsx
<PageLayout
  sidebar={
    <RightSidebar
      showAnnouncements={true}
      showSocialMedia={false}
      showCalendar={true}
      customContent={
        <div className="bg-white p-4 rounded-xl">
          <h3>Widget Custom</h3>
        </div>
      }
    />
  }
  mainClassName="space-y-6"
>
  {/* Konten utama */}
</PageLayout>
```

## Halaman yang Sudah Menggunakan Layout Ini

1. `/transformasi` - Halaman Transformasi Kesehatan
2. `/mediadownload` - Halaman Media Download
3. `/rilis` - Halaman Rilis Kementerian Kesehatan

## Custom Ratio Layout

Jika Anda membutuhkan ratio yang berbeda (misal 80-20 atau 70-30), gunakan `CustomRatioLayout`:

### Import

```tsx
import CustomRatioLayout, {
  Layout80_20,
  Layout75_25,
  Layout70_30,
  Layout66_33
} from "@/components/layout/CustomRatioLayout";
```

### Preset Layouts

#### Layout 80-20 (Main 80% / Sidebar 20%)
```tsx
<Layout80_20 sidebar={<RightSidebar />}>
  <YourContent />
</Layout80_20>
```

#### Layout 75-25 (Main 75% / Sidebar 25%) - DEFAULT
```tsx
<Layout75_25 sidebar={<RightSidebar />}>
  <YourContent />
</Layout75_25>
```

#### Layout 70-30 (Main 70% / Sidebar 30%)
```tsx
<Layout70_30 sidebar={<RightSidebar />}>
  <YourContent />
</Layout70_30>
```

#### Layout 66-33 (Main 66% / Sidebar 33%)
```tsx
<Layout66_33 sidebar={<RightSidebar />}>
  <YourContent />
</Layout66_33>
```

### Custom Ratio (Manual)

```tsx
<CustomRatioLayout
  mainColumns={10}  // 10/12 = 83%
  sidebarColumns={2} // 2/12 = 17%
  sidebar={<RightSidebar />}
>
  <YourContent />
</CustomRatioLayout>
```

## Notes

- Sidebar akan otomatis menjadi sticky di desktop (lg breakpoint)
- Di mobile, sidebar akan muncul di bawah konten utama
- Layout menggunakan grid system Tailwind CSS dengan 12 kolom
- Background default adalah `bg-gray-100`
- Total kolom (mainColumns + sidebarColumns) tidak boleh lebih dari 12
