"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={1000}
          className="
            w-full
            h-auto
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute inset-0
            bg-black/0
            transition-all
            duration-300
            group-hover:bg-black/30
          "
        />

        <div
          className="
            absolute bottom-0 left-0 right-0
            translate-y-full
            p-3
            transition-all
            duration-300
            group-hover:translate-y-0
          "
        >
          <div className="rounded-lg bg-black/70 p-3 backdrop-blur-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mustard">
              {project.tag}
            </p>

            <h3 className="mt-1 text-sm font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h3 className="text-sm font-medium text-paper">
          {project.title}
        </h3>

        <p className="text-xs text-paper/60">
          {project.category}
        </p>
      </div>
    </motion.article>
  );
}