'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineArrowRight,
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '2348033699776';

const TRUST_ITEMS = [
  'Authorized Deye Dealer',
  'Nationwide Installation',
  'Genuine Equipment',
  'Free Site Assessment',
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-16">
      <Image
        src="/cta-bg.jpg"
        alt="Solar installation"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-dl-dark/80" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-dl-orange/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Heading */}

          <h2 className="mt-8 font-display text-4xl font-bold leading-tight text-white lg:text-6xl">
            Reliable Power
            <span className="block text-dl-orange">Starts Here.</span>
          </h2>

          {/* Paragraph */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Whether you&apos;re powering your home, office, business or
            industrial facility, our experts will help you design a solar
            solution tailored to your energy needs and budget.
          </p>

          {/* Trust Pills */}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {TRUST_ITEMS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
              >
                ✓ {item}
              </span>
            ))}
          </div>

          {/* CTA */}

          <Link
            href="/solar-estimator"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-dl-orange px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(242,121,10,.35)]"
          >
            Start Free Solar Estimator
            <HiOutlineArrowRight className="transition group-hover:translate-x-1" />
          </Link>

          {/* Divider */}

          <div className="my-14 flex items-center justify-center gap-5">
            <div className="h-px w-28 bg-white/15" />
            <span className="text-sm uppercase tracking-[0.3em] text-white/40">
              or
            </span>
            <div className="h-px w-28 bg-white/15" />
          </div>

          {/* Secondary */}

          <h3 className="text-2xl font-display font-semibold text-white">
            Need expert advice first?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Speak directly with one of our solar specialists for a free
            consultation and personalized recommendation.
          </p>

          {/* Contact Cards */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* WhatsApp */}

            <a
              href="https://wa.me/2348033699776?text=Hello%20Davelaw%20Technologies,%20I%20would%20like%20to%20get%20a%20custom%20quote%20for%20a%20solar%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-dl-orange/40 hover:bg-white/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-dl-green/20">
                <FaWhatsapp className="text-3xl text-dl-green-light" />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-white">
                WhatsApp
              </h4>

              <p className="mt-2 text-sm text-white/60">
                Chat instantly with our solar team.
              </p>
            </a>

            {/* Phone */}

            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-dl-orange/40 hover:bg-white/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-dl-orange/20">
                <HiOutlinePhone className="text-3xl text-dl-orange" />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-white">Call Us</h4>

              <p className="mt-2 text-sm text-white/60">+234 803 369 9776</p>
            </a>

            {/* Email */}

            <a
              href="mailto:hello@davelawtechnologies.com"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-dl-orange/40 hover:bg-white/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <HiOutlineMail className="text-3xl text-white" />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-white">
                Email Us
              </h4>

              <p className="mt-2 text-sm text-white/60">
                hello@davelawtechnologies.com
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
