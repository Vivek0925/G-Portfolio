import RevealText from "@/components/ui/RevealText";
import ProjectCard from "@/components/ui/ProjectCard";
import { graphicWork } from "@/data/projects";

export default function GraphicDesign() {
  return (
    <section
      id="graphics"
      className=" px-6 py-20 text-paper md:px-10 md:py-28"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <span className="eyebrow text-forest">01 — Graphic Design</span>

          <RevealText
            as="h2"
            className="font-display text-black mt-3 text-[12vw] leading-[0.85] tracking-tightest md:text-[6vw]"
          >
            SELECTED WORK
          </RevealText>
        </div>

        <span className="font-mono hidden text-sm opacity-60 md:block">
          {String(graphicWork.length).padStart(2, "0")} Projects
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {graphicWork.map((project) => (
          <div
            key={project.id}
            className={project.title === "Agresita 2026" ? "col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
