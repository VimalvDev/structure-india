"use client";

import { useState, useRef } from "react";
import World from "@svg-maps/world";
import India from "@svg-maps/india";
import { panIndiaStates } from "@/lib/data/company-stats";

export function InteractiveWorldMap() {
  const [hoveredState, setHoveredState] = useState<{ name: string; status: string } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mapRef = useRef<SVGSVGElement>(null);

  const getStateStatus = (id: string) => {
    const entry = panIndiaStates.find((s) => s.code.toLowerCase() === id.toLowerCase());
    return entry ? entry.status : "unserved";
  };

  const getStateName = (id: string) => {
    const entry = panIndiaStates.find((s) => s.code.toLowerCase() === id.toLowerCase());
    return entry ? entry.name : id;
  };

  const handleMouseMove = (e: React.MouseEvent<SVGElement>) => {
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<SVGPathElement>) => {
    const id = e.currentTarget.id;
    const name = e.currentTarget.getAttribute("name") || getStateName(id);
    const status = getStateStatus(id);
    setHoveredState({ name, status });
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  // The world map viewBox is "0 0 1010 666".
  // India is roughly located around x: 710-770, y: 290-400
  // So we crop the viewBox to frame India and its neighbors:
  const cropViewBox = "675 275 120 130";

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div 
        className="w-full overflow-hidden"
        style={{
          maskImage: "radial-gradient(circle at center, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 100%)"
        }}
      >
        <svg
          ref={mapRef}
          viewBox={cropViewBox}
          className="h-auto w-full stroke-surface-alt stroke-[0.2px]"
          aria-label="Map of India showing Structure India supply regions"
          role="img"
          onMouseMove={handleMouseMove}
        >
          {/* Base World Map - Exclude India */}
          {World.locations.map((location: any) => {
            if (location.id === "in") return null;
            return (
              <path
                key={location.id}
                id={location.id}
                name={location.name}
                d={location.path}
                className="fill-border/50"
                aria-hidden="true"
              />
            );
          })}

          {/* Overlaid India States */}
          {/* 
            We apply a transform to roughly scale and position the India states 
            onto the world map's India hole.
            World India width is ~60. India Map viewBox width is 668. Scale ≈ 0.09.
            Position x ≈ 708, y ≈ 292
          */}
          <g transform="translate(707.5, 292) scale(0.096)">
            {India.locations.map((location: any) => {
              const status = getStateStatus(location.id);
              let fillClass = "fill-border/70 hover:fill-border transition-colors duration-200 cursor-pointer";
              if (status === "hq") {
                fillClass = "fill-si-green hover:fill-si-green/90 transition-colors duration-200 cursor-pointer";
              } else if (status === "served") {
                fillClass = "fill-ash-red hover:fill-ash-red/90 transition-colors duration-200 cursor-pointer";
              }

              return (
                <path
                  key={location.id}
                  id={location.id}
                  name={location.name}
                  d={location.path}
                  className={fillClass}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  aria-label={`${location.name} - ${status === "hq" ? "Headquarters" : status === "served" ? "Served Region" : "Unserved Region"}`}
                />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Hover Tooltip */}
      {hoveredState && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-surface shadow-md"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y - 12,
          }}
        >
          {hoveredState.name}
          <div className="mt-0.5 text-[10px] uppercase text-ink-muted/80">
            {hoveredState.status === "hq" ? "Headquarters" : hoveredState.status === "served" ? "Served Region" : "Unserved"}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 p-3 text-xs font-medium">
        <span className="block h-2.5 w-2.5 rounded-full bg-si-green"></span>
        <span className="text-ink-muted">India</span>
      </div>
    </div>
  );
}
