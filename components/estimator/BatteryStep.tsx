"use client";

import { motion } from "motion/react";
import { BatteryType } from "@/lib/estimator";

interface Props {
  batteryType: BatteryType;
  autonomyDays: number;
  onBatteryTypeChange: (type: BatteryType) => void;
  onAutonomyChange: (days: number) => void;
}

export default function BatteryStep({
  batteryType,
  autonomyDays,
  onBatteryTypeChange,
  onAutonomyChange,
}: Props) {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="font-display font-semibold text-dl-dark text-lg mb-1">Battery type</h3>
        <p className="text-sm text-dl-ink/50 mb-4">
          Lithium costs more upfront but discharges deeper and lasts longer. Tubular is more affordable but needs more capacity for the same usable power.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {(["lithium", "tubular"] as BatteryType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onBatteryTypeChange(type)}
              className={`text-left rounded-xl border p-5 transition-colors ${
                batteryType === type ? "border-dl-green bg-dl-green/5" : "border-dl-dark/10 bg-white hover:border-dl-dark/20"
              }`}
            >
              <p className="font-display font-semibold capitalize text-dl-dark">{type}</p>
              <p className="text-xs text-dl-ink/50 mt-1">
                {type === "lithium" ? "Deeper discharge · longer lifespan · compact" : "Lower cost · proven & widely serviced locally"}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-semibold text-dl-dark text-lg mb-1">Backup autonomy</h3>
        <p className="text-sm text-dl-ink/50 mb-4">How many days should your battery carry you with no sun at all?</p>
        <div className="flex gap-3">
          {[1, 2, 3].map((days) => (
            <motion.button
              key={days}
              type="button"
              onClick={() => onAutonomyChange(days)}
              whileTap={{ scale: 0.96 }}
              className={`px-6 py-3 rounded-full border font-semibold text-sm transition-colors ${
                autonomyDays === days
                  ? "bg-dl-orange-gradient border-transparent text-dl-dark"
                  : "border-dl-dark/15 text-dl-ink/60 hover:border-dl-dark/30"
              }`}
            >
              {days} {days === 1 ? "day" : "days"}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
