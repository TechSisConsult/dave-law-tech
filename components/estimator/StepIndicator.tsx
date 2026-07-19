"use client";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const STEPS = ["Select Appliances", "Battery Setup", "Your System"];

export default function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                i <= current ? "bg-dl-orange text-dl-dark" : "bg-white/10 text-white/40"
              }`}
            >
              {i + 1}
            </div>
            <span
              className={`hidden sm:inline text-sm font-medium ${
                i <= current ? "text-white" : "text-white/40"
              }`}
            >
              {label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <HiOutlineArrowNarrowRight
              className={i < current ? "text-dl-orange" : "text-white/20"}
            />
          )}
        </div>
      ))}
    </div>
  );
}
