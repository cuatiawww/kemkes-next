# 📖 Panduan Custom Sidebar per Halaman

Dokumentasi lengkap untuk mengatur sidebar yang berbeda di setiap halaman.

## 🎯 Komponen Sidebar yang Tersedia

| Komponen | Default | Deskripsi |
|----------|---------|-----------|
| `showAnnouncements` | ✅ true | Sidebar pengumuman |
| `showRilis` | ❌ false | Sidebar rilis kesehatan (featured + artikel terkait) |
| `showSocialMedia` | ✅ true | Sidebar social media |
| `showCalendar` | ✅ true | Sidebar kalender kesehatan |
| `customContent` | - | Konten custom tambahan |

---

## 📚 Contoh Penggunaan per Halaman

### 1️⃣ **Halaman dengan SEMUA Sidebar**

```tsx
// Contoh: Halaman Utama / Dashboard
import PageLayout from "@/components/layout/PageLayout";
import RightSidebar from "@/components/layout/RightSidebar";

<PageLayout
  sidebar={
    <RightSidebar
      showAnnouncements={true}
      showRilis={true}
      showSocialMedia={true}
      showCalendar={true}
    />
  }
>
  {/* Content */}
</PageLayout>
```

---

### 2️⃣ **Halaman TANPA Kalender**

```tsx
// Contoh: Halaman Artikel/Berita
<PageLayout
  sidebar={
    <RightSidebar
      showAnnouncements={true}
      showRilis={true}
      showSocialMedia={true}
      showCalendar={false}  // ❌ Hide kalender
    />
  }
>
  {/* Content */}
</PageLayout>
```

---

### 3️⃣ **Halaman HANYA Rilis & Kalender**

```tsx
// Contoh: Halaman Rilis Khusus
<PageLayout
  sidebar={
    <RightSidebar
      showAnnouncements={false}  // ❌ Hide
      showRilis={true}           // ✅ Show
      showSocialMedia={false}    // ❌ Hide
      showCalendar={true}        // ✅ Show
    />
  }
>
  {/* Content */}
</PageLayout>
```

---

### 4️⃣ **Halaman TANPA Rilis**

```tsx
// Contoh: Halaman Profile/Settings
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={false}  // ❌ Hide rilis
      // Yang lain tetap default (true)
    />
  }
>
  {/* Content */}
</PageLayout>
```

---

### 5️⃣ **Halaman MINIMAL (Hanya Pengumuman)**

```tsx
// Contoh: Halaman Login/Register
<PageLayout
  sidebar={
    <RightSidebar
      showAnnouncements={true}
      showRilis={false}
      showSocialMedia={false}
      showCalendar={false}
    />
  }
>
  {/* Content */}
</PageLayout>
```

---

### 6️⃣ **Halaman dengan Custom Content**

```tsx
// Contoh: Halaman dengan widget tambahan
import { RilisSidebar } from "@/components/features/sidebar";

<PageLayout
  sidebar={
    <RightSidebar
      showAnnouncements={true}
      showCalendar={true}
      customContent={
        <div className="p-6 bg-white rounded-xl border border-gray-200">
          <h3 className="font-bold text-primary mb-3">Widget Custom</h3>
          <p className="text-sm text-gray-600">Konten custom Anda di sini</p>
        </div>
      }
    />
  }
>
  {/* Content */}
</PageLayout>
```

---

### 7️⃣ **Manual Composition (Full Custom)**

Jika Anda butuh kontrol penuh, tidak pakai `RightSidebar`:

```tsx
import PageLayout from "@/components/layout/PageLayout";
import {
  AnnouncementsSidebar,
  CalendarSidebar,
  RilisSidebar
} from "@/components/features/sidebar";
import SocialMediaSection from "@/components/features/news/SocialMediaSection";

<PageLayout
  sidebar={
    <div className="space-y-6 md:space-y-8">
      {/* Custom order & custom props */}
      <RilisSidebar
        title="BERITA TERKINI"
        description="Custom description"
      />
      <CalendarSidebar />
      <AnnouncementsSidebar
        showButton={false}
      />
      {/* Tidak pakai SocialMediaSection */}

      {/* Custom component */}
      <YourCustomComponent />
    </div>
  }
>
  {/* Content */}
</PageLayout>
```

---

## 🎨 **Contoh Implementasi Real**

### ✅ **Halaman Transformasi** (showRilis: true)

```tsx
// src/app/transformasi/page.tsx
<PageLayout
  sidebar={<RightSidebar showRilis={true} />}
  mainClassName="space-y-8 md:space-y-12"
>
  <TransformasiContent />
</PageLayout>
```

**Sidebar yang muncul:**
1. ✅ Pengumuman
2. ✅ Rilis Kesehatan
3. ✅ Social Media
4. ✅ Kalender

---

### ✅ **Halaman Media Download** (showRilis: true)

```tsx
// src/app/mediadownload/page.tsx
<PageLayout sidebar={<RightSidebar showRilis={true} />}>
  <MediaDownloadContent />
</PageLayout>
```

**Sidebar yang muncul:**
1. ✅ Pengumuman
2. ✅ Rilis Kesehatan
3. ✅ Social Media
4. ✅ Kalender

---

### ✅ **Halaman Profil** (Minimal - no Rilis, no Calendar)

```tsx
// src/app/profile/page.tsx
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={false}
      showCalendar={false}
    />
  }
>
  <ProfileContent />
</PageLayout>
```

**Sidebar yang muncul:**
1. ✅ Pengumuman
2. ✅ Social Media

---

### ✅ **Halaman FAQ** (Hanya Calendar & Announcements)

```tsx
// src/app/faq/page.tsx
<PageLayout
  sidebar={
    <RightSidebar
      showRilis={false}
      showSocialMedia={false}
    />
  }
>
  <FAQContent />
</PageLayout>
```

**Sidebar yang muncul:**
1. ✅ Pengumuman
2. ✅ Kalender

---

## 🔧 **Tips & Tricks**

### 1. **Default Behavior**
Jika tidak set props, default adalah:
```tsx
<RightSidebar />
// Sama dengan:
<RightSidebar
  showAnnouncements={true}
  showRilis={false}      // 👈 Default false!
  showSocialMedia={true}
  showCalendar={true}
/>
```

### 2. **Quick Toggle**
Cukup set yang mau di-hide:
```tsx
// Mau hide kalender aja
<RightSidebar showCalendar={false} />
// Yang lain tetap default (true)
```

### 3. **Custom Props untuk Komponen**
Setiap sidebar component punya props sendiri:
```tsx
// Manual composition untuk custom props
<div className="space-y-6">
  <AnnouncementsSidebar
    title="BERITA TERBARU"
    showButton={false}
  />
  <CalendarSidebar
    title="EVENT KESEHATAN"
  />
  <RilisSidebar
    featuredArticle={myCustomArticle}
  />
</div>
```

---

## 📋 **Checklist per Halaman**

### Homepage / Landing
- ✅ Pengumuman
- ✅ Rilis
- ✅ Social Media
- ✅ Kalender

### Halaman Artikel/Berita
- ✅ Pengumuman
- ✅ Rilis
- ✅ Social Media
- ❌ Kalender (optional)

### Halaman Media Download
- ✅ Pengumuman
- ✅ Rilis
- ✅ Social Media
- ✅ Kalender

### Halaman Profile/Settings
- ✅ Pengumuman
- ❌ Rilis
- ✅ Social Media
- ❌ Kalender

### Halaman FAQ/Help
- ✅ Pengumuman
- ❌ Rilis
- ❌ Social Media
- ✅ Kalender

---

## 🚀 **Quick Reference**

```tsx
// Semua sidebar
<RightSidebar showRilis={true} />

// Tanpa kalender
<RightSidebar showCalendar={false} />

// Hanya pengumuman & rilis
<RightSidebar
  showSocialMedia={false}
  showCalendar={false}
  showRilis={true}
/>

// Minimal (pengumuman only)
<RightSidebar
  showRilis={false}
  showSocialMedia={false}
  showCalendar={false}
/>

// Full custom
<PageLayout sidebar={<YourCustomSidebar />}>
```

---

## 💡 **Pro Tips**

1. **Consistency**: Gunakan kombinasi yang konsisten untuk halaman sejenis
2. **Performance**: Hide yang tidak perlu untuk improve loading time
3. **Mobile**: Semua sidebar otomatis responsive (stack di mobile)
4. **Sticky**: Sidebar otomatis sticky di desktop
5. **Spacing**: Gap antar komponen sudah di-set (6-8)

---

Dengan panduan ini, Anda bisa custom sidebar sesuai kebutuhan setiap halaman! 🎉
