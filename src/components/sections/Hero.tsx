"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/ui/RevealText";

const lines = ["DESIGNING", "VISUALS &", "DIGITAL", "EXPERIENCES"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-visible px-6 pb-10 pt-32 md:px-10 md:pt-36"
    >
      {/* eyebrow row */}
      <div className="flex items-start justify-between">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="eyebrow crop-mark"
        >
          Portfolio — Vol. 01
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="eyebrow hidden crop-mark md:block"
        >
          Based in India / Open for Work
        </motion.span>
      </div>

      {/* massive headline */}
      <div className="relative my-10 md:my-3">
        <h1 className="font-display leading-[0.85] tracking-tightest text-[16vw] md:text-[9vw]">
          {lines.map((line, i) => (
            <RevealText key={line} delay={0.15 * i} as="span" className="block">
              {i === 1 ? (
                <>
                  VISUALS{" "}
                  <span className="text-stroke">&amp;</span>
                </>
              ) : (
                line
              )}
            </RevealText>
          ))}
        </h1>

        {/* decorative floating mustard disc */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-2 top-2 hidden h-20 w-20 rounded-full bg-mustard md:flex md:h-28 md:w-28 md:items-center md:justify-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-widish text-ink/70 rotate-12">
            est. 2021
          </span>
        </motion.div>
      </div>

      {/* subheading roles + scroll cue */}
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {["Graphic Designer", "Video Editor", "Creative Developer"].map(
            (role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                className={`font-serifAccent text-lg italic md:text-2xl ${
                  i === 2 ? "text-forest/70" : "text-ink"
                }`}
              >
                {role}
                {i < 2 && <span className="ml-6 text-mustard">·</span>}
              </motion.span>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="eyebrow">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="block h-8 w-[1px] origin-top bg-ink"
          />
        </motion.div>
      </div>
    </section>
  );
}
