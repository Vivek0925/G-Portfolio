"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function RevealText({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
}) {
  const Tag = motion[as as "div"];

  return (
    <div className="overflow-hidden">
      <Tag
        className={className}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </Tag>
    </div>
  );
}