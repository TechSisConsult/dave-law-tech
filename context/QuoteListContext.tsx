"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product } from "@/lib/products";

interface QuoteListContextValue {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearAll: () => void;
  isInList: (id: string) => boolean;
}

const QuoteListContext = createContext<QuoteListContextValue | undefined>(undefined);

const STORAGE_KEY = "davelaw-quote-list";

export function QuoteListProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage once on mount (client-only)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  // Persist on every change, after initial hydration
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage full or unavailable — fail silently, list still works in-memory
    }
  }, [items, hydrated]);

  const addItem = (product: Product) => {
    setItems((prev) => (prev.some((p) => p.id === product.id) ? prev : [...prev, product]));
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearAll = () => setItems([]);

  const isInList = (id: string) => items.some((p) => p.id === id);

  return (
    <QuoteListContext.Provider value={{ items, addItem, removeItem, clearAll, isInList }}>
      {children}
    </QuoteListContext.Provider>
  );
}

export function useQuoteList() {
  const ctx = useContext(QuoteListContext);
  if (!ctx) throw new Error("useQuoteList must be used within a QuoteListProvider");
  return ctx;
}
