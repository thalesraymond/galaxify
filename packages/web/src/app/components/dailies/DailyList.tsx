"use client";

import { useEffect, useState } from "react";
import { Daily, dailiesService } from "@/services/dailies.service";
import DailyItem from "./DailyItem";
import CreateDailyForm from "./CreateDailyForm";

export default function DailyList() {
  const [dailies, setDailies] = useState<Daily[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchDailies = async () => {
    try {
      const data = await dailiesService.getDailies();
      setDailies(data);
    } catch (err) {
      setError("Failed to load dailies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDailies();
  }, []);

  const handleDailyCreated = (newDaily: Daily) => {
    setDailies([...dailies, newDaily]);
    setShowCreateForm(false);
  };

  const handleDailyUpdated = (updatedDaily: Daily) => {
    setDailies(dailies.map((d) => (d.id === updatedDaily.id ? updatedDaily : d)));
  };

  const handleDailyDeleted = (id: string) => {
    setDailies(dailies.filter((d) => d.id !== id));
  };

  if (loading) return <div className="text-cyan-400 animate-pulse">Scanning...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <div className="space-y-4 mb-6">
        {dailies.map((daily) => (
          <DailyItem
            key={daily.id}
            daily={daily}
            onUpdate={handleDailyUpdated}
            onDelete={handleDailyDeleted}
          />
        ))}
        {dailies.length === 0 && !showCreateForm && (
            <div className="text-gray-400 text-center italic py-4">No active missions.</div>
        )}
      </div>

      {showCreateForm ? (
        <CreateDailyForm
          onSuccess={handleDailyCreated}
          onCancel={() => setShowCreateForm(false)}
        />
      ) : (
        <button
          onClick={() => setShowCreateForm(true)}
          className="w-full py-2 border-2 border-dashed border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors font-orbitron text-sm uppercase tracking-wider"
        >
          + Initialize New Mission
        </button>
      )}
    </div>
  );
}
