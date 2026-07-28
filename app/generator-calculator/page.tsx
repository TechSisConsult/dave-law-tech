import type { Metadata } from 'next';
import GeneratorCalculatorClient from '@/components/generator/GeneratorCalculatorClient';

export const metadata: Metadata = {
  title: 'Electricity & Generator Cost Calculator',
  description:
    'Compare your monthly electricity and generator expenses with the long-term savings of switching to solar energy using our free cost calculator.',
  alternates: {
    canonical: '/generator-calculator',
  },
};

export default function GeneratorCalculatorPage() {
  return <GeneratorCalculatorClient />;
}
