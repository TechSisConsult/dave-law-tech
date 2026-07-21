'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  HiOutlineArrowLeft,
  HiOutlinePhone,
  HiOutlineHome,
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappMessage = encodeURIComponent(
  'Hello Davelaw Technologies, I was browsing your website and would like to speak with your team about your solar solutions.',
);

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-dl-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b10,transparent_45%)]" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-dl-green/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />
      </div>

      {/* Floating Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute h-72 w-72 rounded-full bg-dl-orange/20 blur-[100px]"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="font-display text-[120px] font-bold leading-none text-dl-orange md:text-[180px]"
        >
          404
        </motion.h1>

        {/* Badge */}
        <div className="mb-6 rounded-full border border-dl-orange/20 bg-dl-orange/10 px-5 py-2 text-sm font-medium text-dl-orange">
          ⚡ Page Not Found
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-4xl font-semibold text-white md:text-5xl"
        >
          Oops! This Page
          <span className="block text-dl-orange">
            Couldn&apos;t Be Powered.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-8 text-white/70"
        >
          Looks like the page you&apos;re trying to reach isn&apos;t available.
          Let&apos;s get you back to reliable power solutions for your home or
          business.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-dl-orange px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <HiOutlineHome />
            Return Home
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Browse Products
            <HiOutlineArrowLeft className="rotate-180" />
          </Link>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-14 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
        >
          <h3 className="font-display text-2xl font-semibold text-white">
            Need Assistance?
          </h3>

          <p className="mt-2 text-white/60">
            Our team is ready to help you choose the right solar solution.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+2348033699776"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
            >
              <HiOutlinePhone />
              Call Us
            </a>

            <a
              href={`https://wa.me/2348033699776?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:brightness-110"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="mt-12 text-sm tracking-[0.35em] uppercase text-dl-orange"
        >
          Reliable Power Starts Here
        </motion.div>
      </div>
    </section>
  );
}
