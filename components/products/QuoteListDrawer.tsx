"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { HiX, HiOutlineTrash } from "react-icons/hi";
import { useQuoteList } from "@/context/QuoteListContext";

export default function QuoteListDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, clearAll } = useQuoteList();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-dl-dark/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 z-[70] h-full w-full sm:w-96 bg-white dark:bg-dl-darker shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-dl-dark/10 dark:border-white/10">
              <div>
                <h3 className="font-display font-semibold text-dl-dark dark:text-white">
                  Quote List {items.length > 0 && <span className="text-dl-orange">({items.length})</span>}
                </h3>
                <p className="text-xs text-dl-ink/50 dark:text-white/50 mt-0.5">
                  Products you want to include in your quote request
                </p>
              </div>
              <button onClick={onClose} aria-label="Close quote list" className="text-dl-ink/50 dark:text-white/50 hover:text-dl-ink dark:hover:text-white text-xl">
                <HiX />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {items.length === 0 ? (
                <p className="text-sm text-dl-ink/40 dark:text-white/40 text-center mt-10">
                  No products added yet. Browse products and tap &quot;Add to Quote List.&quot;
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-3 rounded-xl border border-dl-dark/10 dark:border-white/10 p-4"
                  >
                    <div>
                      <p className="font-medium text-sm text-dl-ink dark:text-white">{item.name}</p>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {item.specs.map((s) => (
                          <span key={s} className="text-[11px] px-2 py-0.5 rounded-full bg-dl-dark/5 dark:bg-white/10 text-dl-ink/60 dark:text-white/60">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-dl-ink/30 hover:text-red-500 shrink-0"
                    >
                      <HiOutlineTrash />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-5 border-t border-dl-dark/10 dark:border-white/10 space-y-2">
                <Link
                  href="/request-quote"
                  onClick={onClose}
                  className="block text-center rounded-full bg-dl-orange-gradient px-5 py-3 font-semibold text-dl-dark hover:brightness-105 transition"
                >
                  Request Quote for All Products
                </Link>
                <button
                  onClick={clearAll}
                  className="w-full text-center text-sm text-dl-ink/40 dark:text-white/40 hover:text-red-500 py-2"
                >
                  Clear all
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
