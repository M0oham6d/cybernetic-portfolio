import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Section } from "./Section";
import { services } from "@/lib/portfolio-data";

type IconName = keyof typeof Icons;

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="// services"
      title="What I can help with"
      description="Engagements I'm equipped to support — full-time, contract or consulting."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = (Icons[s.icon as IconName] ?? Icons.Sparkles) as Icons.LucideIcon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
