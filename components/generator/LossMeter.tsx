"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HiOutlineTrendingDown, HiOutlineSun } from "react-icons/hi";
import AnimatedNumber from "@/components/estimator/AnimatedNumber";
import { GeneratorLossResult } from "@/lib/generatorCalculator";

function formatNaira(n: number) {
  return `₦${n.toLocaleString("en-NG")}`;
}

export default function LossMeter({ result }: { result: GeneratorLossResult }) {
  const hasInput = result.totalAnnualCost > 0;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-dl-dark text-white p-8 text-center shadow-meter-glow"
      >
        <p className="text-xs uppercase tracking-wide text-white/50 flex items-center justify-center gap-2">
          <HiOutlineTrendingDown className="text-dl-orange" /> What your generator costs you every year
        </p>
        <p className="font-mono text-5xl sm:text-6xl font-semibold text-dl-orangeLight mt-4">
          {hasInput ? (
            <>₦<AnimatedNumber value={result.totalAnnualCost} decimals={0} /></>
          ) : (
            "₦0"
          )}
        </p>
        <p className="text-sm text-white/50 mt-3">
          {result.annualLiters.toLocaleString("en-NG")} litres of fuel + servicing, every single year
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-4 mt-5">
        {[
          { label: "Annual fuel cost", value: result.annualFuelCost },
          { label: "Annual maintenance", value: result.annualMaintenanceCost },
          { label: "3-year total cost", value: result.threeYearCost },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="rounded-xl bg-white dark:bg-dl-dark border border-dl-dark/10 dark:border-white/10 p-5"
          >
            <p className="text-xs text-dl-ink/50 dark:text-white/50">{card.label}</p>
            <p className="font-mono text-xl font-semibold text-dl-dark dark:text-dl-orangeLight mt-1">
              {formatNaira(card.value)}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 rounded-2xl border-2 border-dl-green/40 bg-dl-green/5 p-7"
      >
        <div className="flex items-start gap-3">
          <HiOutlineSun className="text-dl-green text-2xl shrink-0 mt-0.5" />
          <div>
            <p className="font-display font-semibold text-dl-dark dark:text-white text-lg">
              That&apos;s roughly a{" "}
              <span className="text-dl-green">
                <AnimatedNumber value={result.equivalentSolarKW} decimals={1} />kW
              </span>{" "}
              solar system — one you&apos;d own outright instead of feeding fuel forever.
            </p>
            <p className="text-sm text-dl-ink/60 dark:text-white/60 mt-2 leading-relaxed">
              Based on what your generator costs over 3 years, at a typical Nigerian installed cost of
              about ₦750,000 per kW of solar capacity (panels + inverter + battery + installation). This
              is a directional comparison, not a formal quote — get an exact one with the Solar Estimator.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/solar-estimator"
          className="inline-flex items-center justify-center rounded-full bg-dl-orange-gradient px-7 py-3.5 font-semibold text-dl-dark shadow-meter-glow hover:brightness-105 transition"
        >
          Size My Solar System Instead
        </Link>
        <Link
          href="/contact?intent=inspection"
          className="inline-flex items-center justify-center rounded-full border border-dl-dark/15 dark:border-white/15 px-7 py-3.5 font-semibold text-dl-ink/70 dark:text-white/70 hover:bg-dl-dark/5 dark:hover:bg-white/5 transition"
        >
          Talk to Davelaw
        </Link>
      </motion.div>
    </div>
  );
}
