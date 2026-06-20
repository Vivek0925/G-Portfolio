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
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group"
    >
      <motion.div
        variants={{
          rest: {
            y: 0,
          },
          hover: {
            y: -8,
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden rounded-2xl"
      >
        <div className="relative">
          <motion.div
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: 1.04,
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={2000}
              className="h-auto w-full object-cover"
            />

            {/* subtle premium overlay */}
            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                },
                hover: {
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.3,
              }}
              className="absolute inset-0 bg-black/20"
            />

            {/* hover info */}
            <motion.div
              variants={{
                rest: {
                  y: 20,
                  opacity: 0,
                },
                hover: {
                  y: 0,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.35,
              }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-mustard">
                {project.tag}
              </span>

              <h3 className="mt-2 font-display text-3xl leading-none text-paper">
                {project.title}
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-2xl text-paper">
            {project.title}
          </h3>

          <p className="mt-1 font-serifAccent italic text-paper/60">
            {project.category}
          </p>
        </div>

        <span className="font-mono text-xs text-mustard">
          {project.year}
        </span>
      </div>
    </motion.article>
  );
}