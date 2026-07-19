'use client';

import { motion } from 'motion/react';
import { HiStar, HiArrowTopRightOnSquare } from 'react-icons/hi2';

const TESTIMONIALS = [
  {
    quote:
      'This company deals with solar panel sales and installation. They also sell batteries, inverters, DC bulbs, pumping machines and more. They provide excellent training and outstanding customer service. The CEO is honest, professional and truly committed to delivering value. A trial will convince you.',
    name: 'Oluwafemi Olatunji',
    rating: 5,
  },
  {
    quote:
      'Solar Expert Per Excellence! Very good customer service and experience. They are the best in Kwara State and its environs!',
    name: 'Odunayo Ibitoye',
    rating: 5,
  },
  {
    quote:
      'Best in town. They have the best staff with excellent customer service.',
    name: 'Olaoluwa Paul',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f8faf8] py-16 dark:bg-dl-dark"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-dl-green/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-dl-orange/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-dl-green/10 px-4 py-2 text-sm font-semibold text-dl-green">
            Testimonials
          </span>

          <h2 className="mt-5 font-display text-4xl font-bold text-dl-dark dark:text-white lg:text-5xl">
            Trusted by Homeowners
            <span className="block text-dl-orange">
              & Businesses Across Nigeria
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-dl-ink/70 dark:text-white/70">
            Every installation is built on trust, quality workmanship and
            dependable after-sales support. Here&apos;s what some of our
            satisfied clients have to say.
          </p>

          {/* Review Summary */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <HiStar key={index} className="text-xl text-yellow-400" />
              ))}
            </div>

            <span className="font-semibold text-dl-dark dark:text-white">
              Rated 4.9/5 on Google Reviews
            </span>
          </div>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-dl-dark/10 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              {/* Decorative Quote */}

              <span className="absolute right-6 top-4 font-serif text-8xl text-dl-orange/10">
                ”
              </span>

              {/* Stars */}

              <div className="mb-6 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <HiStar key={i} className="text-lg text-yellow-400" />
                ))}
              </div>

              {/* Quote */}

              <p className="relative leading-8 text-dl-ink/75 dark:text-white/75">
                &quot;{t.quote}&quot;
              </p>

              {/* Divider */}

              <div className="my-8 h-px bg-gradient-to-r from-dl-green/20 via-dl-orange/20 to-transparent" />

              {/* Author */}

              <div>
                <h4 className="font-display text-lg font-semibold text-dl-dark dark:text-white">
                  {t.name}
                </h4>

                <p className="mt-1 text-sm font-medium text-dl-green">
                  Verified Google Review
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://www.google.com/search?q=davelaw+technologies&rlz=1C1GCEA_enNG1104NG1104&oq=dave&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIHCAMQABiPAjIHCAQQABiPAjIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPdIBBzg5NGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x1036529510c9cd45:0x695b0d73c80963b3,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-dl-orange px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(242,121,10,0.35)]"
          >
            See More Google Reviews
            <HiArrowTopRightOnSquare className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
