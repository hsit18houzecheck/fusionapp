"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ToggleSwitch } from "@/components/ui/toggle-switch";
import { MapLayerToggleProps } from "../types";



export default function MapLayerToggle({
  onToggleChange,
  mapLayerLabels,
  className,
}: MapLayerToggleProps) {
  const [showToday, setShowToday] = useState(false);
  const [showCoverage, setShowCoverage] = useState(false);
  const [showPast, setShowPast] = useState(true);

  // Notify parent whenever toggles change
  useEffect(() => {
    onToggleChange("today", showToday);
  }, [showToday, onToggleChange]);

  useEffect(() => {
    onToggleChange("coverage", showCoverage);
  }, [showCoverage, onToggleChange]);

  useEffect(() => {
    onToggleChange("past", showPast);
  }, [showPast, onToggleChange]);

  return (
    <div
      className={cn(
        "absolute left-4 bottom-4 z-2 h-35.5 md:h-auto",
        "flex flex-col md:flex-row justify-center md:items-center gap-3 rounded-2xl",
        "bg-yellow-900/80 backdrop-blur-sm text-yellow-100/80 px-5 py-2.5",
        "shadow-lg",
        className
      )}
    >
      <ToggleSwitch
        label={mapLayerLabels.today}
        checked={showToday}
        onChange={setShowToday}
        className="justify-between w-full md:w-fit"
      />

      <span className="w-full md:w-px md:h-7.75 h-px md:py-2.5 bg-peach-500" />

      <ToggleSwitch
        label={mapLayerLabels.coverage}
        checked={showCoverage}
        onChange={setShowCoverage}
        className="justify-between w-full md:w-fit"
      />

      <span className="w-full md:w-px md:h-7.75 h-px md:py-2.5 bg-peach-500" />

      <ToggleSwitch
        label={mapLayerLabels.past}
        checked={showPast}
        onChange={setShowPast}
        className="justify-between w-full md:w-fit"
      />
    </div>
  );
}
