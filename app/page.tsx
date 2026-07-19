import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhychooseUs';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import ToolsTeaser from '@/components/ToolsTeaser';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/CTASection';

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
