"use client";

import { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const transformasiData = [
  {
    id: 1,
    title: "Transformasi Layanan Primer",
    mainImage: "/mascot-1.png",
    smallImage: "/mascot-1.png",
    description: "Transformasi Layanan Primer merupakan pilar pertama dari Transformasi Kesehatan Indonesia, yang menjadi fondasi penting dalam mewujudkan sistem kesehatan nasional yang lebih kuat, merata, dan berorientasi pada pencegahan. Fokus utamanya adalah memperkuat aktivitas promotif dan preventif agar lebih banyak masyarakat yang tetap sehat, sekaligus memperbaiki sistem skrining serta meningkatkan kapasitas layanan primer di seluruh wilayah Indonesia.",
    intro: "Dalam implementasinya, Transformasi Layanan Primer memiliki empat fokus utama yang saling terintegrasi:",
    points: [
      {
        title: "Edukasi Penduduk",
        content: "Upaya ini dilakukan dengan memperkuat peran kader kesehatan, menyelenggarakan berbagai kampanye dan gerakan masyarakat, serta memanfaatkan platform digital dan tokoh masyarakat untuk meningkatkan kesadaran dan partisipasi publik dalam menjaga kesehatan."
      },
      {
        title: "Pencegahan Primer",
        content: "Pencegahan dilakukan sejak dini melalui penambahan imunisasi rutin menjadi 14 antigen, serta memperluas cakupan vaksinasi di seluruh wilayah Indonesia. Langkah ini bertujuan untuk mencegah penyakit menular dan melindungi kelompok rentan sejak usia dini."
      },
      {
        title: "Pencegahan Sekunder",
        content: "Pemerintah berfokus pada skrining 14 penyakit penyebab kematian tertinggi di setiap kelompok usia, termasuk deteksi dini stunting serta peningkatan pelayanan Antenatal Care (ANC) untuk menjaga kesehatan ibu dan bayi. Melalui pendekatan ini, diharapkan masalah kesehatan dapat teridentifikasi dan ditangani lebih cepat."
      },
      {
        title: "Meningkatkan Kapasitas dan Kapabilitas Layanan Primer",
        content: "Penguatan layanan primer dilakukan melalui revitalisasi jaringan dan standarisasi layanan di Puskesmas, Posyandu, hingga kunjungan rumah. Hal ini memastikan setiap warga mendapatkan pelayanan kesehatan yang bermutu dan terjangkau tanpa terkendala lokasi atau fasilitas."
      }
    ],
    conclusion: "Dengan keempat fokus tersebut, Transformasi Layanan Primer menjadi langkah nyata untuk membangun sistem kesehatan yang lebih tangguh, inklusif, dan berkelanjutan, serta membawa Indonesia menuju visi besar: masyarakat yang lebih sehat dan produktif."
  },
  {
    id: 2,
    title: "Transformasi Layanan Rujukan",
    mainImage: "/mascot-2.png",
    smallImage: "/mascot-2.png",
    description: "Transformasi Layanan Rujukan bertujuan untuk meningkatkan kualitas dan efisiensi pelayanan kesehatan tingkat lanjut di rumah sakit dan fasilitas kesehatan rujukan lainnya.",
    intro: "Program ini fokus pada peningkatan kapasitas dan kualitas layanan rujukan:",
    points: [
      {
        title: "Peningkatan Infrastruktur",
        content: "Pembangunan dan renovasi rumah sakit rujukan dengan standar internasional untuk memberikan layanan terbaik kepada masyarakat."
      },
      {
        title: "Standardisasi Pelayanan",
        content: "Implementasi protokol dan standar pelayanan medis yang seragam di seluruh fasilitas kesehatan rujukan untuk menjamin kualitas."
      },
      {
        title: "Integrasi Sistem Rujukan",
        content: "Penguatan sistem rujukan berjenjang dari layanan primer ke sekunder dan tersier dengan koordinasi yang lebih baik."
      },
      {
        title: "Peningkatan SDM Spesialis",
        content: "Pengembangan kompetensi tenaga medis spesialis dan sub-spesialis untuk meningkatkan kualitas diagnosis dan penanganan."
      }
    ],
    conclusion: "Transformasi ini diharapkan dapat meningkatkan akses masyarakat terhadap layanan kesehatan rujukan yang berkualitas dan terjangkau."
  },
  {
    id: 3,
    title: "Sistem Ketahanan Kesehatan",
    mainImage: "/mascot-3.png",
    smallImage: "/mascot-3.png",
    description: "Sistem Ketahanan Kesehatan dirancang untuk memastikan Indonesia siap menghadapi berbagai ancaman kesehatan, baik yang bersifat endemik maupun pandemi.",
    intro: "Pilar utama dalam membangun ketahanan kesehatan nasional:",
    points: [
      {
        title: "Surveilans Kesehatan",
        content: "Penguatan sistem surveilans untuk deteksi dini penyakit menular dan tidak menular melalui teknologi digital dan laboratorium kesehatan."
      },
      {
        title: "Kesiapsiagaan Darurat",
        content: "Pembentukan sistem tanggap darurat kesehatan yang cepat dan terkoordinasi untuk menghadapi wabah dan bencana."
      },
      {
        title: "Kemandirian Farmasi",
        content: "Pengembangan industri farmasi dan alat kesehatan dalam negeri untuk mengurangi ketergantungan impor."
      },
      {
        title: "Kolaborasi Multi-sektor",
        content: "Penguatan koordinasi antar sektor pemerintah, swasta, dan masyarakat dalam menghadapi ancaman kesehatan."
      }
    ],
    conclusion: "Sistem ketahanan kesehatan yang kuat akan menjadikan Indonesia lebih siap dan tangguh menghadapi tantangan kesehatan di masa depan."
  },
  {
    id: 4,
    title: "Sistem Pembiayaan Kesehatan",
    mainImage: "/mascot-4.png",
    smallImage: "/mascot-4.png",
    description: "Transformasi Sistem Pembiayaan Kesehatan bertujuan untuk mewujudkan jaminan kesehatan universal yang berkelanjutan dan berkeadilan.",
    intro: "Aspek kunci dalam reformasi pembiayaan kesehatan:",
    points: [
      {
        title: "Perluasan Cakupan JKN",
        content: "Memperluas kepesertaan Jaminan Kesehatan Nasional hingga mencapai cakupan semesta (universal health coverage)."
      },
      {
        title: "Efisiensi Pembiayaan",
        content: "Implementasi sistem pembayaran berbasis kinerja dan case-mix untuk meningkatkan efisiensi penggunaan anggaran kesehatan."
      },
      {
        title: "Penguatan Sumber Pendanaan",
        content: "Diversifikasi sumber pembiayaan kesehatan melalui alokasi APBN, APBD, dan kontribusi sektor swasta."
      },
      {
        title: "Kendali Mutu dan Biaya",
        content: "Penerapan sistem kendali mutu dan biaya untuk memastikan layanan kesehatan berkualitas dengan pembiayaan yang efisien."
      }
    ],
    conclusion: "Sistem pembiayaan yang kuat akan memastikan akses layanan kesehatan berkualitas bagi seluruh rakyat Indonesia."
  },
  {
    id: 5,
    title: "SDM Kesehatan",
    mainImage: "/mascot-5.png",
    smallImage: "/mascot-5.png",
    description: "Transformasi SDM Kesehatan fokus pada peningkatan kualitas, kuantitas, dan distribusi tenaga kesehatan untuk memastikan pelayanan kesehatan yang merata di seluruh Indonesia.",
    intro: "Strategi pengembangan SDM kesehatan:",
    points: [
      {
        title: "Pendidikan dan Pelatihan",
        content: "Peningkatan kualitas pendidikan tenaga kesehatan melalui standarisasi kurikulum dan penguatan institusi pendidikan kesehatan."
      },
      {
        title: "Distribusi Tenaga Kesehatan",
        content: "Pemerataan distribusi tenaga kesehatan ke daerah terpencil, tertinggal, perbatasan, dan kepulauan (DTPK) melalui berbagai insentif."
      },
      {
        title: "Pengembangan Kompetensi",
        content: "Program peningkatan kompetensi berkelanjutan untuk tenaga kesehatan melalui pelatihan, sertifikasi, dan pendidikan lanjutan."
      },
      {
        title: "Kesejahteraan Tenaga Kesehatan",
        content: "Peningkatan kesejahteraan dan perlindungan hukum bagi tenaga kesehatan untuk meningkatkan motivasi dan kinerja."
      }
    ],
    conclusion: "SDM kesehatan yang kompeten dan terdistribusi merata akan menjadi kunci keberhasilan transformasi kesehatan Indonesia."
  },
  {
    id: 6,
    title: "Teknologi Kesehatan",
    mainImage: "/mascot-6.png",
    smallImage: "/mascot-6.png",
    description: "Transformasi Teknologi Kesehatan memanfaatkan inovasi digital dan teknologi medis untuk meningkatkan akses, kualitas, dan efisiensi layanan kesehatan.",
    intro: "Implementasi teknologi dalam sistem kesehatan:",
    points: [
      {
        title: "Telemedicine dan Telehealth",
        content: "Pengembangan layanan konsultasi kesehatan jarak jauh untuk meningkatkan akses masyarakat di daerah terpencil."
      },
      {
        title: "Sistem Informasi Kesehatan",
        content: "Integrasi data kesehatan melalui SATUSEHAT untuk memudahkan koordinasi dan pengambilan keputusan berbasis data."
      },
      {
        title: "Inovasi Alat Kesehatan",
        content: "Pengembangan dan adopsi teknologi medis terkini seperti AI untuk diagnosis, robot bedah, dan peralatan medis canggih."
      },
      {
        title: "Literasi Digital Kesehatan",
        content: "Peningkatan literasi digital masyarakat dan tenaga kesehatan untuk memaksimalkan pemanfaatan teknologi kesehatan."
      }
    ],
    conclusion: "Teknologi kesehatan akan menjadi akselerator transformasi kesehatan menuju Indonesia sehat dan produktif."
  }
];

export default function TransformasiContent() {
  const [selectedTransformasi, setSelectedTransformasi] = useState(transformasiData[0]);

  return (
    <>
      {/* Header */}
      <SectionHeader
        title="TRANSFORMASI KESEHATAN INDONESIA"
        description="Program berikut merupakan sebuah inisiasi yang dilakukan oleh Kementerian Kesehatan untuk melakukan kegiatan transformasi kesehatan yang mencakup 6 jenis transformasi."
      />

      {/* Main Mascot Image - Dynamic */}
      <Card className="border border-gray-200 bg-white rounded-xl md:rounded-2xl">
        <CardContent className="p-6 md:p-12 lg:p-16">
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src={selectedTransformasi.mainImage}
                alt={selectedTransformasi.title}
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 6 Small Mascot Images Grid - Interactive */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
        {transformasiData.map((item) => (
          <Card
            key={item.id}
            onClick={() => setSelectedTransformasi(item)}
            className={`border-2 bg-white rounded-lg md:rounded-xl overflow-hidden transition-all cursor-pointer ${
              selectedTransformasi.id === item.id
                ? "border-primary shadow-xl scale-105"
                : "border-gray-200 hover:shadow-lg hover:scale-102"
            }`}
          >
            <CardContent className="p-3 md:p-4">
              <div className="relative w-full aspect-square">
                <Image
                  src={item.smallImage}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dynamic Content Card */}
      <Card className="border border-gray-200 bg-white rounded-xl md:rounded-2xl">
        <CardContent className="p-6 md:p-8 lg:p-10">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
            {selectedTransformasi.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            {selectedTransformasi.description}
          </p>

          {/* Intro */}
          <p className="text-gray-800 text-sm md:text-base font-semibold mb-4 md:mb-6">
            {selectedTransformasi.intro}
          </p>

          {/* Points */}
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            {selectedTransformasi.points.map((point, index) => (
              <div key={index} className="border-l-4 border-primary pl-4 md:pl-6">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">
                  {index + 1}. {point.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {point.content}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-primary/5 border-l-4 border-primary p-4 md:p-6 rounded-r-lg">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
              {selectedTransformasi.conclusion}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
