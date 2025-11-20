"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
    image: "/rilis_1.webp",
    title: "Pelayanan Kesehatan untuk Masyarakat Daerah Terpencil",
    date: "10 Nov 2025",
  },
  items: [
    {
      id: 2,
      image: "/rilis_2.webp",
      title: "Konsultasi Kesehatan di Fasilitas Kesehatan",
      date: "10 Nov 2025",
    },
    {
      id: 3,
      image: "/rilis_3.webp",
      title: "Program Vaksinasi Ibu dan Anak di Puskesmas",
      date: "09 Nov 2025",
    },
    {
      id: 4,
      image: "/rilis_4.webp",
      title: "Pemeriksaan Produk Farmasi Nasional",
      date: "08 Nov 2025",
    },
  ],
};

const pengumumanData = [
  {
    id: 1,
    image: "/img1.png",
    title: "Buku Panduan dan Logo HKN ke-61",
    date: "07 Januari 2026",
  },
  {
    id: 2,
    image: "/img2.png",
    title: "Selamat Kepada Tim Terpilih di Grand Final Indonesia Healthcare AI Hackathon 2025",
    date: " 07 Januari 2026",
  },
  {
    id: 3,
    image: "/img3.png",
    title: "Bersama Lawan TB: RSUP Persahabatan Hadirkan i-ECHO Tuberkulosis 2025",
    date: " 07 Januari 2026",
  },
];

const socialMediaPlatforms = [
  {
    name: "Facebook",
    embedCode: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FKementerianKesehatanRI%2Fposts%2Fpfbid02PfMdE5gouWrsw5UqMPxtxr95YV31Ev3XE8bW4gfrRAgN4PLUZyNcgQJw1wvWdsdql&show_text=true&width=500" width="500" height="632" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    scriptUrl: "",
  },
  {
    name: "Instagram",
    embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DQ4DqYvga0_/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DQ4DqYvga0_/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DQ4DqYvga0_/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Kementerian Kesehatan RI (@kemenkes_ri)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`,
    scriptUrl: "//www.instagram.com/embed.js",
  },
  {
    name: "Twitter/X",
    embedCode: `<blockquote class="twitter-tweet"><p lang="in" dir="ltr"><a href="https://twitter.com/hashtag/Healthies?src=hash&amp;ref_src=twsrc%5Etfw">#Healthies</a>, Presiden Prabowo bersama H.H. Sheikh Theyab bin Mohamed bin Zayed Al Nahyan meresmikan RS Kardiologi Emirates-Indonesia (RS KEI) di Surakarta, Jawa Tengah pada Rabu (19/11)✨<br><br>RS KEI merupakan rumah sakit jantung berteknologi tinggi hasil hibah dari Pemerintah UEA.… <a href="https://t.co/CKCq55jurj">pic.twitter.com/CKCq55jurj</a></p>&mdash; Kementerian Kesehatan RI (@KemenkesRI) <a href="https://twitter.com/KemenkesRI/status/1991431617236332568?ref_src=twsrc%5Etfw">November 20, 2025</a></blockquote>`,
    scriptUrl: "https://platform.twitter.com/widgets.js",
  },
  {
    name: "TikTok",
    embedCode: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@kemenkesri/video/7574006877755968775" data-video-id="7574006877755968775" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@kemenkesri" href="https://www.tiktok.com/@kemenkesri?refer=embed">@kemenkesri</a> *BENERAN LAST DAY!* <a title="healthies" target="_blank" href="https://www.tiktok.com/tag/healthies?refer=embed">#Healthies</a>, ini kesempatan terakhir buat unjuk karya di Kompetisi Video Kreatif HKN-61. Hari ini penentuannya, dan kamu masih punya waktu sampai nanti malam buat kirim video terbaikmu. Tunggu apalagi? Yuk, cepetan daftar dan upload karyamu lewat QR code yang ada di video. Gas sebelum pintunya bener-bener tutup!  Ayo absen dulu, siapa yang sudah submit?☝️😁 <a title="hkn61" target="_blank" href="https://www.tiktok.com/tag/hkn61?refer=embed">#HKN61</a> <a title="generasisehatmasadepanhebat" target="_blank" href="https://www.tiktok.com/tag/generasisehatmasadepanhebat?refer=embed">#GenerasiSehatMasaDepanHebat</a> <a title="kompetisivideokreatif" target="_blank" href="https://www.tiktok.com/tag/kompetisivideokreatif?refer=embed">#KompetisiVideoKreatif</a> <a target="_blank" title="♬ original sound - Artí" href="https://www.tiktok.com/music/original-sound-7553760968887552782?refer=embed">♬ original sound - Artí</a> </section> </blockquote>`,
    scriptUrl: "https://www.tiktok.com/embed.js",
  },
];

export default function MainContentSection() {
  const [activePlatform, setActivePlatform] = useState<number>(0);

  useEffect(() => {
    // Load script untuk platform yang aktif
    const currentPlatform = socialMediaPlatforms[activePlatform];
    const scriptId = `social-script-${activePlatform}`;

    // Facebook iframe tidak perlu script loading
    if (currentPlatform.name === "Facebook") {
      return;
    }

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

    };
  }, [activePlatform]);

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Rilis */}
          <div className="lg:col-span-2">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 md:mb-8 lg:mb-12 gap-4">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-4">
                    RILIS KEMENTERIAN KESEHATAN
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Informasi resmi dan terkini dari Kementerian Kesehatan RI mengenai kebijakan serta perkembangan isu kesehatan nasional.
                  </p>
                </div>
                <button className="md:ml-6 border-2 border-primary text-primary px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-xs md:text-sm font-semibold whitespace-nowrap flex items-center justify-center gap-2 w-full md:w-auto">
                  Lihat Lainnya
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Featured Article */}
                              <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 mb-3 md:mb-4 flex-grow min-h-[200px] md:min-h-[300px] group cursor-pointer">
                  <Image
                    src={rilisData.featured.image}
                    alt={rilisData.featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-white text-base md:text-xl font-bold mb-1 md:mb-2 line-clamp-2">
                      {rilisData.featured.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs md:text-sm text-white/90">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {rilisData.featured.date}
                    </div>
                  </div>
                </div>

              {/* Article Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-12 lg:mt-16">

                {rilisData.items.map((item) => (
                  <article
                    key={item.id}
                                          className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl transition-all duration-300 group cursor-pointer transform  p-3 md:p-4"
>
                    <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="px-1 md:px-2">
                      <p className="text-sm md:text-base text-gray-800 font-bold mb-1 md:mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-500">
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.date}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            {/* Pengumuman */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-1">PENGUMUMAN</h3>
<p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
  Informasi resmi terbaru terkait pemberitahuan, panduan, dan agenda penting dari Kementerian Kesehatan RI.
</p>


              <Card className="border border-gray-200 bg-white rounded-xl md:rounded-2xl">
                <CardContent className="p-4 md:p-6 flex flex-col">
                  <div className="space-y-0 flex-grow mb-4 md:mb-6">
                    {pengumumanData.map((item, index) => (
                      <div
                        key={item.id}
                        className={`relative flex items-start gap-2 md:gap-3 cursor-pointer hover:bg-gray-50 p-3 md:p-4 transition-all ${
                          index !== pengumumanData.length - 1
                            ? "border-b border-gray-200"
                            : ""
                        }`}
                      >
                        <div className="relative w-24 md:w-30 h-16 md:h-20 flex-shrink-0 rounded-md md:rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="120px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2 line-clamp-2">
                            {item.title}
                          </p>
                          <p className="text-[10px] md:text-xs text-gray-500">{item.date}</p>
                        </div>
                        {item.id === 1 && (
                          <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 animate-blink">
                            <Image
                              src="/new.png"
                              alt="New"
                              width={48}
                              height={48}
                              className="w-8 h-8 md:w-12 md:h-12 object-contain"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-white border-0 border-primary text-primary py-2.5 md:py-3 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-xs md:text-sm font-semibold flex items-center justify-center gap-2">
                    Lihat Lainnya
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Media Sosial */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-1">MEDIA SOSIAL</h3>
<p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
  Ikuti update terkini dari berbagai platform media sosial resmi Kementerian Kesehatan RI.
</p>


              <Card className="border border-gray-200 bg-white rounded-xl md:rounded-2xl shadow-md transition-all duration-300">
                <CardContent className="p-3 md:p-4">
                  {/* Social Media Tabs */}
                  <div className="flex items-center justify-start gap-2 mb-3 md:mb-4 overflow-x-auto">
                    {socialMediaPlatforms.map((platform, index) => (
                      <button
                        key={platform.name}
                        onClick={() => setActivePlatform(index)}
                        className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                          activePlatform === index
                            ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {platform.name}
                      </button>
                    ))}
                  </div>

                  {/* Embed Container */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2 md:p-3 h-[300px] md:h-[400px] overflow-y-auto relative border-2 border-gray-200 ">
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