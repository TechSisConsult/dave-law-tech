'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { HiArrowRight } from 'react-icons/hi2';

const SERVICES = [
  {
    title: 'Solar Power Systems',
    description:
      'Complete solar energy solutions professionally designed for homes, businesses and industrial facilities.',
    image: '/solar-panels.jpg',
    href: '/products',
    large: true,
  },
  {
    title: 'Hybrid Inverters',
    description:
      'Smart hybrid inverters that seamlessly manage solar, batteries and the national grid.',
    image: '/inverters.png',
    href: '/products',
  },
  {
    title: 'Battery Storage',
    description:
      'Premium lithium and deep-cycle battery systems built for dependable backup power.',
    image: '/solar-batteries.png',
    href: '/products',
  },
  {
    title: 'Smart CCTV Solutions',
    description:
      'Secure what matters most with professionally installed CCTV systems offering 24/7 monitoring, remote viewing, and reliable protection.',
    image: '/cctv.png',
    href: '/contact',
    large: true,
  },
  {
    title: 'Installation & Maintenance',
    description:
      'Professional installation, system commissioning and dependable after-sales support.',
    image: '/install.jpg',
    href: '/contact',
    large: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white dark:bg-dl-darker py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-dl-green">
            Our Solutions
          </span>

          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-dl-dark dark:text-white lg:text-5xl">
            Power Solutions
            <span className="block text-dl-orange">
              Built Around Your Needs
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-dl-ink/70 dark:text-white/70">
            From complete solar power systems to premium inverters, battery
            storage and professional installations, we provide dependable energy
            solutions tailored to your home or business.
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {/* Large Card */}

          <ServiceCard {...SERVICES[0]} height="h-[420px]" />

          {/* Two Cards */}

          <div className="grid gap-6 lg:grid-cols-2">
            <ServiceCard {...SERVICES[1]} height="h-[320px]" />

            <ServiceCard {...SERVICES[2]} height="h-[320px]" />
          </div>

          {/* Large Card */}

          <div className="grid gap-6 lg:grid-cols-2">
            <ServiceCard {...SERVICES[3]} height="h-[320px]" />

            <ServiceCard {...SERVICES[4]} height="h-[320px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  height: string;
};

function ServiceCard({ title, description, image, href, height }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className={`group relative overflow-hidden rounded-[32px] ${height}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
        <span className="mb-4 inline-flex w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
          Davelaw Technologies
        </span>

        <h3 className="font-display text-3xl font-bold text-white">{title}</h3>

        <p className="mt-4 max-w-xl text-white/80 leading-7">{description}</p>

        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-dl-orange-light transition group-hover:gap-3"
        >
          Learn More
          <HiArrowRight />
        </Link>
      </div>
    </motion.div>
  );
}
