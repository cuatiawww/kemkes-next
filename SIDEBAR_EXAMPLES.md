# 🎯 Contoh Sidebar untuk Berbagai Halaman

## Copy-Paste Ready Examples

---

## 1. **Halaman Berita/Rilis** (Full Sidebar)

```tsx
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";

export default function NewsPage() {
  return (
    <PageLayout sidebar={<RightSidebar showRilis={true} />}>
      {/* Konten berita */}
    </PageLayout>
  );
}
```

**Sidebar:**
- ✅ Pengumuman
- ✅ Rilis Kesehatan
- ✅ Social Media
- ✅ Kalender

---

## 2. **Halaman Profil/Account** (Minimal)

```tsx
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={false}
      showCalendar={false}
    />
  }
>
  {/* Konten profil */}
</PageLayout>
```

**Sidebar:**
- ✅ Pengumuman
- ✅ Social Media

---

## 3. **Halaman Event/Agenda** (Focus Calendar)

```tsx
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={false}
      showSocialMedia={false}
    />
  }
>
  {/* Konten event */}
</PageLayout>
```

**Sidebar:**
- ✅ Pengumuman
- ✅ Kalender

---

## 4. **Halaman Artikel Detail** (No Calendar)

```tsx
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={true}
      showCalendar={false}
    />
  }
>
  {/* Konten artikel detail */}
</PageLayout>
```

**Sidebar:**
- ✅ Pengumuman
- ✅ Rilis Kesehatan
- ✅ Social Media

---

## 5. **Halaman Contact/FAQ** (Info Only)

```tsx
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={false}
      showSocialMedia={false}
    />
  }
>
  {/* Konten contact/FAQ */}
</PageLayout>
```

**Sidebar:**
- ✅ Pengumuman
- ✅ Kalender

---

## 6. **Halaman dengan Custom Widget**

```tsx
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={true}
      customContent={
        <div className="p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-xl">
          <h3 className="font-bold mb-2">Hotline Darurat</h3>
          <p className="text-2xl font-bold">119</p>
          <p className="text-sm opacity-90">Layanan 24/7</p>
        </div>
      }
    />
  }
>
  {/* Konten */}
</PageLayout>
```

**Sidebar:**
- ✅ Pengumuman
- ✅ Rilis Kesehatan
- ✅ Social Media
- ✅ Kalender
- ✅ Hotline Widget (custom)

---

## 7. **Full Custom Sidebar**

```tsx
import PageLayout from "@/components/layout/PageLayout";
import {
  AnnouncementsSidebar,
  CalendarSidebar,
  RilisSidebar
} from "@/components/features/sidebar";

<PageLayout
  sidebar={
    <div className="space-y-6 md:space-y-8">
      {/* Custom order */}
      <CalendarSidebar />
      <RilisSidebar />
      <AnnouncementsSidebar />

      {/* Custom component */}
      <div className="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
        <h3 className="font-bold text-yellow-800 mb-2">⚠️ Peringatan</h3>
        <p className="text-sm text-yellow-700">
          Waspada demam berdarah di musim hujan
        </p>
      </div>
    </div>
  }
>
  {/* Konten */}
</PageLayout>
```

---

## 8. **Halaman Dashboard** (All + Stats)

```tsx
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={true}
      customContent={
        <>
          {/* Stats Card */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-primary text-white rounded-lg">
              <p className="text-xs opacity-90">Total Views</p>
              <p className="text-2xl font-bold">1.2K</p>
            </div>
            <div className="p-4 bg-secondary text-white rounded-lg">
              <p className="text-xs opacity-90">Downloads</p>
              <p className="text-2xl font-bold">856</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary hover:underline">→ Panduan</a></li>
              <li><a href="#" className="text-primary hover:underline">→ FAQ</a></li>
              <li><a href="#" className="text-primary hover:underline">→ Support</a></li>
            </ul>
          </div>
        </>
      }
    />
  }
>
  {/* Dashboard content */}
</PageLayout>
```

---

## 🎨 **Visual Reference**

### Default (No Rilis)
```
┌─────────────────┐
│  PENGUMUMAN     │
├─────────────────┤
│  SOCIAL MEDIA   │
├─────────────────┤
│  KALENDER       │
└─────────────────┘
```

### With Rilis
```
┌─────────────────┐
│  PENGUMUMAN     │
├─────────────────┤
│  RILIS          │
│  - Featured     │
│  - Related      │
├─────────────────┤
│  SOCIAL MEDIA   │
├─────────────────┤
│  KALENDER       │
└─────────────────┘
```

### Minimal (Profile)
```
┌─────────────────┐
│  PENGUMUMAN     │
├─────────────────┤
│  SOCIAL MEDIA   │
└─────────────────┘
```

### Custom with Widget
```
┌─────────────────┐
│  PENGUMUMAN     │
├─────────────────┤
│  RILIS          │
├─────────────────┤
│  SOCIAL MEDIA   │
├─────────────────┤
│  KALENDER       │
├─────────────────┤
│  CUSTOM WIDGET  │
└─────────────────┘
```

---

## 💡 **Tips Memilih Sidebar**

### Halaman **Informasi/Konten**
- ✅ Semua sidebar (termasuk Rilis)
- User butuh context & related info

### Halaman **Interaktif** (Form/Input)
- ❌ No Rilis, No Calendar
- ✅ Hanya Pengumuman & Social
- Fokus ke action, minimize distraction

### Halaman **Event/Agenda**
- ✅ Kalender (highlight)
- ✅ Pengumuman
- ❌ No Rilis, No Social

### Halaman **Detail** (Artikel/Media)
- ✅ Rilis (related content)
- ✅ Social Media (share)
- ❌ Calendar (not relevant)

---

## 🚀 **Quick Start**

1. Import components:
```tsx
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";
```

2. Pilih kombinasi:
```tsx
// Default
<RightSidebar />

// With Rilis
<RightSidebar showRilis={true} />

// Custom
<RightSidebar
  showRilis={false}
  showCalendar={false}
/>
```

3. Wrap content:
```tsx
<PageLayout sidebar={<RightSidebar />}>
  {/* Your content */}
</PageLayout>
```

Selesai! 🎉
