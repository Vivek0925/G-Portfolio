"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work", muted: false },
  { label: "Graphics", href: "#graphics", muted: false },
  { label: "Videos", href: "#videos", muted: false },
  { label: "About", href: "#about", muted: false },
  { label: "Contact", href: "#contact", muted: false },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navText = scrolled ? "text-black" : "text-paper";

  return (
    <header
      className={`fixed top-0 z-50 w-full  ${
        scrolled
          ? "bg-paper/70 backdrop-blur-md border-b border-forest/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          className={`font-display text-2xl tracking-tightest transition-colors duration-300 ${navText}`}
        >
          VIVEK
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`eyebrow relative transition-colors duration-300 ${navText} hover:text-green-600 ${
                l.muted ? "opacity-50 hover:opacity-100" : ""
              }`}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            className={`eyebrow rounded-full px-5 py-2 ${
              scrolled
                ? "border border-black text-black hover:bg-black hover:text-paper"
                : "border border-paper text-paper hover:bg-paper hover:text-black"
            }`}
          >
            Let&apos;s Talk
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          aria-label="Toggle menu"
          className="z-50 flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block h-[2px] w-7 transition-all ${
              scrolled ? "bg-forest" : "bg-paper"
            } ${open ? "translate-y-2 rotate-45" : ""}`}
          />

          <span
            className={`block h-[2px] w-7 transition-all ${
              scrolled ? "bg-forest" : "bg-paper"
            } ${open ? "opacity-0" : ""}`}
          />

          <span
            className={`block h-[2px] w-7 transition-all ${
              scrolled ? "bg-forest" : "bg-paper"
            } ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-0 top-full flex flex-col gap-1 bg-paper px-6 pb-8 pt-2 shadow-lg md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-display border-b border-forest/10 py-3 text-3xl tracking-tightest text-forest ${
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