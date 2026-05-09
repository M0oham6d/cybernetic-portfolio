import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";
import { profile, stats } from "@/lib/portfolio-data";

function useRotatingWord(words: string[], interval = 2200) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words, interval]);
  return words[i];
}

export function Hero() {
  const role = useRotatingWord(profile.roles);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          {profile.available ? "Available for new opportunities" : "Currently engaged"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Hi, I'm <span className="text-gradient">{profile.name}</span>
          <br />
          <span className="text-foreground">a </span>
          <span className="relative inline-block">
            <motion.span
              key={role}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="text-gradient"
            >
              {role}
            </motion.span>
            <span className="caret ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 bg-primary align-middle" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          {profile.tagline} I work across Microsoft 365 security, SOC engineering, network defense, IoT and modern web — with hands-on experience in Sentinel, Defender XDR, Splunk, Cisco and ESP32.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow"
          >
            View projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" /> Contact me
          </a>
          <a
            href={`mailto:${profile.email}?subject=Resume%20Request`}
            className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground hover:border-primary/50"
          >
            <Download className="h-4 w-4" /> Request CV
          </a>
        </motion.div>

        <div className="mt-8 flex items-center gap-4 text-muted-foreground">
          <a aria-label="GitHub" href={profile.socials.github} target="_blank" rel="noreferrer"
            className="rounded-md p-2 hover:bg-secondary/60 hover:text-foreground transition">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href={profile.socials.linkedin} target="_blank" rel="noreferrer"
            className="rounded-md p-2 hover:bg-secondary/60 hover:text-foreground transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <span className="inline-flex items-center gap-1.5 text-xs">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative mt-14 rounded-2xl glass card-elevated p-1"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/60">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
            <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" /> ~/security/whoami.sh
            </span>
          </div>
          <pre className="px-5 py-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
{`$ whoami
> ${profile.name.toLowerCase().replace(/\s/g, "_")}
$ cat /etc/role
> ${profile.title}
$ ls ./stack
> entra-id  intune  defender-xdr  purview  sentinel  splunk
> kql  spl  yara  nmap  wireshark  cisco  esp32  react
$ status --available
> `}<span className="text-primary">true</span>{` # open to cybersecurity & engineering roles`}
          </pre>
        </motion.div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gradient">{s.value}+</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
