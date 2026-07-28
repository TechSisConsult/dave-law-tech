import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhychooseUs';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import ToolsTeaser from '@/components/ToolsTeaser';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar Energy Solutions for Homes & Businesses',

  description:
    'Looking for reliable solar installers in Nigeria? Davelaw Technologies designs, supplies and installs solar panels, hybrid inverters, lithium batteries, CCTV systems and complete renewable energy solutions for homes and businesses.',

  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ServicesTeaser />
      <ToolsTeaser />
      <Testimonials />
      <CTASection />
    </main>
  );
}
