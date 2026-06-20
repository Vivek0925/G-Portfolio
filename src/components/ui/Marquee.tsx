"use client";

import { motion } from "framer-motion";

export default function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 }).fill(text) as string[];
  return (
    <div className="overflow-hidden border-y border-ink/15 bg-mustard py-3">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-display flex items-center gap-8 text-2xl tracking-tightest text-ink md:text-3xl">
            {t}
            <span className="text-paper">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
