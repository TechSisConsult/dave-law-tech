// Solar Estimator — appliance database & sizing logic
//
// IMPORTANT: All wattages below are GENERIC industry-standard averages, not
// measured values for any specific appliance model. Compressor-based
// appliances (fridge, freezer, AC) are modelled with a duty cycle because
// their compressor only runs a fraction of each hour — this avoids
// oversizing the system. Every result screen must carry the inspection
// disclaimer; this file only produces an estimate.

export type ApplianceKey =
  | "fridge"
  | "freezer"
  | "ac1hp"
  | "ac1_5hp"
  | "fan"
  | "tv"
  | "bulb"
  | "laptop"
  | "phoneCharger"
  | "waterPump"
  | "iron"
  | "microwave"
  | "printer"
  | "router"
  | "washingMachine"
  | "desktop";

export interface ApplianceSpec {
  key: ApplianceKey;
  label: string;
  category: "Kitchen & Cooling" | "Comfort & Entertainment" | "Office & Devices" | "Heavy Duty";
  wattage: number; // nameplate running watts, per unit
  dutyCycle: number; // fraction of an "on" hour the compressor/motor actually draws full watts (1 = always drawing when on)
  surgeMultiplier: number; // startup surge as a multiple of running watts
  defaultHours: number; // sensible default hours/day
  maxHours: number;
}

export const APPLIANCES: ApplianceSpec[] = [
  { key: "fridge", label: "Refrigerator (200L)", category: "Kitchen & Cooling", wattage: 150, dutyCycle: 0.45, surgeMultiplier: 3, defaultHours: 24, maxHours: 24 },
  { key: "freezer", label: "Chest Freezer", category: "Kitchen & Cooling", wattage: 200, dutyCycle: 0.45, surgeMultiplier: 3, defaultHours: 24, maxHours: 24 },
  { key: "ac1hp", label: "Air Conditioner (1HP)", category: "Kitchen & Cooling", wattage: 900, dutyCycle: 0.5, surgeMultiplier: 2.5, defaultHours: 8, maxHours: 24 },
  { key: "ac1_5hp", label: "Air Conditioner (1.5HP)", category: "Kitchen & Cooling", wattage: 1200, dutyCycle: 0.5, surgeMultiplier: 2.5, defaultHours: 8, maxHours: 24 },
  { key: "fan", label: "Standing / Ceiling Fan", category: "Comfort & Entertainment", wattage: 75, dutyCycle: 1, surgeMultiplier: 1.2, defaultHours: 10, maxHours: 24 },
  { key: "tv", label: "LED TV (43\")", category: "Comfort & Entertainment", wattage: 80, dutyCycle: 1, surgeMultiplier: 1, defaultHours: 6, maxHours: 24 },
  { key: "bulb", label: "LED Bulb", category: "Comfort & Entertainment", wattage: 10, dutyCycle: 1, surgeMultiplier: 1, defaultHours: 6, maxHours: 24 },
  { key: "laptop", label: "Laptop + Charger", category: "Office & Devices", wattage: 65, dutyCycle: 1, surgeMultiplier: 1, defaultHours: 6, maxHours: 24 },
  { key: "phoneCharger", label: "Phone Charger", category: "Office & Devices", wattage: 10, dutyCycle: 1, surgeMultiplier: 1, defaultHours: 3, maxHours: 24 },
  { key: "router", label: "Wi-Fi Router", category: "Office & Devices", wattage: 15, dutyCycle: 1, surgeMultiplier: 1, defaultHours: 24, maxHours: 24 },
  { key: "desktop", label: "Desktop Computer", category: "Office & Devices", wattage: 200, dutyCycle: 1, surgeMultiplier: 1, defaultHours: 6, maxHours: 24 },
  { key: "printer", label: "Printer", category: "Office & Devices", wattage: 300, dutyCycle: 0.2, surgeMultiplier: 1.3, defaultHours: 1, maxHours: 8 },
  { key: "waterPump", label: "Water Pump (0.5HP)", category: "Heavy Duty", wattage: 750, dutyCycle: 1, surgeMultiplier: 3, defaultHours: 1, maxHours: 6 },
  { key: "iron", label: "Electric Iron", category: "Heavy Duty", wattage: 1000, dutyCycle: 0.6, surgeMultiplier: 1, defaultHours: 0.5, maxHours: 3 },
  { key: "microwave", label: "Microwave", category: "Heavy Duty", wattage: 1000, dutyCycle: 1, surgeMultiplier: 1, defaultHours: 0.3, maxHours: 3 },
  { key: "washingMachine", label: "Washing Machine", category: "Heavy Duty", wattage: 500, dutyCycle: 1, surgeMultiplier: 2, defaultHours: 1, maxHours: 4 },
];

export interface ApplianceSelection {
  key: ApplianceKey;
  quantity: number;
  hoursPerDay: number;
}

export type BatteryType = "lithium" | "tubular";

const BATTERY_DOD: Record<BatteryType, number> = {
  lithium: 0.9, // lithium iron phosphate — safe deep discharge
  tubular: 0.5, // lead-acid tubular — shallower discharge preserves lifespan
};

const INVERTER_TIERS_KVA = [1.5, 2.5, 3.5, 5, 7.5, 10, 15, 20];
const PANEL_WATTAGE = 400; // standard panel unit used for the "how many panels" figure
const PEAK_SUN_HOURS = 5; // conservative average across Nigeria
const SYSTEM_DERATE = 0.75; // dust, heat, wiring & inverter conversion losses
const INVERTER_EFFICIENCY = 0.92;
const POWER_FACTOR = 0.8; // converts watts to the VA an inverter is rated in
const SAFETY_MARGIN = 1.25; // 25% headroom on top of calculated peak load

export interface SizingResult {
  totalDailyKWh: number;
  totalRunningWatts: number;
  peakWatts: number;
  recommendedInverterKVA: number;
  recommendedBatteryKWh: number;
  recommendedPanelWatts: number;
  recommendedPanelCount: number;
}

export function calculateSystem(
  selections: ApplianceSelection[],
  batteryType: BatteryType,
  autonomyDays: number
): SizingResult {
  let totalDailyWh = 0;
  let totalRunningWatts = 0;
  let largestSurgeDelta = 0;

  for (const sel of selections) {
    const spec = APPLIANCES.find((a) => a.key === sel.key);
    if (!spec || sel.quantity <= 0) continue;

    const dailyWh = spec.wattage * spec.dutyCycle * sel.hoursPerDay * sel.quantity;
    totalDailyWh += dailyWh;

    const runningWatts = spec.wattage * sel.quantity;
    totalRunningWatts += runningWatts;

    const surgeDelta = spec.wattage * (spec.surgeMultiplier - 1);
    if (surgeDelta > largestSurgeDelta) largestSurgeDelta = surgeDelta;
  }

  const totalDailyKWh = totalDailyWh / 1000;
  const peakWatts = totalRunningWatts + largestSurgeDelta;

  const requiredVA = (peakWatts / POWER_FACTOR) * SAFETY_MARGIN;
  const recommendedInverterKVA =
    INVERTER_TIERS_KVA.find((tier) => tier * 1000 >= requiredVA) ??
    INVERTER_TIERS_KVA[INVERTER_TIERS_KVA.length - 1];

  const dod = BATTERY_DOD[batteryType];
  const recommendedBatteryKWh =
    (totalDailyKWh * autonomyDays) / dod / INVERTER_EFFICIENCY;

  const requiredArrayWatts = (totalDailyKWh * 1000) / (PEAK_SUN_HOURS * SYSTEM_DERATE);
  const recommendedPanelCount = Math.ceil(requiredArrayWatts / PANEL_WATTAGE);
  const recommendedPanelWatts = recommendedPanelCount * PANEL_WATTAGE;

  return {
    totalDailyKWh: round1(totalDailyKWh),
    totalRunningWatts: Math.round(totalRunningWatts),
    peakWatts: Math.round(peakWatts),
    recommendedInverterKVA,
    recommendedBatteryKWh: round1(recommendedBatteryKWh),
    recommendedPanelWatts,
    recommendedPanelCount,
  };
}

export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

