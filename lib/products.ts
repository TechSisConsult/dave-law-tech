// Product catalog for Davelaw Technologies.
// Replace placeholder names, descriptions and images with the actual
// client inventory before production.

export type ProductCategory =
  | 'Hybrid Inverters'
  | 'Batteries'
  | 'Solar Panels'
  | 'CCTV & Security'
  | 'Accessories'
  | 'Complete Solar Systems';

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  brand?: string;
  category: ProductCategory;
  image: string;
  specs: string[];
  price?: string;
  verified: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'nrgt-tubular-150ah',
    slug: 'nrgt-tubular-battery-150ah-12v',
    name: 'NRGT Tubular Battery 150AH/12V',
    description:
      'Heavy-duty tubular battery designed for dependable backup power and long service life.',
    brand: 'NRGT',
    category: 'Batteries',
    image: '/nrgt-150ah.png',
    specs: ['150AH', '12V', 'Tubular'],
    verified: true,
  },

  {
    id: 'placeholder-tubular-200ah',
    slug: 'tubular-battery-200ah',
    name: '[Confirm Brand] Tubular Battery 200AH/12V',
    description:
      'High-capacity tubular battery suitable for larger residential and commercial backup systems.',
    brand: 'To Be Confirmed',
    category: 'Batteries',
    image: '/nrgt-200ah.png',
    specs: ['200AH', '12V', 'Tubular'],
    verified: false,
  },

  {
    id: 'placeholder-lithium-5kwh',
    slug: 'lithium-battery-5-12kwh',
    name: '[Confirm Brand] Lithium Battery 5.12kWh',
    description:
      'Long-lasting lithium battery designed for efficient solar energy storage and dependable backup power.',
    brand: 'To Be Confirmed',
    category: 'Batteries',
    image: '/lithium.png',
    specs: ['5.12kWh', '48V', 'LiFePO₄'],
    verified: false,
  },

  {
    id: 'placeholder-inverter-3-5kva',
    slug: 'hybrid-inverter-3-5kva',
    name: '[Confirm Brand] Hybrid Inverter 3.5kVA',
    description:
      'Compact hybrid inverter ideal for powering essential home appliances while maximizing solar energy usage.',
    brand: 'Deye',
    category: 'Hybrid Inverters',
    image: '/inverter.png',
    specs: ['3.5kVA', '24V', 'Pure Sine Wave'],
    verified: false,
  },

  {
    id: 'placeholder-inverter-5kva',
    slug: 'hybrid-inverter-5kva',
    name: 'Deye Hybrid Inverter 5kVA',
    description:
      'Reliable hybrid inverter engineered for homes and businesses requiring stable, uninterrupted power.',
    brand: 'Deye',
    category: 'Hybrid Inverters',
    image: '/inverter-5.png',
    specs: ['5kVA', '48V', 'Pure Sine Wave'],
    verified: false,
  },

  {
    id: 'placeholder-inverter-10kva',
    slug: 'hybrid-inverter-10kva',
    name: 'Deye Hybrid Inverter 10kVA',
    description:
      'Powerful hybrid inverter suitable for commercial facilities and large residential installations.',
    brand: 'Deye',
    category: 'Hybrid Inverters',
    image: '/inverter-10.png',
    specs: ['10kVA', '48V', '3-Phase'],
    verified: false,
  },

  {
    id: 'placeholder-panel-450w',
    slug: 'monocrystalline-panel-450w',
    name: 'Deye Monocrystalline Solar Panel 450W',
    description:
      'High-efficiency monocrystalline solar panel engineered for reliable power generation.',
    brand: 'To Be Confirmed',
    category: 'Solar Panels',
    image: '/monocrystalline-panel.png',
    specs: ['450W', 'Mono', 'High Efficiency'],
    verified: false,
  },

  {
    id: 'placeholder-panel-550w',
    slug: 'monocrystalline-panel-550w',
    name: 'Deye Monocrystalline Solar Panel 550W',
    description:
      'Premium high-output solar panel designed to maximize energy production with fewer panels.',
    brand: 'To Be Confirmed',
    category: 'Solar Panels',
    image: '/monocrystalline-panel-550.png',
    specs: ['550W', 'Mono', 'High Efficiency'],
    verified: false,
  },

  {
    id: 'placeholder-cctv-kit',
    slug: 'cctv-security-kit',
    name: 'CCTV Security Kit',
    description:
      'Complete CCTV surveillance solution for homes, offices and commercial properties.',
    brand: 'To Be Confirmed',
    category: 'CCTV & Security',
    image: '/cctv-kit.png',
    specs: ['HD Cameras', 'Night Vision', 'Remote Monitoring'],
    verified: false,
  },

  {
    id: 'placeholder-mounting-kit',
    slug: 'solar-mounting-kit',
    name: 'Solar Mounting Kit',
    description:
      'Professional-grade aluminium mounting system for secure and durable solar panel installation.',
    brand: 'To Be Confirmed',
    category: 'Accessories',
    image: '/mounting-kit.png',
    specs: ['Aluminium', 'Roof Mount', 'Corrosion Resistant'],
    verified: false,
  },

  {
    id: 'placeholder-mc4-kit',
    slug: 'mc4-connectors-dc-cables',
    name: 'MC4 Connectors & DC Cable Set',
    description:
      'High-quality solar connectors and DC cables engineered for safe and efficient installations.',
    brand: 'To Be Confirmed',
    category: 'Accessories',
    image: '/mc4-kit.png',
    specs: ['MC4', 'Solar Rated', 'UV Resistant'],
    verified: false,
  },

  {
    id: 'placeholder-complete-3-5kva',
    slug: 'complete-solar-system-3-5kva',
    name: 'Complete Solar Powered System 3.5kVA',
    description:
      'Professionally designed residential solar solution including inverter, batteries and solar panels.',
    brand: 'Davelaw Technologies',
    category: 'Complete Solar Systems',
    image: '/solar-systems-5kwh.png',
    specs: ['3.5kVA', '5kWh', 'Panels Included'],
    verified: false,
  },

  {
    id: 'placeholder-complete-5kva',
    slug: 'complete-solar-system-5kva',
    name: 'Complete Solar Powered System 5kVA',
    description:
      'Complete solar package tailored for medium-sized homes requiring reliable all-day power.',
    brand: 'Davelaw Technologies',
    category: 'Complete Solar Systems',
    image: '/solar-systems-10kwh.png',
    specs: ['5kVA', '10kWh', 'Panels Included'],
    verified: false,
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Hybrid Inverters',
  'Batteries',
  'Solar Panels',
  'CCTV & Security',
  'Accessories',
  'Complete Solar Systems',
];
