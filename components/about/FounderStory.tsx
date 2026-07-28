'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { HiOutlineSparkles } from 'react-icons/hi2';

export default function FounderStory() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 dark:bg-dl-dark">
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-48 w-48 rounded-full bg-dl-green/10 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-56 w-56 rounded-full bg-dl-orange/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-x-16 gap-y-24 px-5 lg:grid-cols-2 lg:gap-y-16 lg:px-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-6 sm:mb-8 lg:mb-0"
        >
          {/* Decorative Shape */}
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-dl-orange/10 blur-2xl sm:h-36 sm:w-36" />

          <div className="relative overflow-hidden rounded-[24px] border border-dl-dark/10 bg-dl-cream shadow-2xl sm:rounded-[32px] dark:border-white/10 dark:bg-dl-darker">
            <Image
              src="/founder.jpg"
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
            className="absolute -bottom-6 right-3 max-w-[80%] rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur sm:-bottom-8 sm:right-6 sm:max-w-xs sm:p-5 dark:bg-dl-darker/90"
          >
            <p className="text-sm font-semibold text-dl-green">Founder & CEO</p>

            <h3 className="mt-1 font-display text-base font-bold text-dl-dark sm:text-lg dark:text-white">
              Engr. Lawal Ayodele David
            </h3>

            <p className="mt-2 text-xs leading-6 text-dl-ink/70 sm:text-sm dark:text-white/60">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-dl-orange/20 bg-dl-orange/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-dl-orange sm:px-5 sm:py-2 sm:tracking-[0.22em]">
            <HiOutlineSparkles />
            Meet Our Founder
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-dl-dark sm:text-4xl lg:text-5xl dark:text-white">
            Building More Than
            <span className="block text-dl-green">Solar Systems.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-dl-ink/75 sm:mt-7 sm:text-lg sm:leading-8 dark:text-white/70">
            Davelaw Technologies was founded with a simple but powerful
            purpose—to help homes, businesses and institutions break free from
            unreliable electricity through dependable renewable energy
            solutions.
          </p>

          <p className="mt-5 text-base leading-7 text-dl-ink/75 sm:mt-6 sm:text-lg sm:leading-8 dark:text-white/70">
            Under the leadership of <strong>Engr. Lawal Ayodele David</strong>,
            the company has built a reputation for delivering genuine products,
            expert workmanship and tailored energy systems that provide lasting
            value. Every installation is approached with integrity, technical
            excellence and a commitment to helping clients make informed energy
            investments.
          </p>

          {/* Quote */}
          <div className="mt-8 rounded-3xl border border-dl-green/15 bg-dl-green/5 p-6 sm:mt-10 sm:p-8 dark:border-dl-green/20 dark:bg-dl-green/10">
            <p className="font-display text-lg italic leading-relaxed text-dl-dark sm:text-2xl dark:text-white">
              &quot;Reliable power isn&apos;t just about electricity—it&apos;s
              about giving people the confidence to live, work and grow without
              limits.&quot;
            </p>

            <div className="mt-5 sm:mt-6">
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
