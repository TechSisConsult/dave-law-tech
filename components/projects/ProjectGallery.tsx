'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const PROJECTS = [
  '/project1.jpg',
  '/project2.jpg',
  '/project3.jpg',
  '/project4.jpg',
  '/project5.jpg',
  '/project6.jpg',
  '/project7.jpg',
  '/project8.jpg',
  '/project9.jpg',
  '/project10.jpg',
  '/project11.jpg',
  '/project12.jpg',
  '/project13.jpg',
  '/project14.jpg',
];

export default function ProjectGallery() {
  return (
    <section className="bg-white dark:bg-dl-dark py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dl-orange">
            Recent Installations
          </span>

          <h2 className="mt-4 font-display text-3xl lg:text-5xl font-bold text-dl-dark dark:text-white">
            Powering Homes,
            <span className="block text-dl-green">Businesses & Industries</span>
          </h2>

          <p className="mt-6 text-dl-ink/65 dark:text-white/65 leading-8">
            Every installation reflects our commitment to quality workmanship,
            reliable equipment and customer satisfaction. Browse a selection of
            residential, commercial and industrial projects completed by Davelaw
            Technologies.
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {PROJECTS.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="group relative overflow-hidden rounded-3xl break-inside-avoid cursor-pointer"
            >
              <Image
                src={image}
                alt={`Solar Installation ${index + 1}`}
                width={700}
                height={900}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
