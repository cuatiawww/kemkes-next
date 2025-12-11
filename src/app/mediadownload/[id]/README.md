# Media Download Detail Page

Halaman detail untuk media download dengan informasi lengkap dan tombol aksi.

## 📁 Route
`/mediadownload/[id]`

## 🎯 Features

### Main Content (Left - 75%)

1. **Breadcrumb Navigation**
   - Link kembali ke halaman media download
   - Current page indicator

2. **Image Preview**
   - Gambar besar dengan aspect ratio 16:9
   - Object-fit: contain untuk preview yang jelas

3. **Header Section**
   - Category & Type badges
   - Title (H1)
   - Meta info: Publish date, Downloads count, File type & size

4. **Description Section**
   - Full description dengan support multi-paragraph
   - Prose styling untuk readability

5. **Tags**
   - Clickable tag pills
   - Hover effects

6. **Author Information**
   - Publisher info dalam card
   - Icon & nama institusi

7. **Action Buttons**
   - **Unduh File** (Primary) - Download functionality
   - **Bagikan** - Share via Web Share API
   - **Print** - Print document

8. **Info Card**
   - Additional information tentang usage rights
   - Blue background untuk highlight

### Sidebar (Right - 25%)
- RightSidebar dengan:
  - Pengumuman
  - Rilis Kesehatan (**showRilis={true}**)
  - Social Media
  - Kalender Kesehatan

## 📊 Data Structure

```typescript
interface MediaDetail {
  id: number;
  title: string;
  category: string;
  type: string;
  image: string;
  description: string;        // Short description
  fullDescription: string;    // Full description (multi-paragraph)
  publishDate: string;
  fileSize: string;
  fileType: string;
  downloads: number;
  author: string;
  tags: string[];
}
```

## 🎨 Design Elements

### Colors
- Primary: Kementerian Kesehatan brand color
- Info card: Blue-50 background
- Badges: Primary & Primary/10

### Typography
- Title: 2xl-3xl, bold
- Section headers: lg-xl, bold
- Body text: base, regular
- Meta info: sm-xs, gray-600

### Spacing
- Section gap: 6 (24px)
- Card padding: 6-8 (24-32px)
- Button gap: 3 (12px)

### Interactive Elements
- Hover effects pada cards
- Transition animations
- Group hover untuk image zoom

## 🔗 Navigation

### From Media Download List
Card di halaman media download sekarang clickable:
- Hover: Scale image, change title color
- Click: Navigate to `/mediadownload/[id]`
- "Lihat Detail" button dengan arrow

### Back Navigation
- Breadcrumb link ke `/mediadownload`
- Browser back button

## 🚀 Future Enhancements

### Recommended Additions:

1. **Related Media**
   - Section untuk media terkait
   - Based on category atau tags

2. **Preview Modal**
   - Lightbox untuk image preview
   - PDF preview jika applicable

3. **Download Analytics**
   - Track download count
   - Popular downloads indicator

4. **Comments/Reviews**
   - User feedback section
   - Rating system

5. **Version History**
   - Jika media ada update
   - Download previous versions

6. **Multiple File Formats**
   - Download dalam berbagai format
   - PDF, DOCX, PNG, etc.

7. **QR Code**
   - Generate QR untuk quick share
   - Mobile-friendly download

8. **Bookmark/Favorite**
   - Save to favorites
   - User collection

## 💡 Usage Examples

### Basic Usage
```tsx
// URL: /mediadownload/1
// Automatically loads media with id=1
```

### Custom Data Source
Update `mediaDetailData` object atau fetch dari API:

```tsx
// Fetch from API
const media = await fetch(`/api/media/${id}`).then(res => res.json());
```

### Custom Actions
```tsx
const handleDownload = async () => {
  // Your download logic
  const response = await fetch(`/api/download/${media.id}`);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${media.title}.${media.fileType.toLowerCase()}`;
  a.click();
};
```

## 📱 Responsive Behavior

### Desktop (≥1024px)
- 2-column layout (75-25)
- Sidebar sticky
- Full image display

### Tablet (768px-1023px)
- 2-column layout
- Reduced padding
- Sidebar scrollable

### Mobile (<768px)
- Single column
- Sidebar below content
- Stacked buttons
- Smaller images & text

## ♿ Accessibility

- Semantic HTML structure
- Alt text untuk images
- ARIA labels untuk icons
- Keyboard navigation support
- Focus states pada interactive elements
- Color contrast compliance

## 🔧 Maintenance Notes

- Update `mediaDetailData` dengan actual data source
- Implement actual download functionality
- Add error handling untuk invalid IDs
- Add loading states
- Add 404 page untuk media not found
