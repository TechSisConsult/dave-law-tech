// Generator Loss Calculator — sizing & cost logic
//
// Fuel consumption figures below are typical, moderate-load real-world
// averages for small portable/domestic gensets in Nigeria, not lab specs —
// small petrol gensets are notably less fuel-efficient per kWh than large
// industrial diesel plants because of fixed engine losses at partial load.
// Diesel figures assume roughly 45-55% less fuel burn than an equivalent
// petrol unit, consistent with reported real-world comparisons. Users can
// (and should) override the auto-suggested liters/hour with their own
// actual fill-up experience — that number is always more accurate than a
// generic table.
//
// The solar-equivalent installed cost (₦/kW) is a documented industry
// approximation for a full residential system (panels + inverter + battery
// + installation) as of 2026 Nigerian market pricing — an exact quote
// always requires the Solar Estimator + a free inspection.

import { round1 } from "./estimator";

export type GeneratorFuelType = "petrol" | "diesel";

export const GENERATOR_SIZES_KVA = [1, 1.5, 2, 2.5, 3, 3.5, 5, 7.5, 10];

// Approx litres/hour at typical/moderate operating load, petrol baseline
const PETROL_LPH: Record<number, number> = {
  1: 0.6,
  1.5: 0.9,
  2: 1.1,
  2.5: 1.3,
  3: 1.7,
  3.5: 1.9,
  5: 2.3,
  7.5: 3.2,
  10: 4.0,
};

const DIESEL_FACTOR = 0.55; // diesel typically burns ~45-55% less than petrol equivalent

export function suggestLitersPerHour(kva: number, fuelType: GeneratorFuelType): number {
  const petrol = PETROL_LPH[kva] ?? 1.7;
  return fuelType === "diesel" ? round1(petrol * DIESEL_FACTOR) : petrol;
}

// Documented approximation: all-in installed cost per kW of solar capacity
// for a typical Nigerian residential system in 2026 (panels + inverter +
// battery + installation labour).
export const SOLAR_INSTALLED_COST_PER_KW = 750000;

export interface GeneratorLossInputs {
  litersPerHour: number;
  hoursPerDay: number;
  daysPerWeek: number;
  fuelPricePerLiter: number;
  annualMaintenanceCost: number;
}

export interface GeneratorLossResult {
  annualLiters: number;
  annualFuelCost: number;
  annualMaintenanceCost: number;
  totalAnnualCost: number;
  threeYearCost: number;
  equivalentSolarKW: number;
}

export function calculateGeneratorLoss(inputs: GeneratorLossInputs): GeneratorLossResult {
  const { litersPerHour, hoursPerDay, daysPerWeek, fuelPricePerLiter, annualMaintenanceCost } = inputs;

  const weeklyLiters = litersPerHour * hoursPerDay * daysPerWeek;
  const annualLiters = weeklyLiters * 52;
  const annualFuelCost = annualLiters * fuelPricePerLiter;
  const totalAnnualCost = annualFuelCost + annualMaintenanceCost;
  const threeYearCost = totalAnnualCost * 3;
  const equivalentSolarKW = threeYearCost / SOLAR_INSTALLED_COST_PER_KW;

  return {
    annualLiters: Math.round(annualLiters),
    annualFuelCost: Math.round(annualFuelCost),
    annualMaintenanceCost: Math.round(annualMaintenanceCost),
    totalAnnualCost: Math.round(totalAnnualCost),
    threeYearCost: Math.round(threeYearCost),
    equivalentSolarKW: round1(equivalentSolarKW),
  };
}
