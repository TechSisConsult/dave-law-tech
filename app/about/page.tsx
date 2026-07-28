import AboutHero from '@/components/about/AboutHero';
import FounderStory from '@/components/about/FounderStory';
import CTASection from '@/components/CTASection';
import ToolsTeaser from '@/components/ToolsTeaser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Davelaw Technologies',

  description:
    'Learn about Davelaw Technologies, a trusted renewable energy company delivering high-quality solar installations, hybrid inverter systems, lithium batteries and electrical solutions across Nigeria.',

  alternates: {
    canonical: '/about',
  },
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <ToolsTeaser />
      <CTASection />
    </>
  );
};

export default AboutPage;
