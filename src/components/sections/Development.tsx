import Image from "next/image";
import { devWork } from "@/data/projects";

export default function Development() {
  return (
    <section
      id="development"
      className="border-y border-ink/10 bg-paperDark px-6 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-2">
          <span className="eyebrow text-ink/50">Also — Side of Code</span>
          <h2 className="font-serifAccent text-3xl italic text-ink/80 md:text-4xl">
            Other things I build
          </h2>
          <p className="max-w-md text-sm text-ink/50">
            Between design projects, I build the occasional Next.js app — mostly
            to keep my hands sharp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {devWork.map((d) => (
            <a
              key={d.id}
              href="#"
              className="group flex flex-col gap-3 border border-ink/10 bg-paper p-3 transition-colors hover:border-forest/40"
            >
              <div className="relative aspect-video overflow-hidden rounded-sm grayscale transition-all duration-500 group-hover:grayscale-0">
                <Image src={d.image} alt={d.title} fill className="object-cover" sizes="33vw" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-ink/80">{d.title}</h3>
                <span className="font-mono text-[11px] text-ink/40">{d.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
