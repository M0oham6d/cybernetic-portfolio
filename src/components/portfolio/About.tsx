import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target } from "lucide-react";
import { Section } from "./Section";
import { profile, education } from "@/lib/portfolio-data";

const cards = [
  {
    icon: Briefcase,
    title: "What I do",
    body: "Blue Team operations, Microsoft 365 security engineering, network design and secure software — across cloud, identity and edge.",
  },
  {
    icon: GraduationCap,
    title: "Background",
    body: `${education.degree} — ${education.school}. ${education.period}.`,
  },
  {
    icon: Target,
    title: "What I'm chasing",
    body: "Roles in SOC / Blue Team, Microsoft 365 / Cloud Security and security-minded software engineering.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// about"
      title="Engineer at the intersection of security and software"
      description={profile.summary}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
