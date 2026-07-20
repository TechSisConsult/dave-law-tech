'use client';

import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineChatAlt2,
} from 'react-icons/hi';

const WHATSAPP_NUMBER = '2348033699776';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const messageBody = useMemo(
    () =>
      [
        `General inquiry from ${name || '[name]'}`,
        `Phone: ${phone || '[phone]'}`,
        '',
        message || '[message]',
      ].join('\n'),
    [name, phone, message],
  );

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageBody)}`;
  const emailHref = `mailto:hello@davelawtechnologies.com?subject=${encodeURIComponent(
    'General Inquiry — Davelaw Technologies',
  )}&body=${encodeURIComponent(messageBody)}`;

  return (
    <main className="bg-dl-cream dark:bg-dl-darker min-h-screen transition-colors">
      <section className="bg-dl-gradient text-white">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-14">
          <span className="text-xs font-semibold tracking-widest text-dl-orangeLight uppercase">
            Contact Us
          </span>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mt-3 max-w-xl">
            Not sure what you need yet? Just talk to us.
          </h1>
          <p className="text-white/60 mt-3 max-w-lg">
            Questions, site inspections, or general inquiries — this is the
            front door. For pricing on specific products, use{' '}
            <a
              href="/request-quote"
              className="underline hover:text-dl-orangeLight"
            >
              Request a Quote
            </a>{' '}
            instead.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-14 grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-5"
        >
          <div className="rounded-2xl border border-dl-dark/10 dark:border-white/10 bg-white dark:bg-dl-dark p-6">
            <div className="flex items-start gap-3">
              <HiOutlineLocationMarker className="text-dl-green text-xl mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-dl-dark dark:text-white">
                  Office
                </p>
                <p className="text-sm text-dl-ink/60 dark:text-white/60 mt-1">
                  Suite 91, Stadium Shopping Complex, Ibrahim Taiwo Road, Ilorin
                  West, Kwara State, Nigeria
                </p>
                <p className="text-xs text-dl-ink/30 dark:text-white/30 mt-1">
                  [Confirm this is still current]
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-dl-dark/10 dark:border-white/10 bg-white dark:bg-dl-dark p-6">
            <div className="flex items-start gap-3">
              <HiOutlinePhone className="text-dl-green text-xl mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-dl-dark dark:text-white">
                  Phone / WhatsApp
                </p>
                <p className="text-sm text-dl-ink/60 dark:text-white/60 mt-1">
                  +234 803 369 9776
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-dl-dark/10 dark:border-white/10 bg-white dark:bg-dl-dark p-6">
            <div className="flex items-start gap-3">
              <HiOutlineMail className="text-dl-green text-xl mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-dl-dark dark:text-white">
                  Email
                </p>
                <p className="text-sm text-dl-ink/60 dark:text-white/60 mt-1">
                  hello@davelawtechnologies.com
                </p>
                <p className="text-xs text-dl-ink/30 dark:text-white/30 mt-1">
                  [Confirm real business email]
                </p>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-dl-green text-white px-6 py-3.5 font-semibold hover:brightness-105 transition"
          >
            <HiOutlineChatAlt2 /> Chat with us on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-dl-dark/10 dark:border-white/10 bg-white dark:bg-dl-dark p-6 lg:p-8"
        >
          <h2 className="font-display font-semibold text-lg text-dl-dark dark:text-white mb-5">
            Send a message
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-dl-ink/70 dark:text-white/70">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 rounded-lg border border-dl-dark/15 dark:border-white/15 bg-dl-cream dark:bg-dl-darker px-4 py-2.5 text-dl-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-dl-green/40"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-dl-ink/70 dark:text-white/70">
                Phone Number
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-2 rounded-lg border border-dl-dark/15 dark:border-white/15 bg-dl-cream dark:bg-dl-darker px-4 py-2.5 text-dl-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-dl-green/40"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-dl-ink/70 dark:text-white/70">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full mt-2 rounded-lg border border-dl-dark/15 dark:border-white/15 bg-dl-cream dark:bg-dl-darker px-4 py-2.5 text-dl-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-dl-green/40"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center rounded-full bg-dl-orange-gradient px-5 py-3 font-semibold text-dl-dark hover:brightness-105 transition"
              >
                Send via WhatsApp
              </a>
              <a
                href={emailHref}
                className="text-center rounded-full border border-dl-dark/15 dark:border-white/15 px-5 py-3 font-semibold text-dl-ink/70 dark:text-white/70 hover:bg-dl-dark/5 dark:hover:bg-white/5 transition"
              >
                Send via Email
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
