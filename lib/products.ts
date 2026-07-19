// Product catalog data for Davelaw Technologies.
//
// STATUS: Only "NRGT Tubular Battery 150AH/12V" is confirmed from Davelaw's
// existing (indexed) site. Every other entry is a realistic placeholder —
// clearly marked — sized to Davelaw's known categories (energy, power
// equipment, inverter systems, solar panels). Replace `verified: false`
// items with real names, specs and prices once the client confirms them.
// No prices are invented with false precision — placeholders use
// "Contact for price" until real pricing is supplied, matching common
// practice for solar equipment where prices shift with FX rates.

export type ProductCategory =
  | "Hybrid Inverters"
  | "Batteries"
  | "Solar Panels"
  | "Portable Power Stations"
  | "Accessories"
  | "Complete Solar Systems";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  specs: string[]; // short spec chips, e.g. "5.12kWh", "48V", "LiFePO4"
  price?: string; // formatted string if known, otherwise omitted → "Contact for price"
  verified: boolean; // true only for items confirmed against a real Davelaw source
}

export const PRODUCTS: Product[] = [
  {
    id: "nrgt-tubular-150ah",
    name: "NRGT Tubular Battery 150AH/12V",
    category: "Batteries",
    specs: ["150AH", "12V", "Tubular"],
    verified: true,
  },
  // --- Placeholder items below — confirm with client before launch ---
  {
    id: "placeholder-tubular-200ah",
    name: "[Confirm name] Tubular Battery 200AH/12V",
    category: "Batteries",
    specs: ["200AH", "12V", "Tubular"],
    verified: false,
  },
  {
    id: "placeholder-lithium-5kwh",
    name: "[Confirm name] Lithium Battery 5.12kWh",
    category: "Batteries",
    specs: ["5.12kWh", "48V", "LiFePO4"],
    verified: false,
  },
  {
    id: "placeholder-inverter-3-5kva",
    name: "[Confirm name] Hybrid Inverter 3.5kVA",
    category: "Hybrid Inverters",
    specs: ["3.5kVA", "24V", "Pure Sine Wave"],
    verified: false,
  },
  {
    id: "placeholder-inverter-5kva",
    name: "[Confirm name] Hybrid Inverter 5kVA",
    category: "Hybrid Inverters",
    specs: ["5kVA", "48V", "Pure Sine Wave"],
    verified: false,
  },
  {
    id: "placeholder-inverter-10kva",
    name: "[Confirm name] Hybrid Inverter 10kVA",
    category: "Hybrid Inverters",
    specs: ["10kVA", "48V", "3-Phase Option"],
    verified: false,
  },
  {
    id: "placeholder-panel-450w",
    name: "[Confirm brand] Monocrystalline Panel 450W",
    category: "Solar Panels",
    specs: ["450W", "Monocrystalline"],
    verified: false,
  },
  {
    id: "placeholder-panel-550w",
    name: "[Confirm brand] Monocrystalline Panel 550W",
    category: "Solar Panels",
    specs: ["550W", "Monocrystalline"],
    verified: false,
  },
  {
    id: "placeholder-power-station",
    name: "[Confirm name] Portable Power Station 1000W",
    category: "Portable Power Stations",
    specs: ["1000W", "Rechargeable"],
    verified: false,
  },
  {
    id: "placeholder-cables",
    name: "[Confirm] MC4 Connectors & DC Cable Set",
    category: "Accessories",
    specs: ["MC4", "Solar-rated"],
    verified: false,
  },
  {
    id: "placeholder-mounting",
    name: "[Confirm] Roof Mounting & Racking Kit",
    category: "Accessories",
    specs: ["Aluminium", "Roof-mount"],
    verified: false,
  },
  {
    id: "placeholder-complete-3_5kva",
    name: "[Confirm] Complete Home Solar Package — 3.5kVA",
    category: "Complete Solar Systems",
    specs: ["3.5kVA", "5kWh", "Panels included"],
    verified: false,
  },
  {
    id: "placeholder-complete-5kva",
    name: "[Confirm] Complete Home Solar Package — 5kVA",
    category: "Complete Solar Systems",
    specs: ["5kVA", "10kWh", "Panels included"],
    verified: false,
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Hybrid Inverters",
  "Batteries",
  "Solar Panels",
  "Portable Power Stations",
  "Accessories",
  "Complete Solar Systems",
];
