import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <Section id="education" eyebrow="// education" title="Education">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="glass card-elevated rounded-2xl p-6 md:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-muted-foreground">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-primary">{education.period}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {education.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
