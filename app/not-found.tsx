import type { Metadata } from 'next';
import NotFoundContent from '@/components/NotFoundContent';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    "The page you're looking for could not be found. Explore our solar products, renewable energy solutions and completed projects.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
