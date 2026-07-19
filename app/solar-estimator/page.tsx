"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import {
  APPLIANCES,
  ApplianceKey,
  ApplianceSelection,
  BatteryType,
  calculateSystem,
} from "@/lib/estimator";
import StepIndicator from "@/components/estimator/StepIndicator";
import ApplianceStep from "@/components/estimator/ApplianceStep";
import BatteryStep from "@/components/estimator/BatteryStep";
import ResultsPanel from "@/components/estimator/ResultsPanel";

function buildInitialSelections(): Record<ApplianceKey, ApplianceSelection> {
  const initial = {} as Record<ApplianceKey, ApplianceSelection>;
  for (const spec of APPLIANCES) {
    initial[spec.key] = { key: spec.key, quantity: 0, hoursPerDay: spec.defaultHours };
  }
  return initial;
}

export default function SolarEstimatorPage() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState(buildInitialSelections);
  const [batteryType, setBatteryType] = useState<BatteryType>("lithium");
  const [autonomyDays, setAutonomyDays] = useState(1);

  const hasAnySelection = useMemo(
    () => Object.values(selections).some((s) => s.quantity > 0),
    [selections]
  );

  const result = useMemo(
    () => calculateSystem(Object.values(selections), batteryType, autonomyDays),
    [selections, batteryType, autonomyDays]
  );

  const handleApplianceChange = (key: ApplianceKey, patch: Partial<ApplianceSelection>) => {
    setSelections((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }));
  };

  const goNext = () => setStep((s) => Math.min(s + 1, 2));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <main className="bg-dl-cream min-h-screen">
      <section className="bg-dl-gradient text-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-14">
          <span className="text-xs font-semibold tracking-widest text-dl-orangeLight uppercase">
            Free Solar Estimator
          </span>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mt-3 max-w-xl">
            Tell us what you run. We&apos;ll tell you what to buy.
          </h1>
          <div className="mt-8">
            <StepIndicator current={step} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <ApplianceStep selections={selections} onChange={handleApplianceChange} />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <BatteryStep
                batteryType={batteryType}
                autonomyDays={autonomyDays}
                onBatteryTypeChange={setBatteryType}
                onAutonomyChange={setAutonomyDays}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <ResultsPanel result={result} />
            </motion.div>
          )}
        </AnimatePresence>

        {step < 2 && (
          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm font-medium text-dl-ink/50 disabled:opacity-0"
            >
              <HiOutlineArrowLeft /> Back
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={step === 0 && !hasAnySelection}
              className="inline-flex items-center gap-2 rounded-full bg-dl-orange-gradient px-7 py-3 font-semibold text-dl-dark shadow-meter-glow hover:brightness-105 transition disabled:opacity-40 disabled:pointer-events-none"
            >
              {step === 0 ? "Next: Battery Setup" : "See My Results"} <HiOutlineArrowRight />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
