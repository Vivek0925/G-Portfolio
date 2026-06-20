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
    <div className="overflow-visible">
      <Tag
        className={className}
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </Tag>
    </div>
  );
}
