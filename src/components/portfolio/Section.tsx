import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
