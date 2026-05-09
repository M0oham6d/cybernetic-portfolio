import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="// certifications"
      title="Credentials & courses"
      description="Formal training across security, networking, embedded systems and design."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 transition hover:border-primary/40"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">{c.date}</span>
            </div>
            <h3 className="mt-4 font-semibold leading-snug">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
