# Sidebar Components

Komponen-komponen sidebar yang reusable untuk ditampilkan di sisi kanan halaman.

## 📋 Daftar Komponen

1. **AnnouncementsSidebar** - Sidebar pengumuman
2. **CalendarSidebar** - Sidebar kalender kesehatan
3. **RilisSidebar** - Sidebar rilis dengan featured article
4. **SocialMediaSection** - Sidebar media sosial (ada di folder news)

---

## 1. AnnouncementsSidebar

Menampilkan daftar pengumuman dengan badge "NEW" opsional.

### Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `title` | string | "PENGUMUMAN" | Judul section |
| `description` | string | Default text | Deskripsi section |
| `items` | AnnouncementItem[] | defaultData | Array pengumuman |
| `showButton` | boolean | true | Tampilkan tombol "Lihat Lainnya" |
| `buttonText` | string | "Lihat Lainnya" | Text tombol |
| `onButtonClick` | () => void | - | Handler tombol |
| `className` | string | "" | Custom className |

### AnnouncementItem Interface

```typescript
interface AnnouncementItem {
  id: number;
  image: string;
  title: string;
  date: string;
  isNew?: boolean; // Tampilkan badge "NEW"
}
```

### Contoh Penggunaan

#### Basic
```tsx
import { AnnouncementsSidebar } from "@/components/features/sidebar";

<AnnouncementsSidebar />
```

#### Custom Data
```tsx
const customAnnouncements = [
  {
    id: 1,
    image: "/announcement1.jpg",
    title: "Pengumuman Penting",
    date: "10 Januari 2026",
    isNew: true,
  },
  // ...
];

<AnnouncementsSidebar
  title="BERITA TERBARU"
  items={customAnnouncements}
  onButtonClick={() => router.push('/announcements')}
/>
```

---

## 2. CalendarSidebar

Menampilkan kalender dengan event kesehatan.

### Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `title` | string | "KALENDER KESEHATAN" | Judul section |
| `description` | string | Default text | Deskripsi section |
| `events` | HealthEvent[] | defaultEvents | Array event |
| `className` | string | "" | Custom className |

### HealthEvent Interface

```typescript
interface HealthEvent {
  date: number;        // Tanggal (1-31)
  month: number;       // Bulan (0-11, 0=Januari)
  year: number;        // Tahun
  title: string;       // Nama event
  color: string;       // Tailwind class (eg: "bg-primary")
}
```

### Contoh Penggunaan

#### Basic
```tsx
import { CalendarSidebar } from "@/components/features/sidebar";

<CalendarSidebar />
```

#### Custom Events
```tsx
const myEvents = [
  {
    date: 15,
    month: 0, // Januari
    year: 2026,
    title: "Hari Kesehatan Mental",
    color: "bg-primary"
  },
  // ...
];

<CalendarSidebar events={myEvents} />
```

---

## 3. RilisSidebar

Menampilkan 1 featured article besar + beberapa artikel terkait.

### Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `title` | string | "RILIS KEMENTERIAN KESEHATAN" | Judul section |
| `description` | string | Default text | Deskripsi section |
| `featuredArticle` | RilisItem | defaultData | Artikel utama |
| `relatedArticles` | RilisItem[] | defaultData | Artikel terkait |
| `className` | string | "" | Custom className |

### RilisItem Interface

```typescript
interface RilisItem {
  id: number;
  image: string;
  title: string;
  date: string;
}
```

### Contoh Penggunaan

#### Basic
```tsx
import { RilisSidebar } from "@/components/features/sidebar";

<RilisSidebar />
```

#### Custom Data
```tsx
const featured = {
  id: 1,
  image: "/featured.jpg",
  title: "Artikel Utama",
  date: "15 Jan 2026"
};

const related = [
  {
    id: 2,
    image: "/article1.jpg",
    title: "Artikel Terkait 1",
    date: "14 Jan 2026"
  },
  // ...
];

<RilisSidebar
  featuredArticle={featured}
  relatedArticles={related}
/>
```

---

## Penggunaan dengan RightSidebar

### Default (Announcements + Social Media + Calendar)
```tsx
import RightSidebar from "@/components/layout/RightSidebar";

<RightSidebar />
```

### Dengan Rilis Sidebar
```tsx
<RightSidebar
  showRilis={true}
  showAnnouncements={false}
/>
```

### Custom Mix
```tsx
<RightSidebar
  showAnnouncements={true}
  showRilis={true}
  showSocialMedia={false}
  showCalendar={true}
/>
```

### Manual Composition
```tsx
import {
  AnnouncementsSidebar,
  CalendarSidebar,
  RilisSidebar
} from "@/components/features/sidebar";

<div className="space-y-6">
  <RilisSidebar />
  <AnnouncementsSidebar />
  <CalendarSidebar />
</div>
```

---

## Styling & Customization

Semua komponen menggunakan:
- Tailwind CSS untuk styling
- Card component dari `@/components/ui/card`
- Responsive breakpoints (mobile → desktop)
- Consistent spacing (gap-6 md:gap-8)

## Backward Compatibility

Komponen ini juga di-export dari `NewsSection.tsx` untuk backward compatibility:

```tsx
// Cara lama (masih berfungsi)
import { AnnouncementsSidebar, CalendarHealthCard } from "@/components/features/news/NewsSection";

// Cara baru (recommended)
import { AnnouncementsSidebar, CalendarSidebar } from "@/components/features/sidebar";
```

---

## Tips

1. **Data Loading**: Komponen menggunakan data default, ideal untuk prototyping. Untuk production, pass data dari API.
2. **Event Handlers**: Gunakan `onButtonClick` untuk navigasi atau fetch data.
3. **Responsive**: Semua komponen sudah responsive, tidak perlu custom breakpoints.
4. **Accessibility**: Semua image memiliki alt text, gunakan semantic HTML.
