/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
export default function Footer() {
  return (
    <footer 
      className="bg-primary text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1" itemScope itemType="https://schema.org/Organization">
            <a href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
               <div className="bg-white p-2 rounded-lg transform transition-transform group-hover:scale-110">
                <img
                  src="https://kemkes.go.id/image/images/logo_kemkes_jadi.png"
                  alt="Logo Kementerian Kesehatan RI"
                  className="h-10 w-auto"
                />
              </div>
              <div>
                
              </div>
            </a>
            <p className="text-sm opacity-80" itemProp="description">
              Kementerian Kesehatan Republik Indonesia
            </p>
            <meta itemProp="url" content="https://kemkes.go.id" />
          </div>

          {/* Quick Links */}
          <nav className="col-span-1" aria-labelledby="quick-links-heading">
            <h4 id="quick-links-heading" className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm" role="list">
              <li>
                <a 
                  href="/tentang" 
                  className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a 
                  href="/layanan" 
                  className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                >
                  Layanan Publik
                </a>
              </li>
              <li>
                <a 
                  href="/berita" 
                  className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                >
                  Berita
                </a>
              </li>
              <li>
                <a 
                  href="/kontak" 
                  className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="col-span-1 not-italic" itemScope itemType="https://schema.org/PostalAddress">
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm opacity-90" role="list">
              <li itemProp="addressLocality">
                <span aria-hidden="true">📍</span> Jakarta, Indonesia
              </li>
              <li>
                <a 
                  href="tel:+622121234567" 
                  className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                  itemProp="telephone"
                >
                  <span aria-hidden="true">📞</span> +62 21 5201 590
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@kemkes.go.id" 
                  className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                  itemProp="email"
                >
                  <span aria-hidden="true">✉️</span> info@kemkes.go.id
                </a>
              </li>
            </ul>
          </address>

          {/* Social Media */}
          <nav className="col-span-1" aria-labelledby="social-media-heading">
            <h4 id="social-media-heading" className="font-semibold mb-4">Ikuti Kami</h4>
            <ul className="flex gap-3" role="list">
              <li>
                <a
                  href="https://www.facebook.com/KemenkesRI"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-light transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                  aria-label="Facebook Kemenkes RI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Facebook</span>
                  <span aria-hidden="true">f</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/KemenkesRI"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-light transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                  aria-label="Twitter/X Kemenkes RI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter/X</span>
                  <span aria-hidden="true">𝕏</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kemenkes_ri"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-light transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                  aria-label="Instagram Kemenkes RI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <span aria-hidden="true">📷</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/KementerianKesehatanRI"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-light transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                  aria-label="YouTube Kemenkes RI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">YouTube</span>
                  <span aria-hidden="true">▶</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>
              © 2025 Kementerian Kesehatan Republik Indonesia. All rights reserved.
            </p>
            <nav aria-label="Footer legal links">
              <ul className="flex gap-6" role="list">
                <li>
                  <a 
                    href="/privacy-policy" 
                    className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms" 
                    className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                  >
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a 
                    href="/sitemap.xml" 
                    className="hover:text-secondary transition-colors focus:outline-none focus:underline"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}