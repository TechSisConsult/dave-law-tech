'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { HiOutlineSparkles } from 'react-icons/hi2';

export default function FounderStory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-dl-dark">
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-dl-green/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-dl-orange/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Decorative Shape */}
          <div className="absolute -left-5 -top-5 h-36 w-36 rounded-3xl bg-dl-orange/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-dl-dark/10 bg-dl-cream shadow-2xl dark:border-white/10 dark:bg-dl-darker">
            <Image
              src="/founder.png"
              alt="Engr. Lawal Ayodele David"
              width={700}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 right-6 max-w-xs rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur dark:bg-dl-darker/90"
          >
            <p className="text-sm font-semibold text-dl-green">Founder & CEO</p>

            <h3 className="mt-1 font-display text-lg font-bold text-dl-dark dark:text-white">
              Engr. Lawal Ayodele David
            </h3>

            <p className="mt-2 text-sm leading-6 text-dl-ink/70 dark:text-white/60">
              Leading Davelaw Technologies with a vision to make dependable,
              affordable and sustainable energy accessible across Nigeria.
            </p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-dl-orange/20 bg-dl-orange/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-dl-orange">
            <HiOutlineSparkles />
            Meet Our Founder
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-dl-dark dark:text-white lg:text-5xl">
            Building More Than
            <span className="block text-dl-green">Solar Systems.</span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-dl-ink/75 dark:text-white/70">
            Davelaw Technologies was founded with a simple but powerful
            purpose—to help homes, businesses and institutions break free from
            unreliable electricity through dependable renewable energy
            solutions.
          </p>

          <p className="mt-6 text-lg leading-8 text-dl-ink/75 dark:text-white/70">
            Under the leadership of <strong>Engr. Lawal Ayodele David</strong>,
            the company has built a reputation for delivering genuine products,
            expert workmanship and tailored energy systems that provide lasting
            value. Every installation is approached with integrity, technical
            excellence and a commitment to helping clients make informed energy
            investments.
          </p>

          {/* Quote */}
          <div className="mt-10 rounded-3xl border border-dl-green/15 bg-dl-green/5 p-8 dark:border-dl-green/20 dark:bg-dl-green/10">
            <p className="font-display text-2xl italic leading-relaxed text-dl-dark dark:text-white">
              &quot;Reliable power isn&apos;t just about electricity—it&apos;s
              about giving people the confidence to live, work and grow without
              limits.&quot;
            </p>

            <div className="mt-6">
              <p className="font-semibold text-dl-green">
                Engr. Lawal Ayodele David
              </p>

              <p className="text-sm text-dl-ink/60 dark:text-white/60">
                Founder & Chief Executive Officer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
