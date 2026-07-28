import type { Metadata } from 'next';
import SolarEstimatorClient from '@/components/estimator/SolarEstimatorClient';

export const metadata: Metadata = {
  title: 'Free Solar Estimator',
  description:
    'Estimate the right solar system for your home or business. Select your appliances and receive a recommended solar capacity based on your power requirements.',
  alternates: {
    canonical: '/solar-estimator',
  },
};

export default function SolarEstimatorPage() {
  return <SolarEstimatorClient />;
}
