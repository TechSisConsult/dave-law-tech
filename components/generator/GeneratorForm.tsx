"use client";

import { GENERATOR_SIZES_KVA, GeneratorFuelType } from "@/lib/generatorCalculator";

interface Props {
  kva: number;
  fuelType: GeneratorFuelType;
  litersPerHour: number;
  hoursPerDay: number;
  daysPerWeek: number;
  fuelPricePerLiter: number;
  annualMaintenanceCost: number;
  onKvaChange: (v: number) => void;
  onFuelTypeChange: (v: GeneratorFuelType) => void;
  onLitersPerHourChange: (v: number) => void;
  onHoursPerDayChange: (v: number) => void;
  onDaysPerWeekChange: (v: number) => void;
  onFuelPriceChange: (v: number) => void;
  onMaintenanceChange: (v: number) => void;
}

export default function GeneratorForm({
  kva,
  fuelType,
  litersPerHour,
  hoursPerDay,
  daysPerWeek,
  fuelPricePerLiter,
  annualMaintenanceCost,
  onKvaChange,
  onFuelTypeChange,
  onLitersPerHourChange,
  onHoursPerDayChange,
  onDaysPerWeekChange,
  onFuelPriceChange,
  onMaintenanceChange,
}: Props) {
  return (
    <div className="rounded-2xl bg-white border border-dl-dark/10 p-6 lg:p-8 space-y-8">
      <div>
        <label className="text-sm font-medium text-dl-ink/70">Generator size</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {GENERATOR_SIZES_KVA.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => onKvaChange(size)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                kva === size ? "bg-dl-dark text-white border-dl-dark" : "border-dl-dark/15 text-dl-ink/60 hover:border-dl-dark/30"
              }`}
            >
              {size}kVA
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-dl-ink/70">Fuel type</label>
        <div className="flex gap-2 mt-2">
          {(["petrol", "diesel"] as GeneratorFuelType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onFuelTypeChange(type)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border capitalize transition-colors ${
                fuelType === type ? "bg-dl-orange-gradient border-transparent text-dl-dark" : "border-dl-dark/15 text-dl-ink/60 hover:border-dl-dark/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-dl-ink/70 flex items-center justify-between">
          Fuel used per hour
          <span className="font-mono text-dl-green font-semibold">{litersPerHour} L/hr</span>
        </label>
        <p className="text-xs text-dl-ink/40 mt-1">
          Auto-suggested for your generator size — adjust it if you know your actual consumption.
        </p>
        <input
          type="range"
          min={0.2}
          max={8}
          step={0.1}
          value={litersPerHour}
          onChange={(e) => onLitersPerHourChange(Number(e.target.value))}
          className="w-full mt-2 accent-dl-orange"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-dl-ink/70 flex items-center justify-between">
            Hours run per day
            <span className="font-mono text-dl-green font-semibold">{hoursPerDay}h</span>
          </label>
          <input
            type="range"
            min={0.5}
            max={24}
            step={0.5}
            value={hoursPerDay}
            onChange={(e) => onHoursPerDayChange(Number(e.target.value))}
            className="w-full mt-2 accent-dl-orange"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-dl-ink/70 flex items-center justify-between">
            Days run per week
            <span className="font-mono text-dl-green font-semibold">{daysPerWeek}</span>
          </label>
          <input
            type="range"
            min={1}
            max={7}
            step={1}
            value={daysPerWeek}
            onChange={(e) => onDaysPerWeekChange(Number(e.target.value))}
            className="w-full mt-2 accent-dl-orange"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-dl-ink/70">Fuel price per litre (₦)</label>
          <input
            type="number"
            min={0}
            placeholder="e.g. 950"
            value={fuelPricePerLiter || ""}
            onChange={(e) => onFuelPriceChange(Number(e.target.value))}
            className="w-full mt-2 rounded-lg border border-dl-dark/15 px-4 py-2.5 font-mono text-dl-ink focus:outline-none focus:ring-2 focus:ring-dl-green/40"
          />
          <p className="text-xs text-dl-ink/40 mt-1">Type today&apos;s price at your usual filling station.</p>
        </div>
        <div>
          <label className="text-sm font-medium text-dl-ink/70">Yearly servicing &amp; repairs (₦)</label>
          <input
            type="number"
            min={0}
            value={annualMaintenanceCost}
            onChange={(e) => onMaintenanceChange(Number(e.target.value))}
            className="w-full mt-2 rounded-lg border border-dl-dark/15 px-4 py-2.5 font-mono text-dl-ink focus:outline-none focus:ring-2 focus:ring-dl-green/40"
          />
          <p className="text-xs text-dl-ink/40 mt-1">Oil changes, spare parts, mechanic call-outs — a rough yearly total.</p>
        </div>
      </div>
    </div>
  );
}
