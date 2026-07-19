'use client';

import { motion } from 'motion/react';

const STATS = [
  { value: 'Nigeria-wide', label: 'Offices & service reach' },
  { value: 'Ilorin, Kwara', label: 'Company base' },
  { value: 'Design → Install', label: 'Full in-house process' },
  { value: 'Free', label: 'Site inspection before install' },
];

export default function TrustBar() {
  return (
    <section className="bg-amber-700 border-b border-dl-dark/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display font-semibold text-dl-dark text-lg">
              {stat.value}
            </p>
            <p className="text-sm text-dl-ink/50 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
