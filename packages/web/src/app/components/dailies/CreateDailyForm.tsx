"use client";

import { useState } from "react";
import { dailiesService, Daily } from "@/services/dailies.service";

interface CreateDailyFormProps {
  onSuccess: (daily: Daily) => void;
  onCancel: () => void;
}

export default function CreateDailyForm({ onSuccess, onCancel }: CreateDailyFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [resetCounter, setResetCounter] = useState<"daily" | "weekly" | "monthly">("daily");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      const newDaily = await dailiesService.createDaily({
        title,
        description,
        resetCounter,
      });
      onSuccess(newDaily);
    } catch (error) {
      console.error("Failed to create daily", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-4 animate-in fade-in slide-in-from-top-2">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Mission Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-900/50 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
          autoFocus
        />
      </div>
      
      <div className="mb-3">
        <textarea
          placeholder="Description (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-gray-900/50 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none resize-none h-16"
        />
      </div>

      <div className="mb-4">
        <label className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Reset Frequency</label>
        <div className="flex gap-2">
            {(['daily', 'weekly', 'monthly'] as const).map((type) => (
                <button
                    key={type}
                    type="button"
                    onClick={() => setResetCounter(type)}
                    className={`px-3 py-1 rounded text-xs uppercase transition-colors ${
                        resetCounter === type
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                        : "bg-gray-800 text-gray-500 border border-gray-700 hover:border-gray-500"
                    }`}
                >
                    {type}
                </button>
            ))}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting || !title.trim()}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Initializing..." : "Confirm"}
        </button>
      </div>
    </form>
  );
}
