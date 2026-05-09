import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// skills"
      title="A defender's stack — and a builder's toolkit"
      description="Categorized across security, cloud, networking, programming, IoT and design."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="glass card-elevated rounded-2xl p-5"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">{g.category}</h3>
              <span className="font-mono text-xs text-muted-foreground">{g.level}%</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary/60">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${g.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-text)" }}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border/70 bg-secondary/40 px-2 py-1 font-mono text-[11px] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
