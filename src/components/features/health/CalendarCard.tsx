"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const healthEvents = [
  { date: 10, month: 11, year: 2025, title: "Hari Kesehatan Nasional" },
  { date: 12, month: 11, year: 2025, title: "Hari Diabetes Sedunia" },
  { date: 17, month: 11, year: 2025, title: "Hari Prematuritas Sedunia" },
  { date: 19, month: 11, year: 2025, title: "Hari Toilet Sedunia" },
  { date: 25, month: 11, year: 2025, title: "Hari Ibu Nasional" },
];

export default function CalendarCard() {
  const [currentDate] = useState(new Date());
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const hasEvent = (day: number) => {
    return healthEvents.find(
      (event) =>
        event.date === day &&
        event.month === currentMonth &&
        event.year === currentYear
    );
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="aspect-square" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const event = hasEvent(day);
    const isToday = day === currentDate.getDate();

    days.push(
      <div
        key={day}
        className="aspect-square flex items-center justify-center relative"
      >
        <div
          className={`w-full h-full flex items-center justify-center text-sm font-medium rounded-lg transition-all cursor-pointer ${
            isToday
              ? "bg-teal-600 text-white font-bold"
              : "hover:bg-gray-100 text-gray-800"
          }`}
          title={event?.title}
        >
          {day}
          {/* Dot indicator untuk event */}
          {event && !isToday && (
            <span className="absolute bottom-1 w-1.5 h-1.5 bg-teal-600 rounded-full" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-1">
        KALENDER KESEHATAN
      </h3>
      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
        Jadwal dan peringatan hari-hari penting kesehatan nasional dan internasional yang diperingati oleh Kementerian Kesehatan RI.
      </p>

      <Card className="border border-gray-200 bg-white rounded-xl md:rounded-2xl">
        <CardContent className="p-4 md:p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h4 className="text-base md:text-lg font-bold text-gray-800">
              {monthNames[currentMonth]} {currentYear}
            </h4>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
            {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-gray-600 py-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 mb-4 md:mb-6">
            {days}
          </div>

          {/* Legend */}
          <div className="space-y-2 pt-3 md:pt-4 border-t border-gray-200">
            <h5 className="text-xs font-semibold text-gray-700 mb-2">
              Hari Kesehatan Bulan Ini:
            </h5>
            {healthEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-3 h-3 rounded bg-teal-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-800">
                    {event.date} {monthNames[event.month]} - {event.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}