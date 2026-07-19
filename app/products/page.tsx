"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { PRODUCTS, PRODUCT_CATEGORIES, ProductCategory } from "@/lib/products";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsPage() {
  const [active, setActive] = useState<ProductCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main className="bg-dl-cream dark:bg-dl-darker min-h-screen transition-colors">
      <section className="bg-dl-gradient text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
          <span className="text-xs font-semibold tracking-widest text-dl-orangeLight uppercase">
            Shop Solar Products
          </span>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mt-3 max-w-xl">
            Genuine inverters, batteries &amp; solar panels — supplied and installed by Davelaw.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
        <CategoryFilter categories={PRODUCT_CATEGORIES} active={active} onChange={setActive} />

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-dl-ink/40 dark:text-white/40 py-16">
            No products in this category yet.
          </p>
        )}
      </section>
    </main>
  );
}
