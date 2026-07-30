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
import Script from 'next/script';

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
    default: 'Davelaw Technologies | Solar Energy, Inverters & CCTV Solutions',
    template: '%s | Davelaw Technologies',
  },

  description:
    'Davelaw Technologies supplies and installs premium solar power systems, hybrid inverters, lithium batteries, CCTV security systems and electrical solutions for homes, businesses and industries across Nigeria.',

  applicationName: 'Davelaw Technologies',

  keywords: [
    'Solar Company Nigeria',
    'Solar Installation Nigeria',
    'Solar Installation Ilorin',
    'Solar Panels',
    'Hybrid Inverter',
    'Lithium Battery',
    'Tubular Battery',
    'Deye Dealer Nigeria',
    'Solar Energy',
    'Renewable Energy',
    'CCTV Installation',
    'Electrical Installation',
    'Solar Power Systems',
    'Commercial Solar',
    'Residential Solar',
  ],

  authors: [{ name: 'Davelaw Technologies' }],

  creator: 'Davelaw Technologies',

  publisher: 'Davelaw Technologies',

  category: 'Renewable Energy',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  manifest: '/manifest.webmanifest',

  appleWebApp: {
    capable: true,
    title: 'Davelaw Technologies',
    statusBarStyle: 'black-translucent',
  },

  openGraph: {
    title: 'Davelaw Technologies | Reliable Solar Energy Solutions',
    description:
      'Professional solar installation, hybrid inverter systems, lithium batteries, CCTV solutions and renewable energy services for homes and businesses across Nigeria.',

    url: 'https://www.davelawtechnologies.com',

    siteName: 'Davelaw Technologies',

    locale: 'en_NG',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Davelaw Technologies - Reliable Solar Energy Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Davelaw Technologies | Reliable Solar Energy Solutions',

    description:
      'Trusted renewable energy company specializing in solar systems, hybrid inverters, batteries, CCTV installations and electrical solutions.',

    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/andriod-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],

    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
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
        <Script id="tawk-to" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6a693a0e536c401d48943cac/1julglio5';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
