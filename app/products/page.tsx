import type { Metadata } from 'next';
import ProductsClient from '@/components/products/ProductsClient';

export const metadata: Metadata = {
  title: 'Solar Products',
  description:
    'Browse our range of solar panels, Deye hybrid inverters, lithium batteries, CCTV systems, accessories and complete solar solutions for residential and commercial projects.',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
