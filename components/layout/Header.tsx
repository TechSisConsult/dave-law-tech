'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import {
  HiBars3,
  HiXMark,
  HiOutlineClipboardDocumentList,
} from 'react-icons/hi2';

import ThemeToggle from './ThemeToggle';
import QuoteListDrawer from '@/components/products/QuoteListDrawer';
import { useQuoteList } from '@/context/QuoteListContext';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solar Estimator', href: '/solar-estimator' },
  { label: 'Power Calculator', href: '/generator-calculator' },
  { label: 'Products', href: '/products' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { items } = useQuoteList();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-[999]">
        <motion.div
          animate={{
            scale: scrolled ? 0.96 : 1,
            y: scrolled ? -4 : 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="mx-auto w-[95%] max-w-7xl"
        >
          <div
            className={clsx(
              'rounded-full transition-all duration-500',
              'border',
              'backdrop-blur-xl',
              'px-5',
              'h-20',
              'flex items-center justify-between',

              scrolled
                ? 'bg-white/90 dark:bg-dl-dark/90 border-black/5 dark:border-white/10 shadow-2xl'
                : 'bg-white/55 dark:bg-dl-dark/45 border-white/30 shadow-xl',
            )}
          >
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/favicon.png"
                priority
                alt="Davelaw Solar Installation"
                className="object-cover w-8 h-8"
                width={20}
                height={20}
              />

              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight">
                  <span className="text-dl-green">DAVE</span>

                  <span className="text-dl-orange">LAW</span>
                </span>

                <span className="uppercase tracking-[0.35em] text-[10px] text-dl-ink/55 dark:text-white/60">
                  Technologies
                </span>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'group relative text-[15px] font-medium transition',

                    pathname === item.href
                      ? 'text-dl-green'
                      : 'text-dl-ink dark:text-white',
                  )}
                >
                  {item.label}

                  <span
                    className="
        absolute
        left-0
        -bottom-2
        h-[2px]
        w-0
        bg-dl-orange
        transition-all
        duration-300
        group-hover:w-full
      "
                  />
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={() => setQuoteOpen(true)}
                className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/60 dark:bg-white/5 hover:scale-105 transition"
              >
                <HiOutlineClipboardDocumentList className="text-xl dark:text-white/50" />

                {items.length > 0 && (
                  <span
                    className="
        absolute
        -right-1
        -top-1
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-dl-orange
        text-[10px]
        font-bold
      "
                  >
                    {items.length}
                  </span>
                )}
              </button>

              <Link
                href="/solar-estimator"
                className="group hidden lg:flex items-center gap-3 rounded-full bg-gradient-to-r from-dl-orange to-dl-orange-light px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl transition:color .3s,transform .3s;"
              >
                Get Free Estimate
                <svg
                  className="
h-4
w-4
transition-transform
group-hover:translate-x-1
"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7l7 7-7 7"
                  />
                </svg>
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-3xl"
              >
                {menuOpen ? (
                  <HiXMark />
                ) : (
                  <HiBars3 className="dark:text-white/50" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.35 }}
              className="
      fixed
      inset-0
      z-[998]
      bg-white/90
      dark:bg-dl-dark/95
      backdrop-blur-3xl
      lg:hidden
      "
            >
              <div className="flex h-full flex-col">
                {/* Top Bar */}

                <div className="flex h-24 items-center justify-between px-7 pt-2">
                  <Image
                    src="/favicon.png"
                    priority
                    alt="Davelaw Solar Installation"
                    className="object-cover w-8 h-8"
                    width={20}
                    height={20}
                  />
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    <div className="font-display text-xl font-bold flex flex-col">
                      <span>
                        <span className="text-dl-green">DAVE</span>
                        <span className="text-dl-orange">LAW</span>
                      </span>
                      <span className="uppercase tracking-[0.35em] text-[8px] text-dl-ink/55 dark:text-white/60">
                        Technologies
                      </span>
                    </div>
                  </Link>

                  <button
                    onClick={() => setMenuOpen(false)}
                    className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-dl-orange
            text-white
            "
                  >
                    <HiXMark size={28} />
                  </button>
                </div>

                {/* Menu */}

                <nav className="mt-6 flex flex-1 flex-col justify-center px-6">
                  {NAV_LINKS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="
                group
                flex
                items-center
                py-3
                text-xl
                font-display
                font-semibold
                text-dl-ink
                dark:text-white
                "
                      >
                        {item.label}

                        <span
                          className="
                ml-4
                h-[2px]
                w-0
                bg-dl-orange
                transition-all
                duration-300
                group-hover:w-12
                "
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom */}

                <div className="border-t border-black/5 dark:border-white/10 px-10 py-8">
                  <Link
                    href="/solar-estimator"
                    onClick={() => setMenuOpen(false)}
                    className="
            flex
            items-center
            justify-center
            rounded-full
            bg-dl-orange
            py-4
            text-lg
            font-semibold
            text-white
            shadow-xl
            "
                  >
                    Get Free Estimate
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <QuoteListDrawer open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </header>
    </>
  );
}
