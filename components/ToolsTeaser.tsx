'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  HiOutlineLightningBolt,
  HiOutlineCalculator,
  HiOutlineArrowRight,
} from 'react-icons/hi';

const TOOLS = [
  {
    icon: HiOutlineLightningBolt,
    title: 'Solar Estimator',
    desc: "Tell us what appliances you run. We'll size the exact inverter, battery and panel setup you need — no guesswork.",
    href: '/solar-estimator',
    cta: 'Estimate my system',
  },
  {
    icon: HiOutlineCalculator,
    title: 'Generator Loss Calculator',
    desc: 'See exactly how much fuel, maintenance and downtime your generator has cost you this year — then see the solar alternative.',
    href: '/generator-calculator',
    cta: 'Calculate my losses',
  },
];

export default function ToolsTeaser() {
  return (
    <section className="bg-[#e7e8f3]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-dl-green uppercase">
            Free tools
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-dl-dark mt-3">
            Know exactly what you need before you spend a naira.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl bg-dl-dark text-white p-8 lg:p-10 hover:bg-dl-darker transition-colors"
            >
              <tool.icon className="text-3xl text-dl-orange" />
              <h3 className="font-display text-2xl font-semibold mt-5">
                {tool.title}
              </h3>
              <p className="text-white/60 mt-3 leading-relaxed">{tool.desc}</p>
              <Link
                href={tool.href}
                className="inline-flex items-center gap-2 mt-7 text-dl-greenLight font-semibold group-hover:gap-3 transition-all"
              >
                {tool.cta} <HiOutlineArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
