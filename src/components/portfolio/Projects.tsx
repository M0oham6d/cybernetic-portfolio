import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/lib/portfolio-data";

const categories = ["All", "Cybersecurity", "Microsoft 365", "Networking", "IoT / Embedded", "Frontend", "UI/UX"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <Section
      id="projects"
      eyebrow="// projects"
      title="Selected work across security, networks and software"
      description="Filter by category. Each project links to source or supporting docs where available."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              active === c
                ? "border-primary/50 bg-primary/15 text-primary"
                : "border-border bg-secondary/30 text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-2xl glass card-elevated p-5 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-md bg-secondary/60 px-2 py-1 font-mono">{p.category}</span>
                <span className="font-mono">{p.period}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>

              <ul className="mt-3 space-y-1">
                {p.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex gap-2 text-xs text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 5).map((t) => (
                  <span key={t} className="rounded-md border border-border/70 bg-secondary/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
                {p.tech.length > 5 && (
                  <span className="rounded-md px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    +{p.tech.length - 5} more
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-center gap-3">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                    Live demo <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
