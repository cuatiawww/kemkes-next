"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Decorative Medical Icons */}
      <div className="absolute top-10 left-10 opacity-10 animate-pulse">
        <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 animate-pulse delay-700">
        <svg className="w-32 h-32 text-secondary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary py-6 px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Kementerian Kesehatan RI
              </h1>
            </div>
            <p className="text-white/90 text-sm">Untuk Indonesia Sehat</p>
          </div>

          <div className="p-8 md:p-16 text-center">
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                {/* Medical Symbol + 404 */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary to-secondary text-white rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-2xl">
                    <svg className="w-16 h-16 md:w-20 md:h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                    </svg>
                  </div>
                </div>

                <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-primary animate-gradient">
                  404
                </div>
              </div>

              {/* Animated Heartbeat Line */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-red-500"></div>
                <svg className="w-12 h-12 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-red-500"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Halaman Tidak Ditemukan
              </h2>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Seperti diagnosis yang tepat, kami tidak dapat menemukan halaman yang Anda cari.
                Mungkin halaman telah dipindahkan atau URL salah.
              </p>

              {/* Auto Redirect Info */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-full px-6 py-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-primary font-bold">
                    {countdown}
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-primary">Redirect Otomatis</p>
                  <p className="text-xs text-gray-600">Mengarahkan ke beranda dalam {countdown} detik</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link
                href="/"
                className="group bg-gradient-to-br from-primary to-primary/90 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <p className="font-semibold">Beranda</p>
              </Link>

              <Link
                href="/layanan"
                className="group bg-gradient-to-br from-secondary to-secondary/90 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="font-semibold">Layanan</p>
              </Link>

              <Link
                href="/kontak"
                className="group bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold">Kontak</p>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Kembali ke Beranda
              </Link>

              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
                Halaman Sebelumnya
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 border-t border-gray-200 py-6 px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Error Code: <strong>404</strong></span>
              </div>
              <div className="hidden sm:block text-gray-300">|</div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Butuh Bantuan? <Link href="/kontak" className="text-primary hover:underline font-semibold">Hubungi Kami</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}
