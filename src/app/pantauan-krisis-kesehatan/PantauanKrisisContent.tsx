"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import dynamic from 'next/dynamic';

// Mock data
const statistikData = [
  { bulan: 'Jul', kejadian: 45, korban: 1230, meninggal: 12 },
  { bulan: 'Agu', kejadian: 52, korban: 1450, meninggal: 18 },
  { bulan: 'Sep', kejadian: 38, korban: 980, meninggal: 8 },
  { bulan: 'Okt', kejadian: 61, korban: 1680, meninggal: 22 },
  { bulan: 'Nov', kejadian: 48, korban: 1320, meninggal: 15 },
  { bulan: 'Des', kejadian: 35, korban: 890, meninggal: 9 },
];

const jenisKrisisData = [
  { name: 'Banjir', value: 145, color: '#0EA5E9' },
  { name: 'Kebakaran', value: 89, color: '#F59E0B' },
  { name: 'Gempa', value: 34, color: '#EF4444' },
  { name: 'Tanah Longsor', value: 67, color: '#8B5CF6' },
  { name: 'Wabah Penyakit', value: 23, color: '#10B981' },
];

const provinsiData = [
  { provinsi: 'Jawa Barat', kejadian: 45, korban: 1250 },
  { provinsi: 'Jawa Timur', kejadian: 38, korban: 980 },
  { provinsi: 'Jawa Tengah', kejadian: 32, korban: 850 },
  { provinsi: 'Sumatera Utara', kejadian: 28, korban: 720 },
  { provinsi: 'Sulawesi Selatan', kejadian: 25, korban: 650 },
];

const tableData = [
  {
    id: 1,
    tanggal: '2025-12-10',
    jenis: 'Banjir',
    lokasi: 'Bandung, Jawa Barat',
    penduduk: 15000,
    hilang: 2,
    luka: 45,
    ringan: 123,
    meninggal: 1,
    pengungsi: 450,
  },
  {
    id: 2,
    tanggal: '2025-12-09',
    jenis: 'Kebakaran',
    lokasi: 'Jakarta Utara',
    penduduk: 8000,
    hilang: 0,
    luka: 12,
    ringan: 35,
    meninggal: 0,
    pengungsi: 120,
  },
  {
    id: 3,
    tanggal: '2025-12-08',
    jenis: 'Gempa',
    lokasi: 'Malang, Jawa Timur',
    penduduk: 25000,
    hilang: 5,
    luka: 78,
    ringan: 234,
    meninggal: 3,
    pengungsi: 890,
  },
  {
    id: 4,
    tanggal: '2025-12-07',
    jenis: 'Tanah Longsor',
    lokasi: 'Bogor, Jawa Barat',
    penduduk: 5000,
    hilang: 1,
    luka: 23,
    ringan: 67,
    meninggal: 2,
    pengungsi: 200,
  },
  {
    id: 5,
    tanggal: '2025-12-06',
    jenis: 'Banjir',
    lokasi: 'Semarang, Jawa Tengah',
    penduduk: 12000,
    hilang: 0,
    luka: 34,
    ringan: 98,
    meninggal: 0,
    pengungsi: 350,
  },
];

// Import Map component with no SSR
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

export default function PantauanKrisisContent() {
  const [activeTab, setActiveTab] = useState<'statistik' | 'tabel'>('statistik');
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const filteredData = tableData.filter(item => 
    item.lokasi.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.jenis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Info Card */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-2">PETA SEBARAN KRISIS KESEHATAN</h3>
              <p className="text-sm text-gray-600">
                Data diambil dari Sistem Informasi Pusat Krisis Kesehatan untuk Data Bencana dari tanggal 28 Nov 2025 sampai dengan Tanggal 12 Dec 2025
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Placeholder
      <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-100 to-blue-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16268885.267253334!2d105.6771469!3d-2.5482284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card> */}
      {/* Map Section */}
<Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
  <CardContent className="p-0">
    <MapComponent />
  </CardContent>
</Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-2 border-blue-200 bg-blue-50 hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-semibold mb-1">Total Kejadian</p>
                <p className="text-3xl font-bold text-blue-700">279</p>
                <p className="text-xs text-blue-500 mt-1">2 minggu terakhir</p>
              </div>
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-200 bg-orange-50 hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-semibold mb-1">Total Korban</p>
                <p className="text-3xl font-bold text-orange-700">7,550</p>
                <p className="text-xs text-orange-500 mt-1">Luka + Meninggal</p>
              </div>
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200 bg-red-50 hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 font-semibold mb-1">Korban Meninggal</p>
                <p className="text-3xl font-bold text-red-700">84</p>
                <p className="text-xs text-red-500 mt-1">2 minggu terakhir</p>
              </div>
              <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-semibold mb-1">Total Pengungsi</p>
                <p className="text-3xl font-bold text-green-700">2,010</p>
                <p className="text-xs text-green-500 mt-1">Butuh bantuan</p>
              </div>
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Kejadian */}
        <Card className="border-2 border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Trend Kejadian Krisis (6 Bulan Terakhir)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={statistikData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bulan" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="kejadian" stroke="#0EA5E9" strokeWidth={3} name="Kejadian" />
                <Line type="monotone" dataKey="korban" stroke="#F59E0B" strokeWidth={3} name="Korban" />
                <Line type="monotone" dataKey="meninggal" stroke="#EF4444" strokeWidth={3} name="Meninggal" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Jenis Krisis Pie Chart */}
        <Card className="border-2 border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Distribusi Jenis Krisis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={jenisKrisisData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {jenisKrisisData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Provinsi Bar Chart */}
      <Card className="border-2 border-gray-200 shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Top 5 Provinsi dengan Kejadian Terbanyak</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={provinsiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="provinsi" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="kejadian" fill="#0EA5E9" name="Kejadian" />
              <Bar dataKey="korban" fill="#F59E0B" name="Korban" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="flex gap-4 border-b-2 border-gray-200">
        <button
          onClick={() => setActiveTab('statistik')}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === 'statistik'
              ? 'border-b-4 border-primary text-primary'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Statistik
        </button>
        <button
          onClick={() => setActiveTab('tabel')}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === 'tabel'
              ? 'border-b-4 border-primary text-primary'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Data Kejadian
        </button>
      </div>

      {/* Table Section */}
      {activeTab === 'tabel' && (
        <Card className="border-2 border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              DATA KEJADIAN KRISIS KESEHATAN (28 Nov 2025 - 12 Dec 2025)
            </h3>

            {/* Table Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="border border-gray-300 rounded px-3 py-1 text-sm"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Search:</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari lokasi atau jenis..."
                  className="border border-gray-300 rounded px-4 py-2 text-sm w-64"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-700">No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-700">Tanggal Kejadian</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-700">Jenis Bencana</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-700">Lokasi</th>
                    <th className="border border-gray-300 px-4 py-3 text-center text-sm font-bold text-gray-700">Penduduk Terdampak</th>
                    <th className="border border-gray-300 px-4 py-3 text-center text-sm font-bold text-gray-700">Jumlah Hilang</th>
                    <th className="border border-gray-300 px-4 py-3 text-center text-sm font-bold text-gray-700">Jumlah Luka Berat/Rawat Inap</th>
                    <th className="border border-gray-300 px-4 py-3 text-center text-sm font-bold text-gray-700">Jumlah Luka Ringan/Rawat Jalan</th>
                    <th className="border border-gray-300 px-4 py-3 text-center text-sm font-bold text-gray-700">Jumlah Pengungsi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.slice(0, entriesPerPage).map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">
                          {format(new Date(item.tanggal), 'dd MMM yyyy', { locale: id })}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {item.jenis}
                          </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">{item.lokasi}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-center">{item.penduduk.toLocaleString()}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-center">{item.hilang}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-center">{item.luka}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-center">{item.ringan}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-center">{item.pengungsi}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={9} className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                        No data available in table
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Info */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {Math.min(entriesPerPage, filteredData.length)} of {filteredData.length} entries
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}