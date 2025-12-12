"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';

interface BencanaData {
  id: string;
  tanggal: string;
  jenis_bencana: string;
  lokasi: string;
  provinsi: string;
  latitude: string;
  longitude: string;
  kronologi: string;
  meninggal?: string;
  hilang?: string;
  luka?: string;
  mengungsi?: string;
  kerusakan_rumah?: string;
}

// Custom icon berdasarkan jenis krisis
const getMarkerIcon = (type: string) => {
  const icons: { [key: string]: { color: string; emoji: string } } = {
    'Banjir': { color: '#0EA5E9', emoji: '🌊' },
    'Kebakaran': { color: '#F59E0B', emoji: '🔥' },
    'Gempa Bumi': { color: '#EF4444', emoji: '⚠️' },
    'Tanah Longsor': { color: '#8B5CF6', emoji: '⛰️' },
    'Cuaca Ekstrem': { color: '#10B981', emoji: '🌪️' },
    'Gunung Meletus': { color: '#DC2626', emoji: '🌋' },
  };

  const config = icons[type] || { color: '#6B7280', emoji: '⚠️' };

  return L.divIcon({
    html: `
      <div style="
        background-color: ${config.color};
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 16px;
        animation: pulse 2s infinite;
      ">
        ${config.emoji}
      </div>
      <style>
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      </style>
    `,
    className: '',
    iconSize: [35, 35],
    iconAnchor: [17.5, 17.5],
    popupAnchor: [0, -17.5],
  });
};

export default function MapComponent() {
  const [isMounted, setIsMounted] = useState(false);
  const [bencanaData, setBencanaData] = useState<BencanaData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    fetchBencanaData();
  }, []);

  const fetchBencanaData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://data.bnpb.go.id/api/bencana/latest');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      
      // Filter data yang memiliki koordinat valid
      const validData = data.data.filter((item: BencanaData) => 
        item.latitude && item.longitude && 
        !isNaN(parseFloat(item.latitude)) && 
        !isNaN(parseFloat(item.longitude))
      );

      setBencanaData(validData);
      setError(null);
    } catch (err) {
      console.error('Error fetching bencana data:', err);
      setError('Gagal memuat data bencana. Menggunakan data contoh.');
      
      // Fallback ke data dummy jika API gagal
      setBencanaData([
        {
          id: '1',
          tanggal: '2025-12-10',
          jenis_bencana: 'Banjir',
          lokasi: 'Jakarta Utara',
          provinsi: 'DKI Jakarta',
          latitude: '-6.2088',
          longitude: '106.8456',
          kronologi: 'Banjir akibat hujan deras',
          meninggal: '1',
          luka: '45',
          mengungsi: '120',
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) {
    return (
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="text-gray-600">Memuat data bencana...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <MapContainer
        center={[-2.5, 118.0]}
        zoom={5}
        style={{ height: '500px', width: '100%', borderRadius: '12px' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {bencanaData.map((bencana) => {
          const lat = parseFloat(bencana.latitude);
          const lng = parseFloat(bencana.longitude);

          if (isNaN(lat) || isNaN(lng)) return null;

          return (
            <div key={bencana.id}>
              {/* Marker */}
              <Marker
                position={[lat, lng]}
                icon={getMarkerIcon(bencana.jenis_bencana)}
              >
                <Popup className="custom-popup">
                  <div className="space-y-2 min-w-[250px]">
                    <div className="border-b border-gray-200 pb-2">
                      <h3 className="font-bold text-gray-800 text-base">{bencana.jenis_bencana}</h3>
                      <p className="text-xs text-gray-500">{bencana.tanggal}</p>
                    </div>
                    
                    <div className="text-xs text-gray-700 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="font-semibold">Lokasi:</span>
                        <span className="text-right">{bencana.lokasi}, {bencana.provinsi}</span>
                      </div>
                      
                      {bencana.meninggal && parseInt(bencana.meninggal) > 0 && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Meninggal:</span>
                          <span className="text-red-600 font-bold">{bencana.meninggal} orang</span>
                        </div>
                      )}
                      
                      {bencana.hilang && parseInt(bencana.hilang) > 0 && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Hilang:</span>
                          <span className="text-orange-600 font-bold">{bencana.hilang} orang</span>
                        </div>
                      )}
                      
                      {bencana.luka && parseInt(bencana.luka) > 0 && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Luka-luka:</span>
                          <span className="text-yellow-600 font-bold">{bencana.luka} orang</span>
                        </div>
                      )}
                      
                      {bencana.mengungsi && parseInt(bencana.mengungsi) > 0 && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Mengungsi:</span>
                          <span className="text-blue-600 font-bold">{bencana.mengungsi} orang</span>
                        </div>
                      )}
                      
                      {bencana.kerusakan_rumah && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Kerusakan Rumah:</span>
                          <span>{bencana.kerusakan_rumah}</span>
                        </div>
                      )}
                      
                      {bencana.kronologi && (
                        <div className="pt-2 border-t border-gray-200">
                          <p className="text-xs text-gray-600">{bencana.kronologi}</p>
                        </div>
                      )}
                    </div>

                    <a 
                      href={`https://dibi.bnpb.go.id/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full mt-2 bg-primary text-white text-xs py-2 rounded text-center hover:bg-primary/90 transition-colors"
                    >
                      Lihat Detail di BNPB
                    </a>
                  </div>
                </Popup>
              </Marker>

              {/* Circle untuk area terdampak */}
              <Circle
                center={[lat, lng]}
                radius={10000}
                pathOptions={{
                  color: '#EF4444',
                  fillColor: '#EF4444',
                  fillOpacity: 0.1,
                  weight: 2,
                }}
              />
            </div>
          );
        })}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-[1000] text-xs">
        <h4 className="font-bold text-gray-800 mb-2">Legenda</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#0EA5E9]"></div>
            <span>Banjir</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#F59E0B]"></div>
            <span>Kebakaran</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#EF4444]"></div>
            <span>Gempa Bumi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#8B5CF6]"></div>
            <span>Tanah Longsor</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#10B981]"></div>
            <span>Cuaca Ekstrem</span>
          </div>
        </div>
        <p className="text-[10px] text-gray-500 mt-2">Data: BNPB Indonesia</p>
      </div>
    </div>
  );
}