"use client";

import { useEffect, useState } from "react";
import DailyList from "../components/dailies/DailyList";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Dailies Column */}
      <div className="lg:col-span-1">
        <div className="hud-border rounded-lg bg-gray-900/40 backdrop-blur-sm p-6 h-full">
          <h2 className="text-2xl font-bold font-orbitron text-cyan-400 mb-6 border-b border-cyan-500/30 pb-2">
            Dailies
          </h2>
          <DailyList />
        </div>
      </div>

      {/* To-Dos Column (Placeholder) */}
      <div className="lg:col-span-1 opacity-50 pointer-events-none">
        <div className="hud-border rounded-lg bg-gray-900/40 backdrop-blur-sm p-6 h-full border-dashed border-gray-700">
          <h2 className="text-2xl font-bold font-orbitron text-gray-500 mb-6 border-b border-gray-700 pb-2">
            To-Dos
          </h2>
          <div className="text-center text-gray-500 italic mt-10">
            System Offline
          </div>
        </div>
      </div>

      {/* Habits Column (Placeholder) */}
      <div className="lg:col-span-1 opacity-50 pointer-events-none">
        <div className="hud-border rounded-lg bg-gray-900/40 backdrop-blur-sm p-6 h-full border-dashed border-gray-700">
          <h2 className="text-2xl font-bold font-orbitron text-gray-500 mb-6 border-b border-gray-700 pb-2">
            Habits
          </h2>
          <div className="text-center text-gray-500 italic mt-10">
            System Offline
          </div>
        </div>
      </div>
    </div>
  );
}
