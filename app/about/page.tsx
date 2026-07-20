import AboutHero from '@/components/about/AboutHero';
import FounderStory from '@/components/about/FounderStory';
import CTASection from '@/components/CTASection';
import ToolsTeaser from '@/components/ToolsTeaser';
import React from 'react';

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
