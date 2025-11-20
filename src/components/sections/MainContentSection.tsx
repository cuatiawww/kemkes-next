/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  MegaphoneIcon,
  DocumentTextIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

// Extend Window interface untuk social media embeds
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

const rilisData = {
  featured: {
    id: 1,
    image:
      "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
    title: "Pelayanan Kesehatan untuk Masyarakat Daerah Terpencil",
  },
  items: [
    {
      id: 2,
      image:
        "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
      title: "Konsultasi Kesehatan di Fasilitas Kesehatan",
    },
    {
      id: 3,
      image:
        "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
      title: "Program Vaksinasi Ibu dan Anak di Puskesmas",
    },
    {
      id: 4,
      image:
        "https://kemkes.go.id/app_asset/image_content/1763520228691d2ee46d47d1.20553463.jpg",
      title: "Pemeriksaan Produk Farmasi Nasional",
    },
  ],
};

const pengumumanData = [
  {
    id: 1,
    icon: MegaphoneIcon,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Buku Panduan dan Logo HKN ke-61",
    date: "Tanggal Dipublikasi",
  },
  {
    id: 2,
    icon: DocumentTextIcon,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    title: "Selamat Kepada Tim Terpilih di Grand Final Indonesia Healthcare AI Hackathon 2025",
    date: "Tanggal Dipublikasi",
  }
];

const socialMediaPlatforms = [
  {
    name: "Instagram",
    embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CaUsPbUquKV/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
    scriptUrl: "//www.instagram.com/embed.js",
  },
  {
    name: "Twitter",
    embedCode: `<blockquote class="twitter-tweet"><p lang="in" dir="ltr">Desa yang maju dan sejahtera bukan angan belaka.<br><br>Dalam <a href="https://twitter.com/hashtag/10TahunKerjaBersama?src=hash&amp;ref_src=twsrc%5Etfw">#10TahunKerjaBersama</a>, <a href="https://twitter.com/hashtag/UangKita?src=hash&amp;ref_src=twsrc%5Etfw">#UangKita</a> terus dioptimalkan untuk memberdayakan masyarakat desa melalui ✨Dana Desa✨.<br><br>Apa saja hasilnya? <a href="https://t.co/4AHBqu2dNP">pic.twitter.com/4AHBqu2dNP</a></p>&mdash; #UangKita (@KemenkeuRI) <a href="https://twitter.com/KemenkeuRI/status/1846128436177473589?ref_src=twsrc%5Etfw">October 15, 2024</a></blockquote>`,
    scriptUrl: "https://platform.twitter.com/widgets.js",
  },
  {
    name: "TikTok",
    embedCode: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@zachking/video/6749520869598481669" data-video-id="6749520869598481669" style="max-width:605px; min-width:325px;"> <section> <a target="_blank" title="@zachking" href="https://www.tiktok.com/@zachking?refer=embed">@zachking</a> <p>Do you see the glass as half full or half empty?? <a title="perspective" target="_blank" href="https://www.tiktok.com/tag/perspective?refer=embed">#perspective</a> <a title="magic" target="_blank" href="https://www.tiktok.com/tag/magic?refer=embed">#magic</a></p> <a target="_blank" title="♬ Glass Half Full Zach King - Zach King" href="https://www.tiktok.com/music/Glass-Half-Full-Zach-King-6749517306881248005?refer=embed">♬ Glass Half Full Zach King - Zach King</a> </section> </blockquote>`,
    scriptUrl: "https://www.tiktok.com/embed.js",
  },
];

export default function MainContentSection() {
  const [activePlatform, setActivePlatform] = useState<number>(0);

  useEffect(() => {
    // Load script untuk platform yang aktif
    const currentPlatform = socialMediaPlatforms[activePlatform];
    const scriptId = `social-script-${activePlatform}`;
    
    // Cek apakah script sudah ada
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = currentPlatform.scriptUrl;
      script.async = true;
      
      if (currentPlatform.name === "Twitter") {
        script.charset = "utf-8";
      }
      
      document.body.appendChild(script);
    } else {
      // Jika script sudah ada, trigger render ulang untuk platform yang sudah loaded
      if (currentPlatform.name === "Instagram" && window.instgrm) {
        window.instgrm.Embeds.process();
      } else if (currentPlatform.name === "Twitter" && window.twttr) {
        window.twttr.widgets.load();
      }
    }

    return () => {
      // Cleanup tidak perlu menghapus script karena bisa digunakan lagi
    };
  }, [activePlatform]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Rilis */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col border-0 shadow-lg">
              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-primary">
                    RILIS KEMENTERIAN KESEHATAN
                  </h2>
                  <button className="text-primary hover:underline text-sm font-semibold">
                    Lihat Lainnya →
                  </button>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  Kementerian Kesehatan RI membagikan beberapa berita terkait
                  seputar kesehatan dan upaya perkembangan bagi kesehatan
                  nasional
                </p>

                {/* Featured Article */}
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-4 flex-grow min-h-[300px] group cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${rilisData.featured.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold">
                      {rilisData.featured.title}
                    </h3>
                  </div>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {rilisData.items.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-sm text-gray-700 font-medium">
                          {item.title}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Pengumuman */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                PENGUMUMAN
              </h3>

              <Card className="border-0 bg-white">
                <CardContent className="p-6">
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg mb-4 hover:bg-gray-200 transition-colors text-sm font-medium">
                    Lihat Lainnya
                  </button>

                  <div className="space-y-4">
                    {pengumumanData.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.id}
                          className={`flex items-start space-x-3 pb-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors ${
                            index !== pengumumanData.length - 1
                              ? "border-b border-gray-200"
                              : ""
                          }`}
                        >
                          <div className={`${item.iconBg} p-3 rounded-lg flex-shrink-0`}>
                            <Icon className={`${item.iconColor} w-6 h-6`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500">{item.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Media Sosial */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                MEDIA SOSIAL
              </h3>

              <Card className="border-0 bg-white">
                <CardContent className="p-6">
                  {/* Social Media Tabs */}
                  <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
                    {socialMediaPlatforms.map((platform, index) => (
                      <button
                        key={platform.name}
                        onClick={() => setActivePlatform(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activePlatform === index
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {platform.name}
                      </button>
                    ))}
                  </div>

                  {/* Embed Container */}
                  <div className="bg-gray-50 rounded-lg p-4 h-[400px] overflow-y-auto relative">
                    <div
                      key={activePlatform}
                      className="w-full"
                      dangerouslySetInnerHTML={{
                        __html: socialMediaPlatforms[activePlatform].embedCode,
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}