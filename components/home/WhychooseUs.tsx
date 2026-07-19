'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineOfficeBuilding,
  HiOutlineArrowRight,
} from 'react-icons/hi';

const FEATURES = [
  'Authorized Deye Dealer',
  'Professional Installation Team',
  'Residential & Commercial Projects',
  'Nationwide Delivery & Installation',
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-l from-[#e7e8f3] to-[#eff8ef] dark:from-dl-dark dark:to-dl-darker py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-dl-green/10 blur-[140px]" />

        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-dl-orange/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
            <Image
              src="/why-dave.png"
              alt="Davelaw Technologies Team"
              width={900}
              height={1000}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Badge */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 left-8 rounded-3xl border border-white/20 bg-white/90 px-6 py-5 shadow-xl backdrop-blur-xl dark:bg-dl-dark/90"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-dl-green/10">
                <HiOutlineLightningBolt className="text-3xl text-dl-green" />
              </div>

              <div>
                <p className="text-sm text-dl-ink/60 dark:text-white/60">
                  Delivering Reliable
                </p>

                <h4 className="font-display text-xl font-semibold text-dl-dark dark:text-white">
                  Solar Solutions
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-dl-green/10 px-4 py-2 text-sm font-semibold text-dl-green">
            <HiOutlineBadgeCheck />
            Why Our Clients Trust Us
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-dl-dark dark:text-white lg:text-5xl">
            Powering Homes &
            <span className="block text-dl-orange">
              Businesses with Confidence.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-dl-ink/70 dark:text-white/70">
            Choosing the right solar partner is just as important as choosing
            the right equipment. At Davelaw Technologies, we combine quality
            products, expert installation, and reliable after-sales support to
            deliver energy solutions our clients can depend on for years to
            come.
          </p>

          <div className="mt-10 grid gap-5">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dl-green/10">
                  <HiOutlineShieldCheck className="text-2xl text-dl-green" />
                </div>

                <p className="text-base font-medium text-dl-dark dark:text-white">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-dl-dark/10 bg-white px-7 py-4 font-semibold text-dl-dark shadow-sm transition hover:-translate-y-1 hover:border-dl-green hover:text-dl-green dark:border-white/10 dark:bg-dl-dark dark:text-white"
            >
              Learn More About Us
              <HiOutlineArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center gap-3 rounded-full bg-dl-green/10 px-5 py-3">
              <HiOutlineOfficeBuilding className="text-xl text-dl-green" />

              <span className="font-medium text-dl-dark dark:text-white">
                Based in Ilorin, Serving Nationwide
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
