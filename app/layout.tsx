import type { Metadata } from 'next';
import {
  Space_Grotesk,
  Saira_Stencil_One,
  Inter,
  IBM_Plex_Mono,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/context/ThemeProvider';
import { QuoteListProvider } from '@/context/QuoteListContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
});

// Used only for the hero headline — not the sitewide display font.
const sairaStencil = Saira_Stencil_One({
  subsets: ['latin'],
  variable: '--font-saira-stencil',
  weight: ['400'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.davelawtechnologies.com'),

  title: {
    default:
      'Davelaw Technologies | Solar Energy, Inverters & CCTV Solutions in Nigeria',
    template: '%s | Davelaw Technologies',
  },

  description:
    'Davelaw Technologies supplies and installs premium solar power systems, hybrid inverters, lithium batteries, CCTV systems and electrical solutions for homes and businesses across Nigeria.',

  keywords: [
    'Solar Company Nigeria',
    'Solar Installation Ilorin',
    'Solar Panels',
    'Hybrid Inverter',
    'Lithium Battery',
    'Deye Dealer Nigeria',
    'Solar Energy',
    'Solar Installer',
    'CCTV Installation',
    'Renewable Energy',
  ],

  authors: [{ name: 'Davelaw Technologies' }],

  creator: 'Davelaw Technologies',

  publisher: 'Davelaw Technologies',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://www.davelawtechnologies.com',
    siteName: 'Davelaw Technologies',
    title: 'Davelaw Technologies | Reliable Solar Energy Solutions in Nigeria',
    description:
      'Trusted solar installers providing solar panels, inverters, lithium batteries, CCTV systems and electrical installations.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Davelaw Technologies',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Davelaw Technologies | Reliable Solar Energy Solutions',
    description:
      'Professional solar installation and renewable energy solutions.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${sairaStencil.variable} ${inter.variable} ${plexMono.variable} font-body antialiased bg-dl-cream text-dl-ink dark:bg-dl-darker dark:text-white transition-colors`}
      >
        <ThemeProvider>
          <QuoteListProvider>
            <Header />
            {children}
            <Footer />
          </QuoteListProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
