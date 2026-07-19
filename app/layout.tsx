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
  title: 'Davelaw Technologies | Solar & Power Solutions in Ilorin, Nigeria',
  description:
    'Davelaw Technologies designs, supplies and installs solar power systems, inverters and batteries for homes and businesses across Ilorin, Kwara State and Nigeria. Get a free solar estimate today.',
  keywords: [
    'solar company Ilorin',
    'solar installation Kwara State',
    'inverter and battery Nigeria',
    'Davelaw Technologies',
    'solar estimate Nigeria',
  ],
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
