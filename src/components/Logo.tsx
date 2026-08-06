import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Precision Apple-minimal SVG Sun Emblem */}
      <div className="relative w-8 h-8 flex items-center justify-center bg-[#002b49] rounded-lg shrink-0">
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current text-white">
          <circle cx="50" cy="50" r="20" fill="white" stroke="none" />
          <circle cx="50" cy="50" r="28" stroke="#e5a900" strokeWidth="4" fill="none" />
          {/* 8 Primary Spikes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 44 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 44 * Math.sin((angle * Math.PI) / 180)}
              stroke={i % 2 === 0 ? "#ffffff" : "#e5a900"}
              strokeWidth="5"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
      <span className="font-semibold text-xl tracking-tight text-[#002b49]">
        Swift<span className="text-[#0066cc]">Solar</span>
      </span>
    </div>
  );
}
