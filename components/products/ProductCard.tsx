'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { HiOutlineShoppingBag, HiCheck, HiBolt } from 'react-icons/hi2';
import { PiBatteryChargingBold } from 'react-icons/pi';
import { MdWifi } from 'react-icons/md';

import { Product } from '@/lib/products';
import { useQuoteList } from '@/context/QuoteListContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, isInList } = useQuoteList();

  const added = isInList(product.id);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-dl-dark/10 bg-white shadow-sm transition-all hover:border-dl-orange/30 hover:shadow-2xl dark:border-white/10 dark:bg-dl-dark"
    >
      {/* Product Image */}
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-dl-cream dark:bg-dl-darker">
        {/* Category */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-dl-green px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {product.category}
        </span>

        {/* Badge */}
        <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-dl-green shadow dark:bg-dl-dark">
          Genuine
        </span>

        <Image
          src={product.image || '/products/placeholder.png'}
          alt={product.name}
          fill
          className="object-contain p-8 transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-dl-dark dark:text-white">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-dl-ink/65 dark:text-white/65">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="text-dl-orange">★★★★★</div>

          <span className="text-xs font-medium text-dl-ink/55 dark:text-white/55">
            Authorized Product
          </span>
        </div>

        {/* Specs */}
        <div className="mt-5 flex flex-wrap gap-2">
          {product.specs.slice(0, 3).map((spec, index) => {
            const Icon =
              index === 0
                ? HiBolt
                : index === 1
                  ? PiBatteryChargingBold
                  : MdWifi;

            return (
              <span
                key={spec}
                className="inline-flex items-center gap-1 rounded-full bg-dl-dark/5 px-3 py-1 text-xs font-medium text-dl-ink/70 dark:bg-white/10 dark:text-white/70"
              >
                <Icon size={13} />
                {spec}
              </span>
            );
          })}
        </div>

        {/* Price */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-wide text-dl-ink/40 dark:text-white/40">
            Price
          </p>

          <p className="mt-1 font-display text-xl font-bold text-dl-orange">
            {product.price ?? 'Available on Request'}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-7 space-y-3">
          <button
            onClick={() => addItem(product)}
            disabled={added}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
              added
                ? 'border border-dl-green/30 bg-dl-green/10 text-dl-green'
                : 'bg-dl-orange text-white hover:brightness-110'
            }`}
          >
            {added ? (
              <>
                <HiCheck />
                Added to Quote
              </>
            ) : (
              <>
                <HiOutlineShoppingBag />
                Add to Quote
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
