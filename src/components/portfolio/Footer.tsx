import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 mt-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with TanStack Start, Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-2">
          <a aria-label="Email" href={`mailto:${profile.email}`} className="grid h-9 w-9 place-items-center rounded-md hover:bg-secondary/60 text-muted-foreground hover:text-foreground transition">
            <Mail className="h-4 w-4" />
          </a>
          <a aria-label="GitHub" href={profile.socials.github} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md hover:bg-secondary/60 text-muted-foreground hover:text-foreground transition">
            <Github className="h-4 w-4" />
          </a>
          <a aria-label="LinkedIn" href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md hover:bg-secondary/60 text-muted-foreground hover:text-foreground transition">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
