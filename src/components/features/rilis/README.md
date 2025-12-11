# Rilis Card Section

Komponen untuk menampilkan card berita/rilis dengan fitur sorting (Terbaru/Terlama).

## Features

- ✨ Card layout dengan gambar, judul, deskripsi, dan tanggal
- 🔄 Dropdown sorting (Terbaru/Terlama)
- 📱 Responsive design (1 kolom mobile, 2 kolom desktop)
- 🎨 Hover effects pada card
- ♻️ Reusable dan customizable

## Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `title` | string | "RILIS KEMENTERIAN KESEHATAN" | Judul section |
| `items` | RilisItem[] | defaultRilisData | Array data rilis |
| `itemsPerPage` | number | 4 | Jumlah item yang ditampilkan |
| `className` | string | "" | Custom className |

## RilisItem Interface

```typescript
interface RilisItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  dateTimestamp: number; // untuk sorting
}
```

## Contoh Penggunaan

### Basic Usage (dengan data default)

```tsx
import RilisCardSection from "@/components/features/rilis/RilisCardSection";

export default function RilisPage() {
  return (
    <div>
      <RilisCardSection />
    </div>
  );
}
```

### Custom Title dan Items Per Page

```tsx
<RilisCardSection
  title="BERITA KESEHATAN TERKINI"
  itemsPerPage={6}
/>
```

### Dengan Data Custom

```tsx
const customData = [
  {
    id: 1,
    image: "/news-1.jpg",
    title: "Judul Berita 1",
    description: "Deskripsi singkat berita...",
    date: "15 Januari 2026",
    dateTimestamp: new Date("2026-01-15").getTime(),
  },
  {
    id: 2,
    image: "/news-2.jpg",
    title: "Judul Berita 2",
    description: "Deskripsi singkat berita...",
    date: "14 Januari 2026",
    dateTimestamp: new Date("2026-01-14").getTime(),
  },
];

<RilisCardSection
  items={customData}
  itemsPerPage={6}
/>
```

### Penggunaan dengan PageLayout

```tsx
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";
import RilisCardSection from "@/components/features/rilis/RilisCardSection";

export default function RilisPage() {
  return (
    <PageLayout sidebar={<RightSidebar />}>
      <RilisCardSection />
    </PageLayout>
  );
}
```

## Styling

Komponen menggunakan:
- Tailwind CSS untuk styling
- Card component dari `@/components/ui/card`
- Responsive breakpoints (sm, md, lg)

## Grid Layout

- **Mobile**: 1 kolom
- **Desktop (md+)**: 2 kolom
- Gap: 4 (mobile) / 6 (desktop)

## Sorting Feature

User dapat memilih sorting berdasarkan:
- **Terbaru**: Item terbaru ditampilkan lebih dulu (default)
- **Terlama**: Item terlama ditampilkan lebih dulu

Sorting menggunakan `dateTimestamp` untuk akurasi pengurutan.

## Custom Styling

```tsx
<RilisCardSection
  className="my-8 px-4"
  title="CUSTOM TITLE"
/>
```

## Data Format

Pastikan data yang dimasukkan memiliki format yang benar:

```typescript
const rilisData: RilisItem[] = [
  {
    id: 1, // unique ID
    image: "/path/to/image.jpg", // path gambar
    title: "Judul berita", // judul berita
    description: "Deskripsi singkat...", // deskripsi (akan di-clamp 3 baris)
    date: "10 Januari 2026", // tanggal display format
    dateTimestamp: new Date("2026-01-10").getTime(), // timestamp untuk sorting
  },
];
```

## Tips

1. Gunakan `dateTimestamp` dengan format `new Date("YYYY-MM-DD").getTime()` untuk sorting yang akurat
2. Gambar sebaiknya dengan aspect ratio 16:9 untuk tampilan optimal
3. Deskripsi akan otomatis di-truncate setelah 3 baris (line-clamp-3)
4. Title akan otomatis di-truncate setelah 2 baris (line-clamp-2)
