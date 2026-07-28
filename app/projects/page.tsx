import Footer from '@/components/layout/Footer';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectHero from '@/components/projects/ProjectsHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',

  description:
    'Explore completed residential, commercial and industrial solar installations by Davelaw Technologies, showcasing quality workmanship and reliable renewable energy solutions.',

  alternates: {
    canonical: '/projects',
  },
};

const page = () => {
  return (
    <main>
      <ProjectHero />
      <ProjectGallery />
      <Footer />
    </main>
  );
};

export default page;
