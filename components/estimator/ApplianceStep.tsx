"use client";

import { motion } from "motion/react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { APPLIANCES, ApplianceKey, ApplianceSelection } from "@/lib/estimator";

interface Props {
  selections: Record<ApplianceKey, ApplianceSelection>;
  onChange: (key: ApplianceKey, patch: Partial<ApplianceSelection>) => void;
}

const CATEGORIES = ["Kitchen & Cooling", "Comfort & Entertainment", "Office & Devices", "Heavy Duty"] as const;

export default function ApplianceStep({ selections, onChange }: Props) {
  return (
    <div className="space-y-10">
      {CATEGORIES.map((category) => (
        <div key={category}>
          <h3 className="font-display font-semibold text-dl-dark text-lg mb-4">{category}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {APPLIANCES.filter((a) => a.category === category).map((spec) => {
              const sel = selections[spec.key];
              const active = sel.quantity > 0;
              return (
                <motion.div
                  key={spec.key}
                  layout
                  className={`rounded-xl border p-4 transition-colors ${
                    active ? "border-dl-green bg-dl-green/5" : "border-dl-dark/10 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-dl-ink">{spec.label}</p>
                      <p className="text-xs text-dl-ink/40 mt-0.5">{spec.wattage}W typical</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onChange(spec.key, { quantity: Math.max(0, sel.quantity - 1) })}
                        className="h-7 w-7 rounded-full border border-dl-dark/15 flex items-center justify-center text-dl-ink/60 hover:bg-dl-dark/5"
                        aria-label={`Remove one ${spec.label}`}
                      >
                        <HiMinus size={14} />
                      </button>
                      <span className="w-5 text-center font-mono text-sm">{sel.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onChange(spec.key, { quantity: sel.quantity + 1 })}
                        className="h-7 w-7 rounded-full border border-dl-dark/15 flex items-center justify-center text-dl-ink/60 hover:bg-dl-dark/5"
                        aria-label={`Add one ${spec.label}`}
                      >
                        <HiPlus size={14} />
                      </button>
                    </div>
                  </div>

                  {active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 pt-3 border-t border-dl-dark/10"
                    >
                      <label className="text-xs text-dl-ink/50 flex items-center justify-between">
                        Hours used per day
                        <span className="font-mono text-dl-green font-semibold">{sel.hoursPerDay}h</span>
                      </label>
                      <input
                        type="range"
                        min={0.5}
                        max={spec.maxHours}
                        step={0.5}
                        value={sel.hoursPerDay}
                        onChange={(e) => onChange(spec.key, { hoursPerDay: Number(e.target.value) })}
                        className="w-full mt-2 accent-dl-orange"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
