"use client";

import { useState } from "react";
import { Daily, dailiesService } from "@/services/dailies.service";

interface DailyItemProps {
  daily: Daily;
  onUpdate: (daily: Daily) => void;
  onDelete: (id: string) => void;
}

export default function DailyItem({ daily, onUpdate, onDelete }: DailyItemProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const isChecked = () => {
      // Simple check for today - in a real app we'd check the date properly against the reset counter
      // For now, let's assume if the checks array has an entry for today (or recently), it's checked.
      // Ideally the backend should tell us if it's "completed" for the current period.
      // Based on the model, checks is an array of dates.
      // Let's just check if the last check was today.
      if (!daily.checks || daily.checks.length === 0) return false;
      const lastCheck = new Date(daily.checks[daily.checks.length - 1]);
      const today = new Date();
      return lastCheck.toDateString() === today.toDateString();
  };

  const handleCheck = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    try {
      const updatedDaily = await dailiesService.checkDaily(daily.id);
      onUpdate(updatedDaily);
    } catch (error) {
      console.error("Failed to check daily", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Abort this mission?")) return;
    try {
      await dailiesService.deleteDaily(daily.id);
      onDelete(daily.id);
    } catch (error) {
      console.error("Failed to delete daily", error);
    }
  };

  const checked = isChecked();

  return (
    <div className={`relative group p-4 rounded-md border transition-all duration-300 ${
        checked 
        ? "bg-cyan-900/20 border-cyan-500/50" 
        : "bg-gray-800/50 border-gray-700 hover:border-cyan-400/50"
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 flex-grow">
            <button
                onClick={handleCheck}
                disabled={isProcessing}
                className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                    checked
                    ? "bg-cyan-500 border-cyan-500 text-gray-900"
                    : "bg-transparent border-gray-500 hover:border-cyan-400"
                }`}
            >
                {checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                )}
            </button>
            <div>
                <h3 className={`font-medium ${checked ? "text-gray-400 line-through" : "text-gray-100"}`}>
                    {daily.title}
                </h3>
                {daily.description && (
                    <p className="text-xs text-gray-500 mt-1">{daily.description}</p>
                )}
            </div>
        </div>
        
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
                onClick={handleDelete}
                className="text-gray-500 hover:text-red-400 transition-colors"
                title="Delete"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
      </div>
      
      <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
          <span className="uppercase tracking-wider">{daily.resetCounter}</span>
          <span>Streak: {daily.counter}</span>
      </div>
    </div>
  );
}
