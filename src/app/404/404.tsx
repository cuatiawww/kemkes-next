import Link from "next/link";

export default function NotFoundAlt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Construction Banner */}
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 py-3 px-6 flex items-center justify-center gap-3 animate-pulse-slow">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce animation-delay-400"></div>
            </div>
            <span className="text-black font-black text-sm uppercase tracking-wider">
              ⚠️ Sedang Dalam Pengembangan ⚠️
            </span>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce animation-delay-400"></div>
            </div>
          </div>

          <div className="p-8 md:p-16 text-center">
            {/* Large Construction Scene */}
            <div className="mb-8 relative">
              {/* Main Construction Equipment */}
              <div className="flex justify-center items-end gap-4 mb-6">
                {/* Crane */}
                <div className="relative animate-sway">
                  <svg
                    className="w-24 h-32 text-yellow-400"
                    viewBox="0 0 100 150"
                    fill="currentColor"
                  >
                    <rect x="45" y="60" width="10" height="90" />
                    <rect x="20" y="55" width="60" height="8" />
                    <line
                      x1="80"
                      y1="59"
                      x2="90"
                      y2="100"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <rect
                      x="85"
                      y="100"
                      width="10"
                      height="15"
                      className="animate-swing"
                    />
                  </svg>
                </div>

                {/* 404 Numbers as Building Blocks */}
                <div className="flex gap-2 items-end">
                  <div className="bg-orange-500 text-white font-black text-4xl md:text-6xl px-4 py-6 rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                    4
                  </div>
                  <div className="bg-blue-500 text-white font-black text-4xl md:text-6xl px-4 py-6 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                    0
                  </div>
                  <div className="bg-yellow-500 text-white font-black text-4xl md:text-6xl px-4 py-6 rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform">
                    4
                  </div>
                </div>

                {/* Excavator */}
                <div className="relative animate-dig">
                  <svg
                    className="w-24 h-24 text-orange-500"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                  >
                    <rect x="10" y="70" width="40" height="20" rx="5" />
                    <circle cx="20" cy="90" r="8" fill="black" />
                    <circle cx="40" cy="90" r="8" fill="black" />
                    <rect
                      x="45"
                      y="50"
                      width="8"
                      height="30"
                      transform="rotate(45 49 65)"
                    />
                    <rect
                      x="60"
                      y="55"
                      width="8"
                      height="25"
                      transform="rotate(-30 64 67)"
                    />
                    <path d="M 70 75 L 85 70 L 85 80 Z" />
                  </svg>
                </div>
              </div>

              {/* Ground Line */}
              <div className="h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-white">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Ups! Halaman Sedang Dibangun
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Tim konstruksi digital kami sedang bekerja keras membangun
                halaman ini. Seperti gedung pencakar langit, website yang hebat
                membutuhkan waktu!
              </p>

              {/* Construction Progress */}
              <div className="max-w-md mx-auto space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Progress Pembangunan</span>
                  <span className="font-bold">78%</span>
                </div>
                <div className="relative h-6 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-progress-slide"></div>
                  <div
                    className="absolute h-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-progress"
                    style={{ width: "78%" }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white drop-shadow-lg">
                      LOADING...
                    </span>
                  </div>
                </div>
              </div>

              {/* Construction Facts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-black text-yellow-400 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300">Tim Bekerja</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-black text-orange-400 mb-2">
                    99%
                  </div>
                  <div className="text-sm text-gray-300">Hampir Selesai</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-black text-blue-400 mb-2">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-300">Segera Hadir</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Link
                  href="/"
                  className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Kembali ke Beranda
                  <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                  Halaman Sebelumnya
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-6 flex flex-wrap justify-center items-center gap-4 text-white text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Estimasi: Segera</span>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <Link href="/kontak" className="hover:underline">
                Hubungi Tim
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Construction Icons */}
      <div className="absolute top-10 left-10 animate-float opacity-30">
        <svg
          className="w-16 h-16 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      </div>

      <div className="absolute bottom-20 right-20 animate-float-delayed opacity-30">
        <svg
          className="w-20 h-20 text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        @keyframes swing {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(10px);
          }
        }

        @keyframes dig {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-5deg);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 78%;
          }
        }

        @keyframes progress-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-sway {
          animation: sway 4s ease-in-out infinite;
          transform-origin: bottom center;
        }

        .animate-swing {
          animation: swing 2s ease-in-out infinite;
          transform-origin: top center;
        }

        .animate-dig {
          animation: dig 3s ease-in-out infinite;
          transform-origin: bottom left;
        }

        .animate-progress {
          animation: progress 3s ease-out forwards;
        }

        .animate-progress-slide {
          animation: progress-slide 2s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}