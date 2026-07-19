"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import AnimatedNumber from "./AnimatedNumber";
import { SizingResult } from "@/lib/estimator";

export default function ResultsPanel({ result }: { result: SizingResult }) {
  const cards = [
    { label: "Daily energy use", value: result.totalDailyKWh, decimals: 1, unit: "kWh / day" },
    { label: "Recommended inverter", value: result.recommendedInverterKVA, decimals: 1, unit: "kVA" },
    { label: "Recommended battery bank", value: result.recommendedBatteryKWh, decimals: 1, unit: "kWh" },
    { label: "Recommended panel array", value: result.recommendedPanelWatts / 1000, decimals: 2, unit: `kW (${result.recommendedPanelCount} × 400W panels)` },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-2 gap-5"
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-dl-dark text-white p-6 shadow-meter-glow"
          >
            <p className="text-xs uppercase tracking-wide text-white/50">{card.label}</p>
            <p className="font-mono text-3xl font-semibold text-dl-orangeLight mt-2">
              <AnimatedNumber value={card.value} decimals={card.decimals} />
              <span className="text-sm text-white/50 ml-2 font-body">{card.unit}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 rounded-2xl border border-dl-orange/30 bg-dl-orange/5 p-5 flex gap-3"
      >
        <HiOutlineExclamationCircle className="text-dl-orange text-xl shrink-0 mt-0.5" />
        <p className="text-sm text-dl-ink/70 leading-relaxed">
          <strong className="text-dl-dark">This is an estimate</strong>, based on standard appliance
          wattages — not a final specification. Your wiring condition, roof orientation, voltage
          stability and actual appliance nameplates can change these numbers. A{" "}
          <strong className="text-dl-dark">free on-site inspection</strong> from Davelaw Technologies
          confirms the exact system before you spend anything.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-6 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/contact?intent=inspection"
          className="inline-flex items-center justify-center rounded-full bg-dl-orange-gradient px-7 py-3.5 font-semibold text-dl-dark shadow-meter-glow hover:brightness-105 transition"
        >
          Book My Free Inspection
        </Link>
        <Link
          href="/generator-calculator"
          className="inline-flex items-center justify-center rounded-full border border-dl-dark/15 px-7 py-3.5 font-semibold text-dl-ink/70 hover:bg-dl-dark/5 transition"
        >
          See What Your Generator Is Costing You
        </Link>
      </motion.div>
    </div>
  );
}
