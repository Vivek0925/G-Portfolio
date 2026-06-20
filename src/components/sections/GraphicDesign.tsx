import RevealText from "@/components/ui/RevealText";
import ProjectCard from "@/components/ui/ProjectCard";
import { graphicWork } from "@/data/projects";

export default function GraphicDesign() {
  return (
    <section
      id="graphics"
      className="bg-forest px-6 py-24 text-paper md:px-10 md:py-32"
    >
      <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
        <div>
          <span className="eyebrow text-mustard">
            01 — Graphic Design
          </span>

          <RevealText
            as="h2"
            className="font-display mt-3 text-[12vw] leading-[0.85] tracking-tightest md:text-[6vw]"
          >
            VISUAL IDENTITY
          </RevealText>
        </div>

        <span className="font-mono hidden text-sm opacity-60 md:block">
          {String(graphicWork.length).padStart(2, "0")} Case Studies
        </span>
      </div>

      <div className="columns-1 gap-8 md:columns-2 xl:columns-3">
        {graphicWork.map((p) => (
          <div
            key={p.id}
            className="mb-10 break-inside-avoid"
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}