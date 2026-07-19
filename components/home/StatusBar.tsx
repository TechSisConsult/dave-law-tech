'use client';

import { motion } from 'motion/react';
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

export default function StatsBar() {
  return (
    <section className="bg-dl-dark border-b border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center text-center sm:items-start sm:text-left gap-1.5"
            >
              <stat.icon className="text-dl-orange text-xl" />
              <p className="font-display font-semibold text-white text-sm">
                {stat.label}
              </p>
              <p className="text-xs text-white/40">{stat.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
