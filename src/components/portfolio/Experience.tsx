import { motion } from "framer-motion";
import { Section } from "./Section";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// experience"
      title="Career & training timeline"
      description="From embedded systems and networking to Blue Team operations and cloud security."
    >
      <ol className="relative ml-3 border-l border-border/70">
        {experiences.map((e, i) => (
          <motion.li
            key={`${e.role}-${e.company}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative mb-8 pl-6"
          >
            <span className="absolute -left-[7px] top-2 grid h-3.5 w-3.5 place-items-center rounded-full bg-primary ring-4 ring-background" />
            <div className="glass rounded-2xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {e.role} <span className="text-muted-foreground">· {e.company}</span>
                </h3>
                <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
                  {e.tag}
                </span>
              </div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">
                {e.period} · {e.location}
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
