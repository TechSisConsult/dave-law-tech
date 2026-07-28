'use client';

import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  GeneratorFuelType,
  calculateGeneratorLoss,
  suggestLitersPerHour,
} from '@/lib/generatorCalculator';
import GeneratorForm from '@/components/generator/GeneratorForm';
import LossMeter from '@/components/generator/LossMeter';

export default function GeneratorCalculatorClient() {
  const [kva, setKva] = useState(3.5);
  const [fuelType, setFuelType] = useState<GeneratorFuelType>('petrol');
  const [litersPerHour, setLitersPerHour] = useState(() =>
    suggestLitersPerHour(3.5, 'petrol'),
  );
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [fuelPricePerLiter, setFuelPricePerLiter] = useState(0);
  const [annualMaintenanceCost, setAnnualMaintenanceCost] = useState(60000);

  const handleKvaChange = (v: number) => {
    setKva(v);
    setLitersPerHour(suggestLitersPerHour(v, fuelType));
  };

  const handleFuelTypeChange = (v: GeneratorFuelType) => {
    setFuelType(v);
    setLitersPerHour(suggestLitersPerHour(kva, v));
  };

  const result = useMemo(
    () =>
      calculateGeneratorLoss({
        litersPerHour,
        hoursPerDay,
        daysPerWeek,
        fuelPricePerLiter,
        annualMaintenanceCost,
      }),
    [
      litersPerHour,
      hoursPerDay,
      daysPerWeek,
      fuelPricePerLiter,
      annualMaintenanceCost,
    ],
  );

  return (
    <main className="bg-dl-cream dark:bg-dl-darker min-h-screen transition-colors">
      <section className="bg-dl-gradient text-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-14">
          <span className="text-xs font-semibold tracking-widest text-dl-orange-light uppercase">
            Generator Loss Calculator
          </span>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mt-3 max-w-xl">
            See what your generator is really costing you.
          </h1>
          <p className="text-white/60 mt-3 max-w-lg">
            Fill in your actual numbers below — the total updates as you go.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-12 grid lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GeneratorForm
            kva={kva}
            fuelType={fuelType}
            litersPerHour={litersPerHour}
            hoursPerDay={hoursPerDay}
            daysPerWeek={daysPerWeek}
            fuelPricePerLiter={fuelPricePerLiter}
            annualMaintenanceCost={annualMaintenanceCost}
            onKvaChange={handleKvaChange}
            onFuelTypeChange={handleFuelTypeChange}
            onLitersPerHourChange={setLitersPerHour}
            onHoursPerDayChange={setHoursPerDay}
            onDaysPerWeekChange={setDaysPerWeek}
            onFuelPriceChange={setFuelPricePerLiter}
            onMaintenanceChange={setAnnualMaintenanceCost}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <LossMeter result={result} />
        </motion.div>
      </section>
    </main>
  );
}
