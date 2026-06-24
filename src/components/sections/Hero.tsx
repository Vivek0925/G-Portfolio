"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Hero() {
  return (
    <section id="top" className="relative h-screen overflow-hidden">
      {/* Background GIF / Video */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/cover3.gif')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navbar spacing */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-10 pt-32 pb-10">
        {/* Top Row */}
        <div className="flex justify-between">
          <span className="eyebrow text-white">PORTFOLIO — VOL. 01</span>

          <span className="eyebrow text-white hidden md:block">
            BASED IN INDIA / OPEN FOR WORK
          </span>
        </div>

        {/* Hero Text */}
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1
                className={`${inter.className}
  text-paper
  font-light
  text-[10vw]
  md:text-[9vw]
  leading-[1.25]
  tracking-[-0.06em]
  `}
              >
                <div>Designing Visuals &</div>

                <div className="ml-[18vw]">Digital Experiences</div>
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
             
            </div>

          <div className="flex items-center gap-3 text-white">
            <span className="eyebrow">SCROLL</span>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="h-10 w-[1px] bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
