import ContactClient from '@/components/contact/ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Davelaw Technologies',

  description:
    'Get in touch with Davelaw Technologies for expert advice, free consultations and custom quotations for solar installations, inverters, batteries, CCTV systems and electrical services.',

  alternates: {
    canonical: '/contact',
  },
};

export default function ProductsPage() {
  return <ContactClient />;
}
