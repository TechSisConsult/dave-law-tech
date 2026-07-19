"use client";

import { motion } from "motion/react";
import { HiOutlineShoppingBag, HiCheck } from "react-icons/hi";
import { Product } from "@/lib/products";
import { useQuoteList } from "@/context/QuoteListContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, isInList } = useQuoteList();
  const added = isInList(product.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-dl-dark/10 dark:border-white/10 bg-white dark:bg-dl-dark p-5 flex flex-col"
    >
      <div className="aspect-square rounded-xl bg-dl-cream dark:bg-white/5 flex items-center justify-center mb-4">
        <span className="text-xs text-dl-ink/30 dark:text-white/30 text-center px-4">
          [ Product photo ]
        </span>
      </div>

      {!product.verified && (
        <span className="text-[10px] font-semibold uppercase tracking-wide text-dl-orange mb-1.5">
          Pending confirmation
        </span>
      )}

      <h3 className="font-display font-semibold text-dl-dark dark:text-white leading-snug">
        {product.name}
      </h3>

      <div className="flex flex-wrap gap-1.5 mt-2 mb-4">
        {product.specs.map((s) => (
          <span
            key={s}
            className="text-[11px] px-2 py-0.5 rounded-full bg-dl-dark/5 dark:bg-white/10 text-dl-ink/60 dark:text-white/60"
          >
            {s}
          </span>
        ))}
      </div>

      <p className="text-sm text-dl-orange font-semibold mt-auto mb-3">
        {product.price ?? "Contact for price"}
      </p>

      <button
        onClick={() => addItem(product)}
        disabled={added}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
          added
            ? "bg-dl-green/10 text-dl-green border border-dl-green/30"
            : "bg-dl-dark text-white hover:bg-dl-darker dark:bg-white dark:text-dl-dark dark:hover:bg-white/90"
        }`}
      >
        {added ? (
          <>
            <HiCheck /> Added to Quote List
          </>
        ) : (
          <>
            <HiOutlineShoppingBag /> Add to Quote List
          </>
        )}
      </button>
    </motion.div>
  );
}
