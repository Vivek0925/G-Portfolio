import Image from "next/image";
import RevealText from "@/components/ui/RevealText";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32">
      <span className="eyebrow text-forest">03 — About</span>
      <RevealText
        as="h2"
        className="font-display mt-3 text-[13vw] leading-[0.85] tracking-tightest md:text-[6vw]"
      >
        THE PERSON
      </RevealText>

      <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
        <div className="relative aspect-[4/5] md:col-span-4">
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=900&auto=format&fit=crop"
            alt="Vivek at his desk"
            fill
            className="object-cover"
          />
          <span className="eyebrow crop-mark absolute -bottom-6 left-0 text-ink/50">
            Studio, 2025
          </span>
        </div>

        <div className="md:col-span-1" />

        <div className="md:col-span-7">
          <p className="font-serifAccent text-2xl italic leading-snug text-ink md:text-3xl">
            "I design the way an editor cuts a film — every frame, every
            margin, earning its place."
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70 md:text-lg">
            <p>
              Vivek is a graphic designer and video editor working at the
              intersection of print, motion, and digital identity. His work
              spans branding systems, campaign design, and cinematic edits
              for clients who want their visuals to feel considered, not
              templated.
            </p>
            <p>
              Trained on the principles of Swiss grid design and editorial
              layout, he treats every project — a poster, a reel, a brand
              system — as a small publication: structured, deliberate, and
              built to be looked at twice.
            </p>
            <p>
              He also happens to build the occasional website, because good
              design deserves a good frame to live in.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-6">
            {[
              ["Tools", "Photoshop · Illustrator · Premiere · After Effects"],
              ["Focus", "Branding · Motion · Editorial Layout"],
              ["Based", "India — Available Worldwide"],
            ].map(([label, value]) => (
              <div key={label}>
                <span className="eyebrow text-ink/40">{label}</span>
                <p className="mt-1 text-sm text-ink/70">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
