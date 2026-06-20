import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const socials = [
  { label: "Email", value: "vivekmandal123v@gmail.com", href: "mailto:vivekmandal123v@gmail.com" },
  { label: "Instagram", value: "@vivek.designs", href: "https://instagram.com" },
  { label: "LinkedIn", value: "/in/vivek", href: "https://www.linkedin.com/in/vivek-mandal-508660358/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink px-6 pb-10 pt-24 text-paper md:px-10"
    >
      <span className="eyebrow text-mustard">04 — Contact</span>

      <div className="my-12 md:my-0">
        <RevealText
          as="h2"
          className="font-display text-[14vw] leading-[0.85] tracking-tightest md:text-[8vw]"
        >
          LET'S CREATE
        </RevealText>
        <RevealText
          as="h2"
          delay={0.1}
          className="font-display text-[14vw] leading-[0.85] tracking-tightest text-mustard md:text-[8vw]"
        >
          SOMETHING
        </RevealText>
        <RevealText
          as="h2"
          delay={0.2}
          className="font-display text-[14vw] leading-[0.85] tracking-tightest md:text-[8vw]"
        >
          MEMORABLE
        </RevealText>
      </div>

      <div className="flex flex-col gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-12">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="group block">
              <span className="eyebrow text-paper/40">{s.label}</span>
              <p className="font-serifAccent text-xl italic transition-colors group-hover:text-mustard">
                {s.value}
              </p>
            </a>
          ))}
        </div>

        <MagneticButton
          href="mailto:vivekmandal123v@gmail.com"
          className="inline-flex w-fit items-center gap-3 rounded-full bg-mustard px-7 py-4 text-ink"
        >
          <span className="eyebrow">Start a Project</span>
          <span aria-hidden>↗</span>
        </MagneticButton>
      </div>

      <p className="font-mono mt-10 text-[11px] text-paper/30">
        © {new Date().getFullYear()} Vivek. All rights reserved.
      </p>
    </section>
  );
}
