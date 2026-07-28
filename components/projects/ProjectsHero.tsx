'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function ProjectHero() {
  return (
    <section className="relative h-[35vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/project12.jpg"
        alt="Davelaw Technologies Solar Projects"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dl-dark/70 via-dl-dark/55 to-dl-dark/35" />

      {/* Decorative Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-10 h-48 w-48 rounded-full bg-dl-orange/15 blur-3xl" />
        <div className="absolute right-20 bottom-0 h-56 w-56 rounded-full bg-dl-green/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 pt-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-white lg:text-5xl">
            Real Installations.
            <span className="block text-dl-orange">Real Results.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/80 lg:text-[16px]">
            Explore a selection of residential, commercial and industrial solar
            installations completed by Davelaw Technologies across Nigeria,
            showcasing our commitment to quality workmanship and reliable energy
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
