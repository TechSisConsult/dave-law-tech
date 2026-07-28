'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function AboutHero() {
  return (
    <section className="relative isolate h-[55vh] min-h-[380px] overflow-hidden pt-20 sm:pt-28">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/about.png"
          alt="Davelaw Technologies solar installation"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dl-dark/65 via-dl-dark/60 to-dl-dark/70" />

      {/* Orange Accent */}
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-dl-orange/20 blur-[120px]" />

      {/* Green Accent */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-dl-green/15 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="mt-6 font-display text-xl sm:text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Powering Homes,Businesses &
              <br />
              Communities.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 text-[12px] sm:text-sm lg:text-[16px]">
              Trusted renewable energy solutions built around quality, integrity
              and innovation; helping homes and businesses enjoy reliable power
              with genuine products, professional installation and long-term
              support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white/60 dark:from-dl-dark to-transparent" />
    </section>
  );
}
