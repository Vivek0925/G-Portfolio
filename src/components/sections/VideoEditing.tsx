"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RevealText from "@/components/ui/RevealText";
import { videoWork } from "@/data/projects";

export default function VideoEditing() {
  return (
    <section id="videos" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
        <div>
          <span className="eyebrow text-forest">02 — Video Editing</span>
          <RevealText
            as="h2"
            className="font-display mt-3 text-[12vw] leading-[0.85] tracking-tightest md:text-[6vw]"
          >
            IN MOTION
          </RevealText>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {videoWork.map((v, i) => (
          <motion.article
            key={v.id}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`group relative overflow-hidden rounded-sm bg-ink/5 ${
              i === 1 ? "col-span-2 aspect-[16/9] md:col-span-2 md:aspect-[4/3]" : "aspect-[3/4]"
            }`}
          >
            <Image
              src={v.image}
              alt={v.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/30 transition-opacity group-hover:opacity-0" />

            {/* play button, magnetic-feeling scale on hover */}
            <motion.div
              variants={{ rest: { scale: 1 }, hover: { scale: 1.15 } }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-mustard"
            >
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path d="M0 0L14 8L0 16V0Z" fill="#111111" />
              </svg>
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 p-4">
              <span className="eyebrow text-paper drop-shadow">{v.tag}</span>
              <h3 className="font-display text-xl leading-none tracking-tightest text-paper drop-shadow">
                {v.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
