"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Graphics", href: "#graphics" },
  { label: "Videos", href: "#videos" },
  { label: "Development", href: "#development", muted: true },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-sm shadow-[0_1px_0_rgba(17,17,17,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-display text-2xl tracking-tightest">
          VIVEK
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`eyebrow relative transition-colors hover:text-forest ${
                l.muted ? "opacity-50 hover:opacity-100" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="eyebrow rounded-full border border-ink px-4 py-2 transition-colors hover:bg-forest hover:text-paper hover:border-forest"
          >
            Let&apos;s Talk
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="z-50 flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block h-[2px] w-7 bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 top-full flex flex-col gap-1 bg-paper px-6 pb-8 pt-2 shadow-lg md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-display border-b border-ink/10 py-3 text-3xl tracking-tightest ${
                l.muted ? "opacity-50" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
