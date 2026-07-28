'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import {
  HiOutlineTrash,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineChatAlt2,
  HiOutlineMail,
} from 'react-icons/hi';
import { useQuoteList } from '@/context/QuoteListContext';

const WHATSAPP_NUMBER = '2348033699776';

const STEPS = ['Review Products', 'Your Details', 'Send Request'];

export default function RequestQuotePage() {
  const { items, removeItem } = useQuoteList();
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email' | null>(
    null,
  );

  const canProceedFromDetails =
    name.trim().length > 1 && phone.trim().length > 6;

  const messageBody = useMemo(() => {
    const productLines = items
      .map((p) => `• ${p.name} (${p.specs.join(', ')})`)
      .join('\n');
    return [
      `Quote request from ${name || '[name]'}`,
      `Phone: ${phone || '[phone]'}`,
      `Location: ${location || '[location]'}`,
      '',
      'Products:',
      productLines || '(none selected)',
      '',
      notes ? `Notes: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  }, [items, name, phone, location, notes]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageBody)}`;
  const emailHref = `mailto:hello@davelawtechnologies.com?subject=${encodeURIComponent(
    'Quote Request — Davelaw Technologies',
  )}&body=${encodeURIComponent(messageBody)}`;

  return (
    <main className="bg-dl-cream dark:bg-dl-darker min-h-screen transition-colors">
      <section className="bg-dl-gradient text-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 py-14">
          <span className="text-xs font-semibold tracking-widest text-dl-orangeLight uppercase">
            Request a Quote
          </span>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mt-3">
            Send your selected products to our team for pricing.
          </h1>

          <div className="flex items-center gap-2 sm:gap-4 mt-8">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-4">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    i <= step
                      ? 'bg-dl-orange text-dl-dark'
                      : 'bg-white/10 text-white/40'
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`hidden sm:inline text-sm font-medium ${i <= step ? 'text-white' : 'text-white/40'}`}
                >
                  {label}
                </span>
                {i < STEPS.length - 1 && (
                  <div className="w-6 h-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="s0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-dl-ink/50 dark:text-white/50">
                    Your Quote List is empty. Browse products and add some
                    first.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 mt-5 rounded-full bg-dl-dark dark:bg-white text-white dark:text-dl-dark px-6 py-3 font-semibold"
                  >
                    Browse Products <HiOutlineArrowRight />
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-3 rounded-xl border border-dl-dark/10 dark:border-white/10 bg-white dark:bg-dl-dark p-4"
                    >
                      <div>
                        <p className="font-medium text-dl-ink dark:text-white">
                          {item.name}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {item.specs.map((s) => (
                            <span
                              key={s}
                              className="text-[11px] px-2 py-0.5 rounded-full bg-dl-dark/5 dark:bg-white/10 text-dl-ink/60 dark:text-white/60"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-dl-ink/30 hover:text-red-500 shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <HiOutlineTrash />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div>
                <label className="text-sm font-medium text-dl-ink/70 dark:text-white/70">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full mt-2 rounded-lg border border-dl-dark/15 dark:border-white/15 bg-white dark:bg-dl-dark px-4 py-2.5 text-dl-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-dl-green/40"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-dl-ink/70 dark:text-white/70">
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="080XXXXXXXX"
                  className="w-full mt-2 rounded-lg border border-dl-dark/15 dark:border-white/15 bg-white dark:bg-dl-dark px-4 py-2.5 text-dl-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-dl-green/40"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-dl-ink/70 dark:text-white/70">
                  Location
                </label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. GRA Ilorin, Tanke..."
                  className="w-full mt-2 rounded-lg border border-dl-dark/15 dark:border-white/15 bg-white dark:bg-dl-dark px-4 py-2.5 text-dl-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-dl-green/40"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-dl-ink/70 dark:text-white/70">
                  Additional Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Property type, backup hours needed, budget range..."
                  className="w-full mt-2 rounded-lg border border-dl-dark/15 dark:border-white/15 bg-white dark:bg-dl-dark px-4 py-2.5 text-dl-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-dl-green/40"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <p className="text-sm text-dl-ink/50 dark:text-white/50 mb-2">
                Choose how to send
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSendMethod('whatsapp')}
                  className="rounded-2xl border-2 border-dl-green bg-dl-green/5 p-6 text-center hover:bg-dl-green/10 transition"
                >
                  <HiOutlineChatAlt2 className="text-3xl text-dl-green mx-auto" />
                  <p className="font-display font-semibold text-dl-dark dark:text-white mt-3">
                    Send via WhatsApp
                  </p>
                  <p className="text-xs text-dl-ink/50 dark:text-white/50 mt-1">
                    Opens WhatsApp with your quote pre-filled. Fastest response.
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-dl-green bg-dl-green/10 rounded-full px-3 py-1">
                    Recommended — Instant
                  </span>
                </a>

                <a
                  href={emailHref}
                  onClick={() => setSendMethod('email')}
                  className="rounded-2xl border border-dl-dark/15 dark:border-white/15 p-6 text-center hover:border-dl-dark/30 transition"
                >
                  <HiOutlineMail className="text-3xl text-dl-ink/60 dark:text-white/60 mx-auto" />
                  <p className="font-display font-semibold text-dl-dark dark:text-white mt-3">
                    Send via Email
                  </p>
                  <p className="text-xs text-dl-ink/50 dark:text-white/50 mt-1">
                    Opens your email app with the quote pre-filled, addressed to
                    our team.
                  </p>
                </a>
              </div>
              {sendMethod && (
                <p className="text-center text-sm text-dl-green mt-4">
                  {sendMethod === 'whatsapp'
                    ? 'WhatsApp should have opened in a new tab.'
                    : 'Your email app should have opened.'}{' '}
                  If nothing happened, check your pop-up blocker.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {step < 2 && (
          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm font-medium text-dl-ink/50 dark:text-white/50 disabled:opacity-0"
            >
              <HiOutlineArrowLeft /> Back
            </button>
            <button
              onClick={() => setStep((s) => Math.min(2, s + 1))}
              disabled={
                (step === 0 && items.length === 0) ||
                (step === 1 && !canProceedFromDetails)
              }
              className="inline-flex items-center gap-2 rounded-full bg-dl-orange-gradient px-7 py-3 font-semibold text-dl-dark shadow-meter-glow hover:brightness-105 transition disabled:opacity-40 disabled:pointer-events-none"
            >
              Continue <HiOutlineArrowRight />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
