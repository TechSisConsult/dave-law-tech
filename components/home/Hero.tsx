'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight, HiShieldCheck } from 'react-icons/hi';
import {
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
  HiOutlineClipboardCheck,
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
  HiOutlineSupport,
} from 'react-icons/hi';

const STATS = [
  {
    icon: HiOutlineLocationMarker,
    label: 'Ilorin-Based',
    caption: 'Kwara State, Nigeria',
  },
  {
    icon: HiOutlineBadgeCheck,
    label: 'Genuine Products',
    caption: 'No fakes, ever',
  },
  {
    icon: HiOutlineClipboardCheck,
    label: 'Free Inspection',
    caption: 'Before you commit',
  },
  {
    icon: HiOutlineGlobeAlt,
    label: 'Nationwide',
    caption: 'Installation reach',
  },
  {
    icon: HiOutlineLightningBolt,
    label: 'Honest Sizing',
    caption: 'No overselling',
  },
  {
    icon: HiOutlineSupport,
    label: 'Real Support',
    caption: 'After installation',
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-dl-darker/60">
      <Image
        src="/hero-solar.jpg"
        fill
        priority
        alt="Davelaw Solar Installation"
        className="object-cover"
      />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col items-center px-6 pt-36 pb-10 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-dl-green/20 bg-dl-green/10 px-5 py-2 text-sm font-medium text-dl-green backdrop-blur">
            <HiShieldCheck />
            Trusted Solar Partner
          </div>

          {/* Translucent panel — just behind the headline + paragraph, for legibility over the photo */}
          <div className="mt-6 rounded-3xl bg-white/10 backdrop-blur-md dark:bg-transparent p-1 sm:p-2">
            <h1 className="font-stencil text-5xl leading-[1.05] text-dl-dark dark:text-white lg:text-7xl">
              Reliable Power
              <span className="block text-dl-orange">for Homes,</span>
              <span className="block">Businesses & Industries</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white dark:text-white/70">
              Davelaw Technologies supplies and installs premium solar systems,
              inverters, lithium batteries, CCTV solutions and electrical
              installations for homes and businesses across Nigeria.
            </p>
          </div>

          <div className="relative mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/2348033699776?text=Hello%20Davelaw%20Technologies,%20I%20would%20like%20to%20get%20a%20custom%20quote%20for%20a%20solar%20solution.%20Please%20let%20me%20know%20the%20information%20you%20need%20to%20prepare%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-dl-orange/80 px-7 py-4 font-semibold text-white transition hover:-translate-y-1"
            >
              Get a Custom Quote
              <HiArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <Link
              href="/products"
              className="rounded-full border border-dl-dark/10 bg-white px-7 py-4 font-semibold hover:bg-dl-dark/5 dark:border-white/10 dark:bg-transparent dark:hover:bg-white/5 dark:text-white"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.43 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10 sm:text-left"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-dl-orange/10 transition group-hover:bg-dl-orange/20 sm:mx-0">
                  <stat.icon className="text-xl text-dl-orange" />
                </div>
                <p className="font-display text-sm font-semibold text-white mt-3">
                  {stat.label}
                </p>
                <p className="text-xs text-white/40 mt-0.5">{stat.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
