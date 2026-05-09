import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageCircle, Phone, MapPin, Send, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  subject: z.string().trim().min(2, "Subject is too short").max(120),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const body = `Hi Muhammad,%0D%0A%0D%0A${encodeURIComponent(values.message)}%0D%0A%0D%0A— ${encodeURIComponent(values.name)} (${encodeURIComponent(values.email)})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${body}`;
    setSent(true);
    reset();
  };

  const inputCls =
    "w-full rounded-md border border-border bg-secondary/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 ring-cyber transition";

  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title="Let's build something secure"
      description="Open to roles in cybersecurity, M365 / cloud security and software engineering. Drop a message and I'll reply within 24 hours."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 space-y-3"
        >
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 glass rounded-xl p-4 transition hover:border-primary/40">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm font-medium break-all">{profile.email}</div>
            </div>
          </a>
          <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 transition hover:border-primary/40">
            <MessageCircle className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">WhatsApp</div>
              <div className="text-sm font-medium">{profile.phone}</div>
            </div>
          </a>
          <a href={`tel:+${profile.whatsapp}`} className="flex items-center gap-3 glass rounded-xl p-4 transition hover:border-primary/40">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="text-sm font-medium">{profile.phone}</div>
            </div>
          </a>
          <div className="flex items-center gap-3 glass rounded-xl p-4">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Location</div>
              <div className="text-sm font-medium">{profile.location}</div>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <a aria-label="GitHub" href={profile.socials.github} target="_blank" rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-lg glass hover:border-primary/40 hover:text-primary transition">
              <Github className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href={profile.socials.linkedin} target="_blank" rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-lg glass hover:border-primary/40 hover:text-primary transition">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="lg:col-span-3 glass card-elevated rounded-2xl p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">Name</label>
              <input id="name" {...register("name")} className={inputCls} placeholder="Your name" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">Email</label>
              <input id="email" type="email" {...register("email")} className={inputCls} placeholder="you@company.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs text-muted-foreground">Subject</label>
            <input id="subject" {...register("subject")} className={inputCls} placeholder="Role / project / question" />
            {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">Message</label>
            <textarea id="message" rows={6} {...register("message")} className={inputCls} placeholder="Tell me a bit about what you're working on..." />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
          </div>
          <div className="flex items-center justify-between gap-3">
            {sent ? (
              <p className="inline-flex items-center gap-1.5 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4" /> Opening your email client…
              </p>
            ) : <span className="text-xs text-muted-foreground">Sends via your default email app.</span>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 glow disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
